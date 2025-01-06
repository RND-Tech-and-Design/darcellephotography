
// 

import { BehaviorSubject } from 'rxjs';
import type { Gallery, GalleryImage } from '~/types/gallery';
import { isEmpty } from 'lodash-es';
import { urlFor } from './utils';
import type { Testimonial } from '~/types/testimonial';

const TESTIMONIAL_QUERY = groq`
        *[_type=="testimonial"]{
        _id,
        quote,
        name,
        service,
        testimonial_image,
        }  | order(_createdAt desc)
`;

export class TestimonialService {

    private testimonialCache: Testimonial[] = [];
    private testimonials$: BehaviorSubject<Testimonial[]> = new BehaviorSubject(this.testimonialCache);

    constructor() {
        this.retrieveTestimonials();
    }

    get testimonialList() {
        this.retrieveTestimonials();
        return this.testimonials$.asObservable();
    }

    private retrieveTestimonials = async () => {
        if (!isEmpty(this.testimonialCache)) {
            return
        }
        this.queryForTestimonials()
            .then(testimonials => {
                this.testimonialCache = testimonials;
                this.testimonials$.next(testimonials);
            })
    }
    private queryForTestimonials = async (): Promise<Testimonial[]> => {
        const { data: preSanityTestimonials } = await useSanityQuery<any[]>(TESTIMONIAL_QUERY);
        const sanityTestimonials = toRaw(preSanityTestimonials.value);

        if (!Array.isArray(sanityTestimonials) || !sanityTestimonials.length) {
            return [];
        }

        return sanityTestimonials.map((st) => {
            const testimonialImage = st.testimonial_image;

            return {
                id: st._id,
                quote: st.quote,
                name: st.name,
                service: st.service,
                imageProvider: 'sanity',
                testimonial_image: {
                    _type: testimonialImage._type,
                    _key: testimonialImage._key,
                    asset: {
                        _type: testimonialImage.asset._type,
                        _ref: testimonialImage.asset._ref,
                    }
                }
            }
        });
    }
}