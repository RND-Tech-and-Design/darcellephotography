<script lang="ts" setup>
import { ref } from 'vue';
import type { GalleryImage } from '~/types/gallery';
import { urlFor } from '~/composables/utils';

const viewportHeight = ref<number>(0);

const props = defineProps({
    image: {
        type: Object as () => GalleryImage,
        required: true,
        default: () => ({
            src: '',
            alt: '',
            fullSrc: '',
        }),
    },
});

// Track lightbox state
const isLightboxOpen = ref(false);

// Track whether the thumbnail image has loaded
const isImageLoaded = ref(false);

// Store natural dimensions for the thumbnail
const naturalWidth = ref<number>(0);
const naturalHeight = ref<number>(0);

const updateViewportHeight = () => {
    viewportHeight.value = window.innerHeight;
};

const openLightbox = () => {
    if (props.image?.fullSrc) {
        isLightboxOpen.value = true;
        return;
    }
    isLightboxOpen.value = false;
};

const closeLightbox = () => {
    isLightboxOpen.value = false;
};

const onImageLoad = (event: Event) => {
    isImageLoaded.value = true;
    const imgEl = event.target as HTMLImageElement;
    if (imgEl) {
        naturalWidth.value = imgEl.naturalWidth;
        naturalHeight.value = imgEl.naturalHeight;
    }
};

onMounted(() => {
    // Set initial height
    updateViewportHeight();

    // Add resize event listener
    window.addEventListener('resize', updateViewportHeight);
});

onUnmounted(() => {
    // Clean up event listener
    window.removeEventListener('resize', updateViewportHeight);
});
</script>

<template>
    <div>
        <!-- Thumbnail -->
        <div
             @click="openLightbox"
             class="cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition">
            <MLazyWrap>
                <NuxtPicture
                             :src="image.src"
                             :alt="isImageLoaded ? image.alt : ''"
                             @load="onImageLoad"
                             provider="sanity"
                             loading="lazy"
                             placeholder
                             format="webp"
                             :style="{
                                width: naturalWidth + 'px',
                                height: naturalHeight + 'px',
                                maxWidth: '100%',
                                maxHeight: '100%',
                            }" />

                <!-- Placeholder Skeleton -->
                <template #placeholder>
                    <div
                         v-if="!isImageLoaded"
                         class="skeleton w-full"
                         :style="{
                            height: '12rem'
                        }"></div>
                </template>
            </MLazyWrap>
        </div>
        <!-- Lightbox -->
        <div v-if="isLightboxOpen"
             class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center transition-opacity"
             @click.self="closeLightbox">
            <!-- Close button -->
            <button @click="closeLightbox"
                    class="absolute top-4 right-4 bg-white text-black p-2 pb-1 rounded-full shadow-lg">
                <Icon name="line-md:menu-to-close-alt-transition" class="text-secondary text-4xl" />
            </button>

            <!-- Image Wrapper -->
            <MLazyWrap>
                <NuxtImg :src="isLightboxOpen ? (urlFor(image?.photoObject)?.format('webp')?.height(viewportHeight*2)?.url()) : ''"
                         :alt="image.alt" class="w-full h-full max-w-screen object-contain"
                         :style="{ height: viewportHeight + 'px' }" />
            </MLazyWrap>
        </div> <!-- End Lightbox -->
    </div>
</template>

<style scoped>
.skeleton {
    background-color: #e5e7eb;
    /* Tailwind `bg-gray-200` */
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}
</style>