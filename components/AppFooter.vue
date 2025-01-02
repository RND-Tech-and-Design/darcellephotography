<script setup lang="ts">

import { type NavLink } from '~/composables/navigation';
import { PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid';

defineProps({
    navigationLinks: {
        type: Array as () => NavLink[],
        default: () => [],
        required: true,
    },
});

const currentYear = new Date().getFullYear()

</script>


<template>
    <footer>

        <div class="footer p-10 bg-secondary text-neutral-content">
            <aside>

                <header class="footer-title">
                    <div class="font-extrabold -ml-1">Darcelle Photography</div>
                </header>

                <div>
                    <NuxtLink href=" https://www.facebook.com/profile.php?id=61552613942539"
                              class="link link-hover flex items-center">
                        <span class="h-4 mr-1">
                            <Icon name="line-md:facebook" size="1.5em" />
                        </span>
                        @darcellephotography
                    </NuxtLink>
                </div>

                <div>
                    <NuxtLink href="https://www.instagram.com/_darcellephotography/"
                              class="link link-hover flex items-center">
                        <span class="h-4 mr-1">
                            <Icon name="line-md:instagram" size="1.5em" />
                        </span>
                        @_darcellephotography
                    </NuxtLink>
                </div>
                <div>
                    <span class="flex items-center">
                        <span class="h-4 mr-1">
                            <Icon name="line-md:email" size="1.5em" />
                        </span>
                        <NuxtLink class="link link-hover flex items-center"
                                  href="mailto:darcelle@darcellephotography.com">
                            darcelle@darcellephotography.com
                        </NuxtLink>
                    </span>

                </div>
                <div>
                    <span class="flex items-center">
                        <PhoneIcon class="h-5 w-5 mr-1" />
                        <NuxtLink class="link link-hover flex items-center" href="tel:+4258308496">
                            (425) 830-8496
                        </NuxtLink>
                    </span>

                </div>
                <div>
                    <span class="flex items-center">
                        <MapPinIcon class="h-5 w-5 mr-1" />
                        1523 132nd ST SE, Ste. C108 Everett, WA 98208
                    </span>

                </div>
            </aside>

            <nav>
                <header class="footer-title">Main</header>
                <template v-for="link in navigationLinks">
                    <NuxtLink v-if="!link.children || link.children?.length === 0" :to="link.path" class="link">{{
                        link.name
                        }}
                    </NuxtLink>
                </template>
            </nav>
            <template v-for="link in navigationLinks">

                <nav v-if="link.children && link.children?.length > 0">
                    <header class="footer-title">{{ link.name }}</header>
                    <template v-for="child in link.children">
                        <NuxtLink :to="child.path" class="link">
                            {{ child.name }}
                        </NuxtLink>
                    </template>
                </nav>

            </template>
        </div>

        <div class="footer footer-center px-10 py-4 border-t bg-secondary border-base-300 text-neutral-content">
            <aside class="items-center">

                <!-- <div class=" h-12 w-12 flex justify-center items-center rounded-full shadow">
                    <img src="/images/logos/icon.svg" alt="DarcellePhotography" width="128px" height="128px"
                         class="h-32 w-32" />
                </div> -->
                <p> &copy; DarcellePhotography {{ currentYear }}</p>
            </aside>
        </div>
    </footer>
</template>