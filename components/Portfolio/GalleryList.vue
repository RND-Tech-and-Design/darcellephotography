<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GalleryView from './GalleryView.vue';
import type { Gallery } from '~/types/gallery';
import { Subject, takeUntil } from 'rxjs';

const galleries = ref<Gallery[]>([]);

const route = useRoute();
const selectedGallery = ref<Gallery | null>(null);
const router = useRouter();

const destroy$ = new Subject<boolean>();

/**
 * Select a gallery and update the URL.
 */
const selectGallery = (gallery: Gallery) => {
    selectedGallery.value = gallery;
    router.push({ query: { gallery: gallery.id } }); // Update URL with the gallery ID
};

/**
 * Clear the selection and reset the URL.
 */
const clearSelection = () => {
    selectedGallery.value = null;
    router.push({ query: {} }); // Clear the query parameter
};

onMounted(() => {
    const galleryId = route.params.galleryId as string | null;
    const galleryService = getCreateGalleryService();
    galleryService.portfolioGalleries
        .pipe(
            takeUntil(destroy$)
        )
        .subscribe((gall2) => {
            galleries.value = gall2;
            if (galleryId) {
                const gallery = galleries.value.find((g) => g.id === Number(galleryId));
                selectedGallery.value = gallery || null;
            }
        });

});

onUnmounted(() => {
    destroy$.next(true);
    destroy$.complete();
});


</script>

<template>
    <div>
        <!-- Show Gallery List if no gallery is selected -->
        <div v-if="!selectedGallery" class="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            <CardOverlay
                         v-for="gallery in galleries"
                         :key="gallery.id"
                         :image="{
                            src: gallery.thumbnail,
                            id: gallery.id,
                            alt: gallery.name
                        }"
                         :title="gallery.name"
                         :description="gallery.description"
                         :action="() => selectGallery(gallery)">

            </CardOverlay>
        </div>

        <!-- Show GalleryView if a gallery is selected -->
        <div v-else>
            <GalleryView :gallery="selectedGallery" @back="clearSelection" />
        </div>
    </div>
</template>