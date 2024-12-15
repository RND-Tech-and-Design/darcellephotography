<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

</script>
<template>
    <section>
        <div class="hero min-h-screen"
             style="background-image: url(/images/banner/home.webp); background-size: cover; background-position: center;">
            <div class="hero-overlay bg-black bg-opacity-50"></div>
            <div
                 class="hero-content flex flex-col items-center justify-center text-neutral-content text-center px-6 -mt-32">
                <div class="max-w-2xl">
                    <h1 class="mb-4 text-4xl md:text-5xl font-bold leading-tight">
                        Step Into Your Spotlight
                    </h1>
                    <h2 class="mb-6 text-xl md:text-2xl">
                        Capture the moments that matter with photography that reflects who you are—bold, authentic,
                        unforgettable.
                    </h2>
                    <div class="flex justify-center">
                        <NuxtLink to="/portfolio"
                                  class="bg-gradient-to-r from-accent to-accent px-6 py-3 rounded-lg text-lg font-medium text-black hover:from-primary hover:to-accent">
                            Explore My Work
                        </NuxtLink>
                        <NuxtLink to="/contact"
                                  class="ml-4 border border-secondary px-6 py-3 rounded-lg text-lg font-medium text-white hover:bg-secondary hover:text-black">
                            Book a Session
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>