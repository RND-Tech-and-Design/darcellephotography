

import { BehaviorSubject, Subject } from 'rxjs';
import type { Gallery } from '~/types/gallery';
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { isEmpty } from 'lodash-es';
import imageUrlBuilder from "@sanity/image-url";

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
        console.log("🚀 ~ GalleryService ~ constructor ~ retrieveGalleries:");
        this.retrieveGalleries();
    }
    get portfolioGalleries() {
        return this.galleries$.asObservable();
    }
    private retrieveGalleries = async () => {

        if (!isEmpty(this.galleryCache)) {
            return
        }

        await this.queryForGalleries()
            .then(galleries => {
                 console.log("🚀 ~ GalleryService ~ retrieveGalleries= ~ galleries:", galleries);
                this.galleryCache = galleries;
                this.galleries$.next(galleries)
            })
           
    }

    private urlFor = (source: SanityImageSource) => {
        const { projectId, dataset } = useSanity().client.config();
        return projectId && dataset
            ? imageUrlBuilder({ projectId, dataset }).image(source)
            : null;
    }


    private queryForGalleries = async (): Promise<Gallery[]> => {
        const { data: preSanityGalleries } = await useSanityQuery<any[]>(GALLERY_QUERY);
        const sanityGalleries = toRaw(preSanityGalleries.value);
        console.log("🚀 ~ GalleryService ~ queryForGalleries= ~ preSanityGalleries:", preSanityGalleries);
        console.log("🚀 ~ GalleryService ~ queryForGalleries= ~ sanityGalleries:", sanityGalleries);

        // If we got nothing back, return an empty array.
        if (!Array.isArray(sanityGalleries) || !sanityGalleries.length) {
            return [];
        }

        return sanityGalleries.map((sg) => {
            // Build the images array from photos
            const images = (sg.photos ?? []).map((photo: any) => {
                const imgSrc = this.urlFor(photo?.asset)?.url() ?? '';
                return {
                    id: photo._key,
                    src: imgSrc,
                    alt: photo.alt,
                    fullSrc: imgSrc
                };
            });

            // Return the Gallery object
            return {
                id: sg.id, // or sg._id if your doc uses _id
                name: sg.title,
                description: sg.description,
                thumbnail: this.urlFor(sg.gallery_thumbnail?.asset?._ref)?.url() ?? '',
                images
            } as Gallery;
        });
    };


}
