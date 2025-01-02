<script setup lang="ts">
definePageMeta({
    layout: "default",
    title: "Portfolio",
    navOrder: 1,
    description: ``,
});

</script>




<template>

    <PortfolioGalleryList></PortfolioGalleryList>
    <!-- <div class="flex flex-col align-center">

        <section :class="pageStyle.margins">
            <AboutMePageIntro v-bind="pageData.aboutMe" />
        </section>

        <section :class="pageStyle.backgroundColor">
            <AboutMePageSection v-bind="pageData.background" :class="pageStyle.margins" />
        </section>

        <section>
            <AboutMePageSection v-bind="pageData.qualifications" :class="pageStyle.margins" />
            <div class="sm:flex-row md:flex mb-20 sm:mb-20" :class="pageStyle.margins">
                <div v-for="(qualification, index) in pageData.qualifications.qualifications" :key="index"
                     class="flex-1 mb-10 md:mb-0">
                    <AboutMePageQualification v-bind="qualification" />
                </div>
            </div>
        </section>


        <section :class="pageStyle.backgroundColor">
            <AboutMePageSection v-bind="pageData.homeAndHobbies" :class="pageStyle.margins" />
        </section>
    </div> -->

    <Cta></Cta>
</template>