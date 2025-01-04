import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const urlFor = (source: SanityImageSource) => {
   // const { projectId, dataset } = useSanity().client.config();
    return source;
    // return projectId && dataset
    //     ? imageUrlBuilder({ projectId, dataset }).image(source)
    //     : null;
}

export const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
