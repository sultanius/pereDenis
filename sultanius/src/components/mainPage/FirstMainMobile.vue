<template>
    <div class="first-main-mobile-container">
        <video
            video
            loop
            muted
            playsinline
            id="myVideoMobile"
            webkit-playsinline="true"
        >
            <source  src="../../assets/mainVideo_ios.mp4" type="video/mp4">
        </video>

        <div class="first-main-mobile__btn-navigation" @click="toggleMenu">
            <div class="first-main-mobile__btn-navigation__line"></div>
            <div class="first-main-mobile__btn-navigation__line"></div>
            <div class="first-main-mobile__btn-navigation__line"></div>
        </div>


        <div class="first-main-mobile__bottom-left">
            <p style="font-size: 24px; font-weight: normal">АРХИТЕКТУРА</p>
            <p>КОМФОРТНОЙ</p>
            <p>ЖИЗНИ</p>
        </div>
    </div>

    <MobileMenuNavigation :menuOpen="menuActive" @close="menuActive = false"/>
</template>

<script setup>
import { ref,  onMounted} from 'vue'

import MobileMenuNavigation from './MobileMenuNavigation.vue';

onMounted(() => {
            const video = document.getElementById('myVideoMobile');
            if (video && video instanceof HTMLVideoElement) {
                video.muted = true; // iOS требует mute для автозапуска
                // @ts-ignore
                video.playsInline = true; // iOS Safari inline
                const tryPlay = () => {
                    // Попытка воспроизведения без пользовательского жеста (muted)
                    video.play().catch(() => {});
                };
                video.addEventListener('canplay', tryPlay, { once: true });
                tryPlay();
            }
        });


const menuActive = ref();

const toggleMenu = () => {
    console.log(34)
    menuActive.value = !menuActive.value;
}

</script>

<style scoped>
video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* обрежет видео, сохраняя пропорции */
    object-position: center; /* или left, right для выбора части видео */
}

p{
    font-size: 40px;
    color: white;
    line-height: 100%;
    margin-bottom: 8px;
    font-weight: 600;
}
.first-main-mobile-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    margin-bottom: 40px;
}

.first-main-mobile__btn-navigation {
    z-index: 1;
    position: absolute;
    top: 30px;
    left: 16px;
    width: 56px;
    height: 40px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    cursor: pointer;
}
.first-main-mobile__btn-navigation__line {
    width: 24px;
    height: 1px;
    border-radius: 24px;
    background-color: white;
}

.first-main-mobile__bottom-left {
    z-index: 1;
    position: absolute;
    bottom: 50px;
    left: 16px;
}


</style>
