<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GalleryView from './GalleryView.vue';
import type { Gallery } from '~/types/gallery';
import { Subject, takeUntil } from 'rxjs';

const galleries = ref<Gallery[]>([]);
const selectedGallery = ref<Gallery | null>(null);

const route = useRoute();
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

/**
 * Update the selected gallery based on route params.
 */
const updateSelectedGallery = (forceGalleryid?: string) => {
    const galleryId = forceGalleryid || route.query.gallery as string | null;
    console.log('Gallery ID:', galleryId);
    if (galleries.value.length === 0) {
        return;
    }
    if (galleryId) {
        const gallery = galleries.value.find((g) => g.id === galleryId);
        selectedGallery.value = gallery || null;
    } else {
        selectedGallery.value = null;
        router.push('/portfolio');
    }
};

// Watch for route changes and update the gallery
watchEffect(() => updateSelectedGallery());

onMounted(() => {
    const galleryService = getCreateGalleryService();
    galleryService.portfolioGalleries
        .pipe(takeUntil(destroy$))
        .subscribe((fetchedGalleries) => {
            galleries.value = fetchedGalleries;
            updateSelectedGallery(); // Update selection when galleries are fetched
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
                            alt: gallery.name,
                            provider: 'sanity',
                        }"
                         :title="gallery.name"
                         :description="gallery.description"
                         :action="() => selectGallery(gallery)" />
        </div>

        <!-- Show GalleryView if a gallery is selected -->
        <div v-else>
            <GalleryView :gallery="selectedGallery" @back="clearSelection" />
        </div>
    </div>
</template>