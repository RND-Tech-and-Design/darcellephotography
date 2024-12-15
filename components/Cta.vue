<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Let’s Create Something Timeless',
    },
    subtitle: {
        type: String,
        default: 'Book your session today and bring your vision to life.',
    },
    buttonText: {
        type: String,
        default: "Get in Touch",
    },
    buttonLink: {
        type: String,
        default: '/contact',
    },
    iconName: {
        type: String,
        default: 'material-symbols:camera-alt',
    },
    iconColor: {
        type: String,
        default: '#000000',
    },
    iconSize: {
        type: String,
        default: '1.5em',
    },
    backgroundImage: {
        type: String,
    },
});

// Dynamically choose a black-and-white background image
const image = Math.floor(Math.random() * 7) + 1;
const bg = props.backgroundImage || `/images/cta/${image}-bw.webp`;
</script>

<template>
    <section
             class="relative flex justify-center items-center py-16 px-6 md:px-12 bg-cover bg-center text-gray-900"
             :style="{ backgroundImage: `url(${bg})` }">
        <!-- White overlay to flush out the background -->
        <div class="absolute inset-0 bg-white bg-opacity-80"></div>

        <!-- Content Section -->
        <div class="relative z-10 text-center max-w-3xl">
            <h2 class="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                {{ title }}
            </h2>
            <p class="text-lg md:text-xl text-gray-700 mb-6">
                {{ subtitle }}
            </p>
            <NuxtLink
                      :to="buttonLink"
                      class="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300">
                {{ buttonText }}
                <Icon
                      :name="iconName"
                      :color="iconColor"
                      :size="iconSize"
                      class="ml-2" />
            </NuxtLink>
        </div>
    </section>
</template>