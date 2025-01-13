<script setup lang="ts">
definePageMeta({
    layout: "default",
    title: "Headshots",
    navOrder: 2,
    description: ``,
});


const pageData = {
    aboutMe: {
        title1: "Meet Darcelle",
        title2: "8+ Years Capturing Authentic Moments",
        paragraphs: [
            {
                text: "I specialize in genuine storytelling—whether it's family portraits, corporate headshots, or personal branding. My mission is to highlight the unique essence of every moment in the Seattle area.",
                styleType: "text-base md:text-lg text-gray-600 leading-relaxed"
            },
            {
                text: "My approach is collaborative and stress-free. From session planning to final image delivery, I ensure your comfort and satisfaction at every step.",
                styleType: "text-sm md:text-base text-gray-700 leading-relaxed"
            },
            {
                text: "Outside photography, you’ll find me exploring Seattle’s hidden gems with my energetic children. These everyday adventures fuel my creativity and passion for capturing your story.",
                styleType: "text-sm md:text-base text-gray-700 leading-relaxed"
            }
        ]
    }
};

</script>

<template>
    <Hero headline="Headshots" hero-image="/images/banner/about.webp" overlayClass="bg-complementary_accent" />
    <section class="mx-10 md:mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg ">
        <!-- <AboutMePageIntro v-bind="pageData.aboutMe" /> -->
    </section>

    <Testimonials />
    <Cta></Cta>
</template>