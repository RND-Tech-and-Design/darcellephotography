<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    title1: { type: String, default: "" },
    title2: { type: String, default: "" },
    paragraphs: {
        type: Array as () => Array<{ text: string; styleType: string }>,
        default: () => []
    }
});
</script>

<template>
    <section
             class="container mx-auto px-6 sm:px-8 py-12 sm:py-16 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
        <!-- Text Column -->
        <div class="md:w-1/2 space-y-6 text-gray-800">
            <!-- Small Subheading -->
            <h3 class="text-sm uppercase tracking-widest font-semibold text-gray-500">
                {{ title1 }}
            </h3>

            <!-- Main Heading -->
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {{ title2 }}
            </h2>

            <!-- Paragraphs -->
            <div class="space-y-4">
                <p
                   v-for="(para, index) in paragraphs"
                   :key="index"
                   :class="[para.styleType || 'text-base md:text-lg leading-relaxed']">
                    {{ para.text }}
                </p>
            </div>
        </div>

        <!-- Image Column -->
        <div class="md:w-1/2 flex justify-center">
            <NuxtImg
                     src="/images/content/aboutPhoto.webp"
                     alt="Darcelle's Portrait"
                     layout="responsive"
                     class="w-full max-w-sm rounded-lg shadow-md object-cover" />
        </div>

    </section>
</template>