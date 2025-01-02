<script lang="ts" setup>
import IndividualImage from './IndividualImage.vue';
import { defineProps, defineEmits } from 'vue';


// Accept the gallery prop
const props = defineProps<{
    gallery: Gallery;
}>();

// Emit an event to navigate back to the gallery list
defineEmits(['back']);

console.log(props.gallery.images.length)

</script>


<template>
    <div class="p-4">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">{{ gallery.name }}</h1>
            <button
                    @click="$emit('back')"
                    class="text-secondary bg-gray-100 border border-gray-300 rounded px-4 py-2 hover:bg-gray-200 transition">
                Back to Galleries
            </button>
        </div>

        <!-- Gallery Description -->
        <p class="text-gray-600 mb-4">{{ gallery.description }}</p>

        <!-- Masonry-like layout using columns -->
        <div class="columns-2 md:columns-3 lg:columns-4 gap-4">
            <!-- 
        NOTE: Each child is wrapped in a block-level container (e.g., a <div>)
        with "break-inside-avoid" to prevent images from being split awkwardly.
      -->
            <div
                 v-for="image in gallery.images"
                 :key="image.id"
                 class="mb-4 break-inside-avoid">
                <IndividualImage :image="image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* This helps to avoid any awkward splits in multi-column layouts. */
.break-inside-avoid {

    break-inside: avoid-column;
    break-inside: avoid;
    page-break-inside: avoid;

    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    page-break-inside: avoid;
}
</style>