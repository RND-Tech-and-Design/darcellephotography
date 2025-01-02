export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    fullSrc: string;
    photoObject: GalleryImageObject;
}
export interface GalleryImageObject {
    _type: string;
    _key: string;
    asset: {
        _type: string;
        _ref: string;
    };
}

export interface Gallery {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
    images: GalleryImage[];
}