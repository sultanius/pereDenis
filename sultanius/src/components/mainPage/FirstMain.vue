<template>
    <div class="container">
        <img class="image" src="../../assets/imgs/mainPage/mainFirstImg.png" >

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
                            <li >
                                <a href="#about-me">ОБО МНЕ</a>
                            </li>
                            <li @click="navigateTo('/projects')">ПРОЕКТЫ</li>
                            <li>
                                <a href="#price-project">СТОИМОСТЬ</a>
                            </li>
                            <li>
                                <a href="#contacts">КОНТАКТЫ</a>
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
    width: 100vw; /* Ширина контейнера также равна полному экрану */
    display: flex; /* Можно использовать Flexbox для расположения элементов */
    justify-content: center; /* Выравниваем по центру по горизонтали */
    align-items: center; /* Выравниваем по центру по вертикали */
    overflow: hidden; /* Это можно оставить, чтобы скрыть любой избыточный контент */
    color: white; /* Цвет текста */
}

.image {
    height: 100%; /* Изображение на 100% высоты контейнера */
    width: 100%; /* Изображение на 100% ширины контейнера */
}

.right-top-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    top: 80px;
    right: 200px;
    font-size: 36px; /* Размер текста на кнопке */
    cursor: pointer; /* Курсор в виде указателя при наведении */
}

.right-bottom-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    bottom: 80px;
    right: 200px;
    font-size: 45px; /* Размер текста на кнопке */
    padding: 10px; /* Паддинг для удобства */
    cursor: pointer; /* Курсор в виде указателя при наведении */
    text-align: right;
}

.left-top-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    top: 80px;
    left: 200px;
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
    top: -80px;
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




.modal {
    position: fixed; /* Убедитесь, что модальное окно фиксировано и занимает всю высоту */
    top: 0;
    left: 0;
    padding: 55px;
    width: 281px; /* Задайте ширину 300 пикселей */
    height: 100%; /* Высота окна – 100% от высоты экрана */
    background: rgba(0, 0, 0, 0.8); /* Полупрозрачный фон для модального окна */
    color: white; /* Цвет текста внутри модального окна */
    /*transform: translateX(100%); !* Скрываем модальное окно с помощью трансформации *!*/
    transition: transform 0.5s ease; /* Плавный переход для открытия/закрытия */
    z-index: 10; /* Высокий z-index, чтобы окно появлялось над остальными элементами */
}

.modal-enter-active, .modal-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease; /* Плавный переход для открытия и закрытия */
}

.modal-enter, .modal-leave-to /* .modal-leave-active в <2.1.8 */ {
    opacity: 0;  /* Пауза при уходе */
}

.modal-enter-to, .modal-leave {
    transition: opacity 1s ease, transform 1s ease; /* Плавный переход для открытия и закрытия */
}

.close-button {
    background: transparent; /* Фон прозрачный для кнопки закрытия */
    color: white; /* Цвет текста кнопки закрытия */
    font-size: 30px; /* Размер шрифта для кнопки закрытия */
    border: none; /* Убираем границу */
    cursor: pointer; /* Курсор в виде указателя при наведении */
    margin-bottom: 20px; /* Отступы для удобного размещения */
}
</style>
