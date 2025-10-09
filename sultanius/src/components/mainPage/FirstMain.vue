<template>
    <div class="container">
        <video
            video
            autoplay
            loop
            muted
            playsinline
            id="myVideo"
            preload="metadata"
            webkit-playsinline="true"
        >
            <source  src="../../assets/mainVideo_ios.mp4" type="video/mp4">
        </video>

        <div class="left-top-text" >
            <div class="menu">
                <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
                <label for="burger-checkbox" class="burger"></label>

                <div class="menu-list">

                    <div style="margin-left: 15px">
                        <PereDesign width="132"  style="padding-bottom: 100px; display: block; margin-left: 32px;"/>

                        <ul>
                            <li @click="navigateTo('/')">
                                <a href="/">ГЛАВНАЯ</a>
                            </li>
                            <li @click="navigateTo('/about-self')">
                                <a>ОБО МНЕ</a>
                            </li>
                            <li @click="navigateTo('/projects')">ПРОЕКТЫ</li>
                            <li>
                                <a href="#price-project">СТОИМОСТЬ</a>
                            </li>
                            <li @click="navigateTo('/contacts')">
                                <a>КОНТАКТЫ</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p style="margin-bottom: 8px">+7 (921) 443 23 10</p>

                        <a style="margin-right: 8px"  target="_blank" href="https://wa.me/+79214432310"  >
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0001 1.56268C7.57196 1.57081 1.55634 7.59893 1.56446 15.0271C1.56636 17.2812 2.13528 19.4986 3.21884 21.4752L2.18759 27.8127L8.52509 26.7814C15.0313 30.3502 23.2001 27.9696 26.7688 21.4627C30.3376 14.9558 27.9576 6.78831 21.4507 3.21893C19.4737 2.13442 17.255 1.56484 15.0001 1.56268ZM8.28134 7.66893H11.9438C12.1096 7.66893 12.2686 7.73478 12.3858 7.85199C12.503 7.9692 12.5688 8.12817 12.5688 8.29393C12.5483 9.12743 12.6884 9.95709 12.9813 10.7377C13.1075 10.999 13.1352 11.297 13.0595 11.5771C12.9837 11.8572 12.8095 12.1006 12.5688 12.2627L11.2876 13.5127C11.8557 14.6221 12.5985 15.6329 13.4876 16.5064C14.354 17.41 15.3608 18.1677 16.4688 18.7502L17.7188 17.4689C18.3438 16.8439 18.6313 16.8439 19.2438 17.0564C20.0244 17.3494 20.8541 17.4894 21.6876 17.4689C21.8509 17.4765 22.0055 17.5448 22.1211 17.6604C22.2367 17.776 22.305 17.9306 22.3126 18.0939V21.7564C22.305 21.9197 22.2367 22.0743 22.1211 22.1899C22.0055 22.3055 21.8509 22.3738 21.6876 22.3814C18.0111 22.2213 14.5261 20.6971 11.9126 18.1064C9.31782 15.4957 7.79298 12.009 7.63759 8.33143C7.63907 8.1594 7.7068 7.99456 7.8267 7.87117C7.94659 7.74779 8.10942 7.67536 8.28134 7.66893Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

								</a>

                                <a  target="_blank" href="https://t.me/peredesign">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 20L11.25 24.375L8.75 16.25L1.875 13.75L28.125 3.75L23.125 26.25L13.75 17.5L18.75 13.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

								</a>

                    </div>
                </div>

                <!-- Backdrop to close the menu by clicking outside -->
                <label for="burger-checkbox" class="menu-backdrop"></label>

            </div>
        </div>

        <div class="right-top-text"> ru|en </div>

        <div class="right-bottom-text" >
            <div style="font-size: 35px">
                АРХИТЕКТУРА
            </div>

            <div>
                КОМФОРТНОЙ ЖИЗНИ
            </div>
        </div>
    </div>
</template>

<script>
import PereDesign from '../icons/PereDesign.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { PereDesign },
    setup() {
        const router = useRouter();
        const isHeaderOpen = ref(false);

        const toggleHeader = () => {
            isHeaderOpen.value = !isHeaderOpen.value;
        };

        onMounted(() => {
            const video = document.getElementById('myVideo');
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

                // One-time user gesture fallback for iOS
                const onFirstInteraction = () => {
                    video.play().catch(() => {});
                    window.removeEventListener('touchstart', onFirstInteraction);
                    window.removeEventListener('click', onFirstInteraction);
                };
                window.addEventListener('touchstart', onFirstInteraction, { once: true, passive: true });
                window.addEventListener('click', onFirstInteraction, { once: true });
            }
        });

        const navigateTo = (to) => {
            console.log(1, to)
            router.replace(to);
        };

        return {
            isHeaderOpen,
            toggleHeader,
            navigateTo,
        };
    }
};

</script>

<style scoped>
p{
    font-size: 20px;
    line-height: 100%;
}
nav {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 100px;
}
.container {
    height: 100vh; /* Высота контейнера равна полному экрану */
    width: 100%; /* Ширина контейнера также равна полному экрану */
    display: flex; /* Можно использовать Flexbox для расположения элементов */
    justify-content: center; /* Выравниваем по центру по горизонтали */
    align-items: center; /* Выравниваем по центру по вертикали */
    overflow: hidden; /* Это можно оставить, чтобы скрыть любой избыточный контент */
    color: white; /* Цвет текста */
    position: relative; /* База для абсолютных оверлеев и видео */
    --edge-offset: clamp(16px, 5vw, 205px);
}

.image {
    height: 100%; /* Изображение на 100% высоты контейнера */
    width: 100%; /* Изображение на 100% ширины контейнера */
}

#myVideo {
    position: absolute;
    inset: 0; /* top:0; right:0; bottom:0; left:0 */
    width: 100%;
    height: 100%;
    object-fit: cover; /* Видео заполняет контейнер без искажений, обрезая края */
}

.right-top-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    top: clamp(16px, 4vw, 80px);
    right: var(--edge-offset);
    font-size: 36px; /* Размер текста на кнопке */
    cursor: pointer; /* Курсор в виде указателя при наведении */
}

.right-bottom-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    bottom: clamp(24px, 5vw, 85px);
    right: var(--edge-offset);
    font-size: 45px; /* Размер текста на кнопке */
    padding: 10px; /* Паддинг для удобства */
    cursor: pointer; /* Курсор в виде указателя при наведении */
    text-align: right;
}

.left-top-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    top: clamp(16px, 4vw, 85px);
    left: var(--edge-offset);
    font-size: 36px; /* Размер текста на кнопке */
    padding: 10px; /* Паддинг для удобства */
    cursor: pointer; /* Курсор в виде указателя при наведении */
}

.burger-checkbox {
    position: absolute;
    visibility: hidden;
    color: #FFFFFF;
}
.burger {
    position: relative;
    z-index: 4;
    cursor: pointer;
    display: block;
    position: relative;
    border: none;
    background: transparent;
    width: 40px;
    height: 26px;
}
.burger::before,
.burger::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: white;
}
.burger::before {
    top: 0;
    box-shadow: 0 11px 0 white;
    transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
}
.burger::after {
    bottom: 0;
    transition: bottom .3s .15s, transform .3s;
}
.burger-checkbox:checked + .burger::before {
    top: 11px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0,0,0,0);
    transition: box-shadow .15s, top .3s, transform .3s .15s;
}
.burger-checkbox:checked + .burger::after {
    bottom: 11px;
    transform: rotate(-45deg);
    transition: bottom .3s, transform .3s .15s;
}

/* Hide burger icon when menu is open */
.burger-checkbox:checked + .burger {
    visibility: hidden;
}

ul{
    list-style-type: none;
    font-weight: 400;
    text-align: start;
}
li{
    margin-bottom: 24px;
    cursor: pointer;
}

li:hover{
    color: #656565;
}

.menu-list {
    font-size: 20px;
    border: 1px solid black;
    top: 0;
    left: 0;
    position: fixed;
    background-color: #000000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    /*gap: 12px;*/
    /*margin: 0;*/
    transform: translateX(-100%);
    transition: .7s;
    width: clamp(260px, 22vw, 320px);
    padding: 35px 0 55px;
    z-index: 3;
    opacity: .9;

    /*display: flex; !* Можно использовать Flexbox для расположения элементов *!*/
    /*justify-content: center; !* Выравниваем по центру по горизонтали *!*/
    /*align-items: center; !* Выравниваем по центру по вертикали *!*/
    /*overflow: hidden; !* Это можно оставить, чтобы скрыть любой избыточный контент *!*/
    /*color: white; !* Цвет текста *!*/
}

.burger-checkbox:checked ~ .menu-list {
    transform: translateX(0);
}

/* Fullscreen backdrop that closes menu on click */
.menu-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.35);
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s ease;
}
.burger-checkbox:checked ~ .menu-backdrop {
    opacity: 1;
    pointer-events: auto;
}

</style>
