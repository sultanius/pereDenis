<template>
    <div>
        <h1>СТОИМОСТЬ ПРОЕКТА</h1>

        <div class="container">
            <div class="container-image">
                <img class="image" src="../../assets/imgs/priceProject/archProject.png">

                <div class="bottom-text">
                    <div class="bottom-text__item-one">
                        от 1800 руб\м2
                    </div>

                    <div class="bottom-text__item-two">
                        АРХИТЕКТУРНЫЙ ПРОЕКТ
                    </div>
                </div>
            </div>

            <div class="container-image">
                <img class="image" src="../../assets/imgs/priceProject/designInter.png">

                <div class="bottom-text">
                    <div class="bottom-text__item-one">
                        от 700 руб\м2
                    </div>

                    <div class="bottom-text__item-two">
                        ДИЗАЙН ИНТЕРЬЕРА
                    </div>
                </div>
            </div>

            <div class="container-image">
                <img class="image" src="../../assets/imgs/priceProject/construcProject.png">

                <div class="bottom-text">
                    <div class="bottom-text__item-one">
                        от 800 руб\м2
                    </div>

                    <div class="bottom-text__item-two">
                        КОНСТРУКТИВНЫЙ ПРОЕКТ
                    </div>
                </div>
            </div>

            <div class="container-image">
                <img class="image" src="../../assets/imgs/priceProject/projectOvIVk.png">

                <div class="bottom-text">
                    <div class="bottom-text__item-one">
                        от 4000 руб\м2
                    </div>

                    <div class="bottom-text__item-two">
                        ПРОЕКТ ОВ И ВК
                    </div>
                </div>
            </div>

            <div class="container-image">
                <img class="image" src="../../assets/imgs/priceProject/authorNadzor.png">

                <div class="bottom-text">
                    <div class="bottom-text__item-one">
                        от 30 000 руб\м2
                    </div>

                    <div class="bottom-text__item-two">
                        АВТОРСКИЙ НАДЗОР
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1{
    font-weight: 600;
    font-size: 40px;
    text-align: right;
}
.image {
    max-width: 100%; /* Ограничивает максимальную ширину изображения */
    height: auto; /* Сохраняет пропорции изображения */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20.19%, rgba(0, 0, 0, 0.85) 100%);
}

.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
    color: black;
}

.container-image {
    position: relative;
    display: flex; /* Можно использовать Flexbox для расположения элементов */
    justify-content: center; /* Выравниваем по центру по горизонтали */
    align-items: center; /* Выравниваем по центру по вертикали */
    overflow: hidden; /* Это можно оставить, чтобы скрыть любой избыточный контент */
}

.container-image::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%; /* Настройте высоту затемнения */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
    pointer-events: none; /* Иногда полезно сделать этот элемент "прозрачным" для кликов */
}


.bottom-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    bottom: 70px; /* Расположите кнопку на 10px от верхней части */
    left: 50px; /* Расположите кнопку на 10px от правого края */
    color: white; /* Цвет текста */
    cursor: pointer; /* Курсор в виде указателя при наведении */
}
bottom-text, .bottom-text__item-one {
    font-size: 26px;
}

bottom-text, .bottom-text__item-two {
    font-size: 50px;
    font-weight: 600;
}
</style>
