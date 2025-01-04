// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import { readFileSync } from 'fs';

export default defineNuxtConfig({
    schemaOrg: {
        identity: {
            type: 'Organization',
            name: 'DarcellePhotography',
            logo: '/logo.png',

        }
    },
    runtimeConfig: {
        public: {
            siteBaseUrl: process.env.NUXT_PUBLIC_SITE_BASE_URL || '',
            tailwindConfig: JSON.parse(
                readFileSync(resolve('./build/tailwind-config.json'), 'utf-8')
            ),
        },
    },
    devtools: {
        enabled: true
    },

    routeRules: {
        '/contact': { prerender: true },
    },

    site: {
        url: 'https://DarcellePhotography.com',
        indexable: true,
    },

    sitemap: {
        strictNuxtContentPaths: true,
        sitemaps: {
            pages: {
                // extend the nuxt:pages app source
                includeAppSources: true,
                // filter the URLs to only include pages
                exclude: ['/blog/**'],
            },
            posts: {
                // extend the nuxt:pages app source
                includeAppSources: true,
                // filter the URLs to only include pages
                include: ['/blog/**'],
            },
        },
    },

    build: {
        transpile: ["rxjs"],
    },

    alias: {
        "@": resolve(__dirname, "./src"),
    },

    css: ['~/assets/css/main.scss'],

    modules: [
        'nuxt-og-image',
        'nuxt-schema-org',
        // https://nuxt.com/modules/icon https://icones.js.org/
        '@nuxt/icon',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        //https://nuxt.com/modules/gtag
        'nuxt-gtag',
        "nuxt-lodash",
        '@nuxt/image',
        '@nuxt/content',
        '@nuxtjs/sanity',
    ],

    sanity: {
        projectId: "anzm8tuo",
        dataset: "production",
    },
    image: {
        sanity: {
            projectId: "anzm8tuo",
            dataset: "production",
        }
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    gtag: {
        id: 'GTM-56JT43X' //! TODO  - add tag when production deployed
    },
    vite: {
        server: {
            watch: {
                ignored: ['./build/**'], // Ignore the build directory
            },
        },
    },

    compatibilityDate: '2024-08-24',
}
)