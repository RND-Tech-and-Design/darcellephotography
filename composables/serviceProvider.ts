
import { GalleryService } from './galleryService';

let galleryService: GalleryService | undefined = undefined;

export function preInit() {
    getCreateGalleryService();
}

export function getCreateGalleryService(): GalleryService {
    if (!galleryService) {
        galleryService = new GalleryService();
    };

    return galleryService;
}