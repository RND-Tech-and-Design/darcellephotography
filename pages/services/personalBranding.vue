<script setup lang="ts">
definePageMeta({
    layout: "default",
    title: "Personal Branding Photography | Seattle Photographer",
    description: "Showcase your story with stunning personal branding photography by Darcelle. Serving Seattle and surrounding areas with 8+ years of expertise.",
    navOrder: 2,
});

const pageData = {
    hero: {
        headline: "Personal Branding Photography",
        subtext: "Capture your story, elevate your brand.",
        heroImage: "/images/banner/personal-branding.webp",
    },
    aboutService: {
        title: "Why Personal Branding Matters",
        description:
            "In today’s digital age, a strong personal brand is essential. Whether you're an entrepreneur, creative, or professional, your images tell your story and set the tone for your brand.",
        benefits: [
            "Convey authenticity and professionalism.",
            "Build trust with your audience.",
            "Create lasting first impressions on social media and websites.",
        ],
    },
    process: {
        steps: [
            { title: "Consultation", description: "We'll discuss your goals and vision." },
            { title: "Photoshoot", description: "Enjoy a stress-free session tailored to your needs." },
            { title: "Delivery", description: "Receive professionally edited images ready to use." },
        ],
    },
};
</script>

<template>
    <div>
        <!-- Hero Section -->
        <Hero headline="Personal Branding" hero-image="/images/banner/about.webp" overlayClass="bg-complementary_accent" />

        <!-- About the Service -->
        <section class="mx-auto max-w-screen-lg py-12 px-6 md:px-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">{{ pageData.aboutService.title }}</h2>
            <p class="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">{{ pageData.aboutService.description }}
            </p>
            <ul class="mt-6 space-y-3">
                <li v-for="(benefit, index) in pageData.aboutService.benefits" :key="index"
                    class="flex items-center space-x-2">
                    <span class="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2">
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                    <span class="text-gray-700">{{ benefit }}</span>
                </li>
            </ul>
        </section>

        <!-- Process Section -->
        <section class="bg-gray-50 py-12">
            <div class="mx-auto max-w-screen-lg px-6 md:px-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800">How It Works</h2>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                         v-for="(step, index) in pageData.process.steps"
                         :key="index"
                         class="bg-white shadow rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-primary">{{ step.title }}</h3>
                        <p class="mt-2 text-gray-600">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Component -->
        <Testimonials />

        <!-- Call-to-Action Section -->
        <Cta
             title="Let’s Tell Your Story"
             subtitle="Ready to elevate your brand with stunning visuals? Book your personal branding session today.">
        </Cta>
    </div>
</template>

<style scoped>
.bg-primary {
    background-color: #4a90e2;
    /* Replace with your brand color */
}

.bg-primary-dark {
    background-color: #357abd;
    /* Darker shade for hover effects */
}
</style>