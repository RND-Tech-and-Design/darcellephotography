import type { SanityImageObject } from './gallery';

export interface Testimonial {
    id: number;
    quote: string;
    name: string;
    service: string;
    testimonial_image: SanityImageObject;
}