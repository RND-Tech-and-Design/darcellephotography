<script setup lang="ts">

defineProps({
    image: {
        type: Object,
        required: true,
        default: () => ({
            src: '',
            alt: '',
            id: '',
        }),
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    action: {
        type: Function,
        required: true
    }
});

</script>



<template>
    <div class="card bg-base-100 image-full w-96 shadow-xl cursor-pointer"
         @click="action()">
        <figure>

            <MLazyWrap>
                <NuxtPicture :src="image.src" :alt="image.alt" prerender format="webp"
                             class="max-w-full max-h-full object-contain" />
            </MLazyWrap>
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>