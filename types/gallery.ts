export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    fullSrc: string;
}

export interface Gallery {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
    images: GalleryImage[];
}