import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const urlFor = (source: SanityImageSource) => {
    const { projectId, dataset } = useSanity().client.config();
    return projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
}