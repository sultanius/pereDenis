<template>
    <FirstMain v-if="isDesktop"/>
    <FirstMainMobile v-else/>

    <div class="main-page-container">

        <AboutSelf id="about-me" />
<!--        <AboutSelfMobile v-else  />-->

<!--        <MainStats v-if="!isDesktop" />-->

        <PriceProjects id="price-project" />

        <CalcPrice  />

<!--        <div class="main-page-price-btn">-->
<!--            <FillBtn style="margin: 0 auto; width: 400px; text-align: center;" > СТОИМОСТЬ </FillBtn>-->
<!--        </div>-->
    </div>


</template>

<script setup>
import { computed } from 'vue'

import FirstMain from './FirstMain.vue';
import FirstMainMobile from './FirstMainMobile.vue';
import AboutSelf from './AboutSelf.vue';
import AboutSelfMobile from './AboutSelfMobile.vue';
import PriceProjects from './PriceProjects.vue';
import CalcPrice from './CalcPrice.vue';

import { useWindowSize } from '@/composables/useWindowSize.js';
const { isDesktop, height } = useWindowSize();


</script>

<style>
h1 {
    line-height: 100%;
}
a{
    text-decoration: none;
    color: inherit;
}
.main-page-container{
    max-width: 1520px;
    margin: 0 auto;
}

.main-page-price-btn {
    display: flex;
    margin-bottom: 80px;
}

@media (max-width: 768px) {

    .main-page-projects-btn {
        margin-bottom: 32px;
        padding: 16px;
    }

    .main-page-price-btn {
        margin-bottom: 32px;
        padding: 16px;
    }

}
</style>
