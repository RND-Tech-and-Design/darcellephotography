import type { RouteLocationNormalizedLoaded } from 'vue-router';

export const profTitle = "Darcelle Photography - Seattle Photographer";
export const site_name = "Darcelle Photography";
export const domain = "https://darcellephotography.com";
export const titleTail = `${site_name} | ${profTitle}`;
export const video = 'https://player.vimeo.com/video/555906424';

export const defaultDescription = `Seattle photographer specializing in professional headshots, personal branding, and event photography. Darcelle Photography captures timeless and authentic visuals to help elevate your personal and professional image.`;

const keywords: string[] = [
    'Seattle photographer',
    'headshot photography',
    'branding photography Seattle',
    'event photography Seattle',
    'professional photographer Seattle',
    'personal branding photos',
    'corporate photography',
    'Seattle headshots',
    'portrait photography',
    'event photographer near me',
];

export const generateMetaTags = () => {
    return [
        {
            hid: 'keywords',
            name: 'keywords',
            content: keywords.join(', '),
        },
    ];
};

interface MetaCacheValue {
    head: any;
    seoMeta: any;
}

let lastPath = '';

const metaCache: Record<string, MetaCacheValue> = {};
const usedPaths: Set<string> = new Set();

export const populateHeader = ({ meta, fullPath }: RouteLocationNormalizedLoaded) => {
    
    console.log("🚀 ~ populateHeader ~ lastPath:", lastPath);
    if (lastPath === fullPath) {
        // The path is the same as the last call, so return early
        return;
    }

    lastPath = fullPath;
    usedPaths.add(fullPath);

    if (metaCache[fullPath]) {
        // If the path is cached, use it
        useHead(metaCache[fullPath].head);
        useSeoMeta(metaCache[fullPath].seoMeta);
        return;
    }

    // Compute SEO values
    const title = meta?.title ? `${meta.title} - ${titleTail}` : titleTail;
    const description = `${(meta?.description || defaultDescription)}`
        .replace(/(\r\n|\n|\r)|\s+/gm, " ");
    const image = `${domain}/${meta?.ogImage ?? 'og-default-image.webp'}`;
    const tileLogo = `${domain}/${meta?.tileLogo ?? 'tile-logo.webp'}`;
    const url = `${domain}${fullPath}`;

    const head = {
        titleTemplate: title,
        htmlAttrs: { lang: 'en' },
        meta: generateMetaTags(),
        link: [{ rel: 'canonical', href: url }],
    };

    const ogVideo = {
        url: video,
        width: 1280,
        height: 720,
        type: 'video/mp4',
    };

    const seoMeta = {
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        applicationName: site_name,
        author: profTitle,
        creator: 'Darcelle Photography',
        description,
        fbAppId: '61552613942539', // Replace with actual Facebook App ID if applicable
        generator: 'NuxtJS',
        mobileWebAppCapable: 'yes',
        msapplicationTileImage: tileLogo,
        ogDescription: description,
        ogImage: image,
        ogImageHeight: 630,
        ogImageSecureUrl: image,
        ogImageWidth: 1200,
        ogLocale: 'en_US',
        ogSiteName: site_name,
        ogTitle: title,
        ogType: 'website',
        ogUrl: url,
        ogVideoSecureUrl: video,
        ogVideoType: 'video/mp4',
        publisher: site_name,
        title,
        twitterCard: 'summary_large_image',
        twitterCreator: '@darcellephotos', // Replace with actual Twitter handle
        twitterDescription: description,
        twitterImage: image,
        twitterTitle: title,
        ogVideo,
    };

    // Cache and apply the values
    metaCache[fullPath] = { head, seoMeta };
    useSeoMeta(seoMeta as any);
    useHead(head as any);
};
