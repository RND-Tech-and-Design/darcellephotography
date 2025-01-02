// plugins/populateHeader.client.ts
import { populateHeader } from '~/composables/seoMeta';
import { preInit } from '~/composables/serviceProvider';

export default defineNuxtPlugin((_nuxtApp) => {
    const route = useRoute();
    preInit();
    onBeforeMount(() => {
        populateHeader(route);
    });

    // Watch for route changes to update the header
    watchEffect(() => populateHeader(route));
});
