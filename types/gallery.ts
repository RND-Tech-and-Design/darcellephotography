export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    fullSrc: string;
    photoObject: SanityImageObject;
}
export interface SanityImageObject {
    _type: string;
    _key: string;
    asset: {
        _type: string;
        _ref: string;
    };
}

export interface Gallery {
    id: string;
    name: string;
    thumbnail: string;
    description: string;
    images: GalleryImage[];
}