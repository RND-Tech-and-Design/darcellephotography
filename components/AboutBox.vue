
<script setup lang="ts">

</script>

<template>
    <section class="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 py-12 bg-white">
        <!-- Image Section -->
        <div class="w-full md:w-1/2">
            <NuxtImg
                     class="w-full h-auto rounded-lg object-cover"
                     src="/images/content/profile-darcelle.webp"
                     alt="Darcelle holding a camera"
                     placeholder
                     preload />
        </div>

        <!-- Content Section -->
        <div class="w-full md:w-1/2 text-gray-800">
            <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Ready to Elevate Your Brand
                <em class="italic font-light">to the Next Level</em>
                with Stunning Photography?
            </h2>
            <p class="text-lg italic text-gray-600 mb-6">
                You're in the right place.
            </p>
            <p class="text-base md:text-lg leading-relaxed mb-4">
                Whether you’re a thriving entrepreneur, a creative professional, or someone with a vision,
                I help you tell your story with captivating imagery. Professional headshots, personal branding,
                and event photography—tailored to reflect who you are and the legacy you’re building.
            </p>
            <p class="text-base md:text-lg leading-relaxed mb-6">
                Don’t let outdated photos hold you back. Let’s create visuals that align with your goals
                and attract the clients you deserve.
            </p>
            <NuxtLink
                      to="/about"
                      class="inline-block bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-all">
                About Darcelle
            </NuxtLink>
        </div>
    </section>
</template>