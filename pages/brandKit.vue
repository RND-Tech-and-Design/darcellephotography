<script setup lang="ts">
import IndividualImage from '~/components/Portfolio/IndividualImage.vue';

definePageMeta({
    layout: "default",
    title: "Brand Kit",
    navOrder: 1,
    description: "Overview of fonts, colors, and animations used in the brand design.",
    noNav: true,
});
interface ITailwindConfig {
    content: string[]; // Matches the "content" array in the JSON
    theme: {
        extend: {
            fontFamily: Record<string, string[]>; // Matches "fontFamily"
            animation: Record<string, string>; // Matches "animation"
            keyframes: Record<string, Record<string, Record<string, string>>>; // Matches "keyframes"
            colors: Record<string, string>; // Matches "colors"
        };
    };
    variants?: {
        extend: Record<string, string[]>; // Matches "variants.extend"
    };
    daisyui?: {
        themes: Array<Record<string, Record<string, string>>>; // Matches "daisyui.themes"
    };
    plugins: Array<null | { config?: { theme?: { extend?: { colors?: Record<string, string>; borderRadius?: Record<string, string>; }; }; }; }>; // Matches "plugins"
}

// Access Tailwind configuration from Nuxt's runtime config
const { public: { tailwindConfig } } = useRuntimeConfig();

// Cast to the TailwindConfig type
const config = tailwindConfig as unknown as ITailwindConfig;

// Extract Tailwind and DaisyUI values
const { fontFamily, colors, animation, keyframes } = config.theme.extend;
const daisyThemes = config.daisyui?.themes || [];
const themeColors = daisyThemes[0] || {};
const gallery = {
    name: 'Nature',
    images: [
        { id: 1, src: '/images/placeholder/exampleBBApoth.jpg', alt: 'Nature Image 1', fullSrc: '/images/placeholder/exampleBBApoth.jpg' },
        { id: 1, src: '/images/placeholder/exampleBBApoth.jpg', alt: 'Nature Image 1', fullSrc: '/images/placeholder/exampleBBApoth.jpg' },
        { id: 1, src: '/images/placeholder/exampleBBApoth.jpg', alt: 'Nature Image 1', fullSrc: '/images/placeholder/exampleBBApoth.jpg' },
            ],
};

</script>

<template>
    <section class="container mx-auto px-6 py-12">
        <!-- Header -->
        <header class="text-center mb-10">
            <h1 class="text-4xl font-extrabold">Brand Kit</h1>
            <p class="text-lg text-gray-600 mt-2">Your guide to the fonts, colors, and animations that define our brand.
            </p>
        </header>

        <!-- Fonts -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Fonts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                     v-for="(font, key) in fontFamily"
                     :key="key"
                     class="p-4 border rounded-lg bg-gray-50">
                    <h3 class="text-lg font-semibold">{{ key }}</h3>
                    <p class="text-sm text-gray-500 mb-2">{{ font.join(', ') }}</p>
                    <p class="text-base" :style="{ fontFamily: font.join(', ') }">The quick brown fox jumps over the
                        lazy dog.</p>
                </div>
            </div>
        </section>

        <!-- Typography Examples -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Typography</h2>
            <div class="space-y-4">
                <div>
                    <h1 class="text-4xl font-extrabold mb-2">H1: The Quick Brown Fox Jumps Over the Lazy Dog</h1>
                    <p class="text-gray-600 text-sm">Font: {{ fontFamily.sans?.join(', ') || 'Default' }}</p>
                </div>
                <div>
                    <h2 class="text-3xl font-bold mb-2">H2: The Quick Brown Fox Jumps Over the Lazy Dog</h2>
                    <p class="text-gray-600 text-sm">Font: {{ fontFamily.sans?.join(', ') || 'Default' }}</p>
                </div>
                <div>
                    <h3 class="text-2xl font-semibold mb-2">H3: The Quick Brown Fox Jumps Over the Lazy Dog</h3>
                    <p class="text-gray-600 text-sm">Font: {{ fontFamily.sans?.join(', ') || 'Default' }}</p>
                </div>
                <div>
                    <p class="text-base mb-2">P: The Quick Brown Fox Jumps Over the Lazy Dog</p>
                    <p class="text-gray-600 text-sm">Font: {{ fontFamily.sans?.join(', ') || 'Default' }}</p>
                </div>
            </div>
        </section>

        <section class="mb-12">
            <h2>Icons</h2>
            <div class="flex gap-4">
                <Icon name="material-symbols:photo-camera" class="text-primary text-4xl" />
                <Icon name="material-symbols:camera-enhance" class="text-primary text-4xl" />
                <Icon name="mdi:camera-retro" class="text-primary text-4xl" />
                <Icon name="mdi:polaroid" class="text-primary text-4xl" />
                <Icon name="mdi:camera-image" class="text-secondary text-4xl" />
                <Icon name="bx:camera" class="text-accent text-4xl" />
                <Icon name="material-symbols:home" class="text-neutral text-4xl" />
                <Icon name="material-symbols:search" class="text-neutral text-4xl" />
                <Icon name="material-symbols:settings" class="text-neutral text-4xl" />
                <Icon name="material-symbols:favorite" class="text-primary text-4xl" />
                <Icon name="material-symbols:star" class="text-primary text-4xl" />
                <Icon name="mdi:information" class="text-secondary text-4xl" />
                <Icon name="mdi:brush" class="text-accent text-4xl" />
                <Icon name="mdi:palette" class="text-accent text-4xl" />
                <Icon name="mdi:crop" class="text-accent text-4xl" />
                <Icon name="mdi:filter" class="text-accent text-4xl" />
                <Icon name="mdi:contrast" class="text-accent text-4xl" />
                <Icon name="mdi:shutter-speed" class="text-primary text-4xl" />

            </div>
        </section>

        <!-- Logos -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Logos WIP</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Main Logo -->
                <div class="text-center">
                    <NuxtImg
                             class="w-full h-auto rounded-lg object-cover bg-gray-100"
                             src="/images/logos/logo.webp"
                             alt="Main Logo"
                             placeholder
                             preload />
                    <p class="mt-2 text-gray-600">Main Logo</p>
                </div>

                <!-- Alternate Logo -->
                <div class="text-center">
                    <NuxtImg
                             class="w-full h-auto rounded-lg object-cover bg-gray-100"
                             src="/images/logos/alternate-logo.webp"
                             alt="Alternate Logo"
                             placeholder
                             preload />
                    <p class="mt-2 text-gray-600">Alternate Logo</p>
                </div>

                <!-- Favicon -->
                <div class="text-center">
                    <NuxtImg
                             class="w-16 h-16 rounded-full object-cover bg-gray-100 mx-auto"
                             src="/favicon-16x16.png"
                             alt="Favicon"
                             placeholder
                             preload />
                    <p class="mt-2 text-gray-600">Favicon</p>
                </div>
            </div>
        </section>

        <!-- Image Placeholders -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Image Placeholders WIP</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <IndividualImage
                                 v-for="image in gallery.images"
                                 :key="image.id"
                                 :image="image" />
               
            </div>
        </section>

        <!-- Image Placeholders -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Gallery Placeholders WIP</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div class="text-center">
                    <div class="bg-gray-100 w-full aspect-square mx-auto flex items-center justify-center rounded-lg">
                        <p class="text-gray-400">Thumbnail (800x800)</p>
                    </div>
                    <p class="mt-2 text-gray-600">Thumbnail</p>
                </div>
                <div class="text-center">
                    <div class="bg-gray-100 w-full aspect-square mx-auto flex items-center justify-center rounded-lg">
                        <p class="text-gray-400">Icon (128x128)</p>
                    </div>
                    <p class="mt-2 text-gray-600">Icon</p>
                </div>
            </div>
        </section>



        <!-- DaisyUI Theme Colors -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Theme Colors</h2>
            <div v-if="Object.keys(themeColors).length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div
                     v-for="(color, key) in themeColors[Object.keys(themeColors)[0]]"
                     :key="key"
                     class="text-center">
                    <div
                         :style="{ backgroundColor: color }"
                         class="w-20 h-20 rounded-lg mx-auto border border-gray-300 shadow-md">
                    </div>
                    <p class="mt-2 text-sm font-semibold">{{ key }}</p>
                    <p class="text-xs text-gray-600">{{ color }}</p>
                </div>
            </div>
            <p v-else class="text-gray-500">No theme colors available.</p>
        </section>

        <!-- Colors -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Alternate Colors</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div
                     v-for="(color, key) in colors"
                     :key="key"
                     class="p-4 border rounded-lg text-center">
                    <div :style="{ backgroundColor: color }" class="w-full h-20 rounded-lg mb-3"></div>
                    <p class="text-sm font-semibold">{{ key }}</p>
                    <p class="text-xs text-gray-500">{{ color }}</p>
                </div>
            </div>
        </section>


    </section>
</template>

<style scoped>
/* Optional: Custom styles for enhanced appearance */
.container {
    max-width: 1200px;
}

header h1 {
    color: #3e3d3d;
}

section h2 {
    color: #3e3d3d;
}
</style>