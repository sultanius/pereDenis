<template>
    <div class="about-self-mobile-container">
        <h1 class="about-self-mobile-title">{{ t(site.about.title) }}</h1>

        <div style="margin-bottom: 20px;">
            <img style="width: 222px; height: 306px" src="../../assets/imgs/mainPage/pereDen.jpg" >
        </div>
        <div >

            <p>{{ t(site.about.p1) }}</p>

            <p>{{ t(site.about.p2) }}</p>

            <p>{{ t(site.about.p3) }}</p>
        </div>
    </div>
</template>


<script setup>
import { useSiteLocale } from '@/composables/useSiteLocale'
import { site } from '@/locales/site'

const { t } = useSiteLocale()
</script>

<style scoped>
.about-self-mobile-container {
    padding: 16px;
}
.about-self-mobile-title {
    font-size: 24px;
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    margin-bottom: 12px;
}

@media (max-width: 768px) {
    .about-self-mobile-title {
        /*margin-top: 40px;*/
    }
}
</style>
