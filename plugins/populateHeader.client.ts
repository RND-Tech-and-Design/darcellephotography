// plugins/populateHeader.client.ts
import { populateHeader } from '~/composables/seoMeta';

export default defineNuxtPlugin((_nuxtApp) => {
    const route = useRoute();
    onBeforeMount(() => {
        populateHeader(route);
    });

    // Watch for route changes to update the header
    watchEffect(() => populateHeader(route));
});
