

import { BehaviorSubject } from 'rxjs';
import type { Gallery, GalleryImage } from '~/types/gallery';
import { isEmpty } from 'lodash-es';
import { urlFor } from './utils';

const GALLERY_QUERY = groq`
        *[_type=="gallery"]{
            _id,
            title,
            description,
            gallery_thumbnail,
            photos,
        } | order(_createdAt desc)`;

export class GalleryService {
    private galleryCache: Gallery[] = [];
    private galleries$: BehaviorSubject<Gallery[]> = new BehaviorSubject(this.galleryCache);

    constructor() {
        this.retrieveGalleries();
    }

    get portfolioGalleries() {
        this.retrieveGalleries();
        return this.galleries$.asObservable();
    }
    private retrieveGalleries = async () => {

        if (!isEmpty(this.galleryCache)) {
            return
        }

        await this.queryForGalleries()
            .then(galleries => {
                this.galleryCache = galleries;
                this.galleries$.next(galleries)
            })
           
    }

    private queryForGalleries = async (): Promise<Gallery[]> => {
        const { data: preSanityGalleries } = await useSanityQuery<any[]>(GALLERY_QUERY);
        const sanityGalleries = toRaw(preSanityGalleries.value);

        // If we got nothing back, return an empty array.
        if (!Array.isArray(sanityGalleries) || !sanityGalleries.length) {
            return [];
        }

        return sanityGalleries.map((sg) => {
            // Build the images array from photos
            const images: GalleryImage[] = (sg.photos ?? []).map((photo: any) => {

                const imgSrc = urlFor(photo?.asset)?.format('webp')?.url() ?? '';

                return {
                    id: photo._key,
                    src: imgSrc,
                    alt: photo.alt,
                    fullSrc: imgSrc,
                    photoObject: photo
                };
            });

            // Return the Gallery object
            return {
                id: sg._id,
                name: sg.title,
                description: sg.description,
                thumbnail: urlFor(sg.gallery_thumbnail?.asset?._ref)?.url() ?? '',
                images
            } as Gallery;
        });
    };
}
