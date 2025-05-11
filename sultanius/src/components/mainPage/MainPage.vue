<template>
    <FirstMain />

    <div class="main-page-container">

        <AboutSelf id="about-me" />

        <MainStats />

        <div style="display: flex; margin-bottom: 80px">
            <FillBtn style="margin: 0 auto; width: 400px; text-align: center;"> ПРОЕКТЫ </FillBtn>
        </div>

        <PriceProjects id="price-project" />

        <div style="margin-bottom: 80px">
            <FillBtn style="width: 400px" > СТОИМОСТЬ </FillBtn>
        </div>
    </div>

    <MainFooter id="contacts" />

</template>

<script setup>
import FirstMain from './FirstMain.vue';
import AboutSelf from './AboutSelf.vue';
import MainStats from './MainStats.vue';
import PriceProjects from './PriceProjects.vue';
import MainFooter from './MainFooter.vue';
import FillBtn from '../../components/ui/FillBtn.vue'

</script>

<style>
a{
    text-decoration: none;
    color: inherit;
}
.main-page-container{
    max-width: 1520px;
    margin: 0 auto;
}
</style>
