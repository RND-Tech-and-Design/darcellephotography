
import type { Testimonial } from '~/types/testimonial';
import { GalleryService } from './galleryService';
import type { TestimonialService } from './testimonialService';

let galleryService: GalleryService | undefined = undefined;
let testimonialService: TestimonialService | undefined = undefined;

export function preInit() {
    getCreateGalleryService();
    getCreateTestimonialService();
}

export function getCreateGalleryService(): GalleryService {
    if (!galleryService) {
        galleryService = new GalleryService();
    };

    return galleryService;
}

export function getCreateTestimonialService(): TestimonialService {
    
    if(!testimonialService) {
        testimonialService = new TestimonialService();
    }

    return testimonialService;
}