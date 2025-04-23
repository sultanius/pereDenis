<template>
    <div class="container">
        <img class="image" src="../../assets/imgs/mainPage/mainFirstImg.png" >

        <div class="left-top-text" @click="isHeaderOpen = true"> BURGER </div>

        <div class="right-top-text"> ru|en </div>

        <div class="right-bottom-text">
            <div>
                Архитектура
            </div>

            <div>
                комфортной жизни
            </div>
        </div>

        <transition name="modal" v-show="isHeaderOpen">
            <div class="modal" >
                <div>
                    <PereDesign />

                    <p>Greetings, one and all!</p>
                    <p>Greetings, one and all!</p>
                    <p>Greetings, one and all!</p>
                    <p>+7 (921) 443 23 10</p>
                    <button class="close-button" @click="isHeaderOpen = false">✖</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import PereDesign from '../icons/PereDesign.vue'
import { ref } from 'vue'

export default {
    components: { PereDesign },
    setup() {
        const isHeaderOpen = ref(false);

        const toggleHeader = () => {
            isHeaderOpen.value = !isHeaderOpen.value;
        };
        return {
            isHeaderOpen,
            toggleHeader
        };
    }
};

</script>

<style scoped>
.container {
    height: 100vh; /* Высота контейнера равна полному экрану */
    width: 100vw; /* Ширина контейнера также равна полному экрану */
    display: flex; /* Можно использовать Flexbox для расположения элементов */
    justify-content: center; /* Выравниваем по центру по горизонтали */
    align-items: center; /* Выравниваем по центру по вертикали */
    overflow: hidden; /* Это можно оставить, чтобы скрыть любой избыточный контент */
}

.image {
    height: 100%; /* Изображение на 100% высоты контейнера */
    width: 100%; /* Изображение на 100% ширины контейнера */
    object-fit: cover; /* Это свойство сохраняет пропорции изображения и обрезает его при необходимости */
}

.right-top-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    top: 10px; /* Расположите кнопку на 10px от верхней части */
    right: 10px; /* Расположите кнопку на 10px от правого края */
    font-size: 36px; /* Размер текста на кнопке */
    color: yellow; /* Цвет текста */
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон для кнопки */
    border: none; /* Убираем границу кнопки */
    padding: 10px; /* Паддинг для удобства */
    cursor: pointer; /* Курсор в виде указателя при наведении */
}

.right-bottom-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    bottom: 10px; /* Расположите кнопку на 10px от верхней части */
    right: 10px; /* Расположите кнопку на 10px от правого края */
    font-size: 36px; /* Размер текста на кнопке */
    color: yellow; /* Цвет текста */
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон для кнопки */
    border: none; /* Убираем границу кнопки */
    padding: 10px; /* Паддинг для удобства */
    cursor: pointer; /* Курсор в виде указателя при наведении */
}

.left-top-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    top: 10px; /* Расположите кнопку на 10px от верхней части */
    left: 10px; /* Расположите кнопку на 10px от правого края */
    font-size: 36px; /* Размер текста на кнопке */
    color: yellow; /* Цвет текста */
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон для кнопки */
    border: none; /* Убираем границу кнопки */
    padding: 10px; /* Паддинг для удобства */
    cursor: pointer; /* Курсор в виде указателя при наведении */
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
