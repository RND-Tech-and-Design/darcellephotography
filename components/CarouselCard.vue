<script setup lang="ts">
import type { CarouselItem } from '~/types/carouselItem';

const props = defineProps<{
    carouselItem: CarouselItem,
    itemIndex: number,
    quoteMode: boolean,
}>()

const getCarouselItemId = (index: number) => `carousel-item-${index}`;

const carouselItemId = getCarouselItemId(props.itemIndex);

</script>

<template>
    <div :id="carouselItemId" class="carousel-item">
        <div class="card w-64 md:w-96 bg-secondary shadow-xl image-full max-h-96">
            <figure class="overflow-hidden relative">
                <NuxtImg
                         layout="responsive"
                         :provider="carouselItem?.imageProvider"
                         loading="lazy"
                         placeholder
                         :src="carouselItem?.image"
                         :alt="carouselItem?.altText"
                         class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </figure>
            <div class="card-body flex flex-col justify-end h-full">
                <template v-if="props.quoteMode">
                    <div class="w-full">
                        <div class="text-3xl text-left leading-tight h-3">
                            <icon name="bxs:quote-left" size="1em" class="flex-none min-w-8"></icon>
                        </div>
                        <p class="text-sm text-center px-8">
                            {{ carouselItem?.description }}
                        </p>
                        <div class="text-3xl text-right leading-tight h-3 -mt-3">
                            <icon name="bxs:quote-right" size="1em" class="flex-none min-w-8"></icon>
                        </div>
                    </div>
                    <div class="w-full mt-16">
                        <p class="text-md font-bold text-center">
                            {{ carouselItem?.title }}
                        </p>
                    </div>
                </template>


                <template v-else>
                    <h2 class="card-title">{{ carouselItem?.title }}</h2>
                    <p class="mt-8 md:mt-16">
                        {{ carouselItem?.description }}
                    </p>
                    <div class="card-actions justify-end" v-if="!props.quoteMode">
                        <NuxtLink :to="carouselItem?.link"
                                  class="mt-2 btn btn-secondary text-white">
                            Learn More
                            <Icon name="material-symbols:arrow-circle-right-rounded"
                                  color="white"
                                  size="2em" />
                        </NuxtLink>
                    </div>
                </template>

            </div>
        </div>

    </div>
</template>