<template>

    <h1>СТОИМОСТЬ ПРОЕКТА</h1>

    <div class="container">
        <div class="test container-image">
            <img class="image" src="../../assets/imgs/mainPage/price.png">

            <div class="bottom-text">
                <div>
                    От 1800 руб\м2
                </div>

                <div>
                    Архитектурный проект
                </div>
            </div>
        </div>

        <div class="test container-image">
            <img class="image" src="../../assets/imgs/mainPage/price.png">

            <div class="bottom-text">
                <div>
                    От 1800 руб\м2
                </div>

                <div>
                    Архитектурный проект
                </div>
            </div>
        </div>

        <div class="test container-image">
            <img class="image" src="../../assets/imgs/mainPage/price.png">

            <div class="bottom-text">
                <div>
                    От 1800 руб\м2
                </div>

                <div>
                    Архитектурный проект
                </div>
            </div>
        </div>

        <div class="test container-image">
            <img class="image" src="../../assets/imgs/mainPage/price.png">

            <div class="bottom-text">
                <div>
                    От 1800 руб\м2
                </div>

                <div>
                    Архитектурный проект
                </div>
            </div>
        </div>

        <div class="test container-image">
            <img class="image" src="../../assets/imgs/mainPage/price.png">

            <div class="bottom-text">
                <div>
                    От 1800 руб\м2
                </div>

                <div>
                    Архитектурный проект
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.test {
    border-left: 1px solid black;
    font-size: 20px;
}

.image {
    max-width: 100%; /* Ограничивает максимальную ширину изображения */
    height: auto; /* Сохраняет пропорции изображения */
}

.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 120px;
}

.container-image {
    position: relative;
    display: flex; /* Можно использовать Flexbox для расположения элементов */
    justify-content: center; /* Выравниваем по центру по горизонтали */
    align-items: center; /* Выравниваем по центру по вертикали */
    overflow: hidden; /* Это можно оставить, чтобы скрыть любой избыточный контент */
}


.bottom-text {
    z-index: 1; /* Убедитесь, что кнопка видима над изображением */
    position: absolute; /* Абсолютное позиционирование для кнопки */
    bottom: 10px; /* Расположите кнопку на 10px от верхней части */
    left: 10px; /* Расположите кнопку на 10px от правого края */
    font-size: 36px; /* Размер текста на кнопке */
    color: yellow; /* Цвет текста */
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон для кнопки */
    border: none; /* Убираем границу кнопки */
    padding: 10px; /* Паддинг для удобства */
    cursor: pointer; /* Курсор в виде указателя при наведении */
}
</style>
