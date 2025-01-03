<script setup lang="ts">
import { Subject, takeUntil } from 'rxjs';
import { ref, onMounted } from 'vue';
import type { CarouselItem } from '~/types/carouselItem';

const destroy$ = new Subject<void>();
const testimonialCarouselList = ref<CarouselItem[]>([]);


onMounted(() => {
    const testimonialService = getCreateTestimonialService();

    testimonialService.testimonialList
        .pipe(takeUntil(destroy$))
        .subscribe((fetchedTestimonials) => {
            //convert to CarouselItem
            testimonialCarouselList.value = shuffleArray(
                fetchedTestimonials.map((testimonial) => {
                    return {
                        image: urlFor(testimonial?.testimonial_image?.asset)?.format('webp')?.url() ?? '',
                        altText: testimonial.name,
                        title: `${testimonial.name} - ${testimonial.service}`,
                        description: testimonial.quote,
                        link: '',
                        isQuote: true,
                    };
                })
            );
        });
});

</script>
<template>

    <Carousel :carouselItems="testimonialCarouselList" />

</template>