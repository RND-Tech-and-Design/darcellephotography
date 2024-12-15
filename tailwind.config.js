import defaultTheme from 'tailwindcss/defaultTheme.js';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['rubik', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out forwards',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            colors: {
                text_primary: '#000000',
                text_secondary: '#ffffff',
                text_accent: '#000000',
                text_neutral: '#ffffff',

                soft: '#6FA9BC',
                soft_yellow: '#ffeaba',
                soft_off_white: 'FAFAFA',

                complementary_primary: '#466f6a',
                complementary_secondary: '#ef8973',
                complementary_accent: '#4a1a30',
                complementary_neutral: '#c2bbae',
                'complementary_base-100': '#0a0a0d',

                complementary_info: '#ff8400',
                complementary_success: '#a347a3',
                complementary_warning: '#0e3bf0',
                complementary_error: '#00b2b2',

                text_info: '#000000',
                text_success: '#ffffff',
                text_warning: '#ffffff',
                text_error: '#ffffff',
            },
        },
    },
    variants: {
        extend: {
            gridTemplateColumns: ['responsive'],
        },
    },
    daisyui: {
        themes: [
            {
                darcellephotography_theme: {
                    primary: '#a0a95b',
                    secondary: '#3e3d3d',
                    accent: '#a3826c',
                    neutral: '#3d4451',
                    'base-100': '#f5f5f2',

                    info: '#007bff',
                    success: '#5cb85c',
                    warning: '#f1c40f',
                    error: '#ff4d4d',
                },
            },
        ],
    },
    plugins: [typography, daisyui],
};
