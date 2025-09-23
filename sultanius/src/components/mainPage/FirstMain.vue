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
            <source  src="../../assets/mainVideo.mp4" type="video/mp4">
        </video>

        <div class="left-top-text" >
            <div class="menu">
                <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
                <label for="burger-checkbox" class="burger"></label>

                <div class="menu-list">

                    <div style="margin-left: 15px">
                        <PereDesign  style="padding-bottom: 100px; display: block"/>

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
                        <p>+7 (921) 443 23 10</p>
                    </div>
                </div>

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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { PereDesign },
    setup() {
        const router = useRouter();
        const isHeaderOpen = ref(false);

        const toggleHeader = () => {
            isHeaderOpen.value = !isHeaderOpen.value;
        };

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
    z-index: 1;
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
    top: -85px;
    left: 0;
    position: absolute;
    background-color: #000000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    /*gap: 12px;*/
    /*margin: 0;*/
    transform: translateX(-200%);
    transition: .7s;
    width: 280px;
    padding: 35px 0 55px;

    /*display: flex; !* Можно использовать Flexbox для расположения элементов *!*/
    /*justify-content: center; !* Выравниваем по центру по горизонтали *!*/
    /*align-items: center; !* Выравниваем по центру по вертикали *!*/
    /*overflow: hidden; !* Это можно оставить, чтобы скрыть любой избыточный контент *!*/
    /*color: white; !* Цвет текста *!*/
}

.burger-checkbox:checked ~ .menu-list {
    transform: translateX(-200px);
}

</style>
