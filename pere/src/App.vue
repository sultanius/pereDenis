<script setup>
import FirstMain from './components/mainPage/FirstMain.vue';
import AboutSelf from './components/mainPage/AboutSelf.vue';
import MainStats from './components/mainPage/MainStats.vue';
import PriceProjects from './components/mainPage/PriceProjects.vue';
import MainFooter from './components/mainPage/MainFooter.vue';

import { ref } from 'vue';

const test = ref('asdasdasdasd');
</script>

<template>

   <FirstMain />

   <AboutSelf />

   <MainStats />

   <PriceProjects />

   <MainFooter id="container" />

</template>

<style >
html, body {
    height: 100%; /* Устанавливаем высоту для html и body */
    margin: 0; /* Убираем отступы */
    scroll-behavior: smooth !important;
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
