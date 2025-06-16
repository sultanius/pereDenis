<script setup>
import FirstMain from './components/mainPage/FirstMain.vue';
import AboutSelf from './components/mainPage/AboutSelf.vue';
import MainStats from './components/mainPage/MainStats.vue';
import PriceProjects from './components/mainPage/PriceProjects.vue';
import MainFooter from './components/mainPage/MainFooter.vue';
import ProjectComp from './components/projects/ProjectComp.vue';
import ProjectHeader from './components/projects/ProjectHeader.vue'

import { ref } from 'vue';
import { useRouter } from 'vue-router'

const test = ref('asdasdasdasd');
const router = useRouter();

</script>

<template>

   <ProjectHeader v-if="router.currentRoute.value.fullPath !== '/'"/>
<!---->
    <nav>
<!--        <RouterLink to="/">Go to Home</RouterLink>-->
<!--        <RouterLink to="/projects">Go to projects</RouterLink>-->
    </nav>
    <main>
        <RouterView />
    </main>

    <MainFooter id="contacts" />
</template>

<style >
@media (max-width: 768px) {
    .hide-on-mobile{
        display: none;
    }
}

@media (min-width: 768px) {
    .hide-on-dekstop{
        display: none;
    }
}

/* Шрифты */
@font-face {
    font-family: 'FuturaLightC';
    /*src: url('./fonts/Involve/ofont.ru_a_Avantelt.ttf') format('truetype');*/
    src: url('./fonts/Involve/FuturaLightC.ttf') format('truetype');
    /*src: url('./fonts/Involve/ofont.ru_Hero.ttf') format('truetype');*/
    font-weight: 500; /* Medium обычно это 500 */
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Involve';
    src: url('./fonts/Involve/Involve-Medium.ttf') format('truetype');
    font-weight: 500; /* Medium обычно это 500 */
    font-style: normal;
    font-display: swap;
}

/*@font-face {*/
/*    font-family: 'Involve';*/
/*    src: url('./fonts/Involve/Involve-MediumOblique.ttf') format('truetype');*/
/*    font-weight: 500;*/
/*    font-style: oblique; !* или italic, если в названии italic *!*/
/*    font-display: swap;*/
/*}*/

/*@font-face {*/
/*    font-family: 'Involve';*/
/*    src: url('./fonts/Involve/Involve-SemiBold.ttf') format('truetype');*/
/*    font-weight: 600; !* SemiBold *!*/
/*    font-style: normal;*/
/*    font-display: swap;*/
/*}*/

/*@font-face {*/
/*    font-family: 'Involve';*/
/*    src: url('./fonts/Involve/Involve-Bold.ttf') format('truetype');*/
/*    font-weight: 700; !* Bold обычно это 700 *!*/
/*    font-style: normal;*/
/*    font-display: swap;*/
/*}*/


html, body {
    height: 100%; /* Устанавливаем высоту для html и body */
    margin: 0; /* Убираем отступы */
    scroll-behavior: smooth !important;
    font-family: 'FuturaLightC', Arial, sans-serif;
    color: #3d3d3d;
}
html:focus-within {
    scroll-behavior: smooth;
}
.hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: -10px;
    right: 16px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #0e2431;
}

.hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}

.hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
}

.hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
}
</style>
