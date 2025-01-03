<script setup lang="ts">

import type { CarouselItem } from '~/types/carouselItem';
import type { SectionContent } from '~/types/sectionContent';

definePageMeta({
    layout: 'default',
    title: 'Home',
    navOrder: 1,
    icon: 'line-md:home-simple'
})


const individualSectionCardContent: SectionContent = {
    title: 'Does this sound like you?',
    paragraphs: [
        'My patients often report they have been expending more energy than they bring in. They feel drained, cynical, and discouraged that their efforts are not manifesting in the goals they desire. Their attitude, relationships, and health suffer. They feel their time is spent in a job that no longer serves them.',
        'Before my clients came to see me, they concluded that it was “too late” to make a change, and that “it is what it is.” They feared that if they took any drastic steps to improve their lives, it would be considered “selfish.” They believed they were stuck.',
        'The fear of change, but also the fear of never changing, created constant tension and anxiety.'
    ],
    backgroundImage: '/images/content/wave.webp'
}


const couplesSectionCardContent: SectionContent = {
    title: 'Struggling with communication?',
    paragraphs: [
        'As a Gottman-trained therapist, I utilize a science-based approach to couples therapy that has proven to be effective in helping couples build strong, healthy relationships. With couples therapy, you’ll acquire practical strategies to manage conflict, enhance intimacy, and cultivate mutual respect and understanding. I will work with you and your partner to develop the tools and insights you need to create a fulfilling and satisfying relationship.',
        'Don\'t wait until your relationship is in crisis - invest in your future together.'

    ],
    backgroundImage: '/images/content/beachGrass.webp'
}

</script>

<template>
    <div>
        <HomeHero />

        <AboutBox />

        <!-- <SectionCard :content="couplesSectionCardContent" />

        <Carousel :carouselItems="carouselItems" />

        <SectionCard :content="individualSectionCardContent" /> -->

        <!-- <BlogRecentPosts /> -->

        <Cta></Cta>

        <!-- <AppAlert>
            Currently Accepting New Clients!
        </AppAlert> -->

    </div>
</template>