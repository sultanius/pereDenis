<script setup>
import FirstMain from './components/mainPage/FirstMain.vue';
import AboutSelf from './components/mainPage/AboutSelf.vue';
import MainStats from './components/mainPage/MainStats.vue';
import PriceProjects from './components/mainPage/PriceProjects.vue';
import MainFooter from './components/mainPage/MainFooter.vue';
import ProjectComp from './components/projects/ProjectComp.vue';
import ProjectHeader from './components/projects/ProjectHeader.vue'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const test = ref('asdasdasdasd');
const router = useRouter();




</script>

<template>
  <div>
    <ProjectHeader v-if="router.currentRoute.value.fullPath !== '/'"/>
    <nav>
      <!--        <RouterLink to="/">Go to Home</RouterLink>-->
      <!--        <RouterLink to="/projects">Go to projects</RouterLink>-->
    </nav>
    <main :class="{ 'page-container': router.currentRoute.value.fullPath !== '/' }">
      <RouterView />
    </main>
    <MainFooter id="MainFooter" />
  </div>
</template>

<style >
/* Глобальные переменные отступов и базового шрифта */
:root {
    --page-side-padding: clamp(16px, 5vw, 64px);
    --font-size-base: clamp(14px, 0.9vw + 10px, 16px);
}
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
    unicode-range: U+0020-007F, U+0400-04FF;
}

@font-face {
    font-family: 'Involve';
    src: url('./fonts/Involve/Involve-Regular.ttf') format('truetype');
    font-weight: 500; /* Medium обычно это 500 */
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Involve';
    src: url('./fonts/Involve/Involve-MediumOblique.ttf') format('truetype');
    font-weight: 500;
    font-style: oblique; /* или italic, если в названии italic */
    font-display: swap;
}

@font-face {
    font-family: 'Involve';
    src: url('./fonts/Involve/Involve-SemiBold.ttf') format('truetype');
    font-weight: 600; /* SemiBold */
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'AvantLett';
    src: url('./fonts/Involve/ofont.ru_a_AvanteLt.ttf') format('truetype');
    font-weight: 500; /* Bold обычно это 700 */
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'ru_Hero';
    src: url('./fonts/Involve/ofont.ru_Hero.ttf') format('truetype');
    font-weight: 500; /* Bold обычно это 700 */
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'josef';
    src: url('./fonts/Involve/JosefinSans.ttf') format('truetype');
    font-weight: 500; /* Bold обычно это 700 */
    font-style: normal;
    font-display: swap;
}


@font-face {
    font-family: 'josef-italic';
    src: url('./fonts/Involve/JosefinSans-Italic.ttf') format('truetype');
    font-weight: 500; /* Bold обычно это 700 */
    font-style: normal;
    font-display: swap;
}



html, body {
    height: 100%; /* Устанавливаем высоту для html и body */
    margin: 0; /* Убираем отступы */
    scroll-behavior: smooth !important;
    font-family: 'FuturaLightC', Arial, sans-serif;
    color: #3d3d3d;
    font-size: var(--font-size-base);
}
html:focus-within {
    scroll-behavior: smooth;
}

/* Тёмная тема: мягкий цвет текста, чтобы не был чисто белым */
@media (prefers-color-scheme: dark) {
    body {
        color: #e6e6e6;
    }
    a { color: #cfd8ff; }
}

/* Контейнер для десктопных внутренних страниц */
.page-container {
    max-width: 1520px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--page-side-padding);
    padding-right: var(--page-side-padding);
}

/* Безопасное перенесение длинных слов/ссылок, чтобы текст не вылезал из блоков */
main, section, article, p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: anywhere;
}
</style>
