<template>
    <button class="button"><span> <slot /> </span></button>
</template>

<style scoped>
.button {
    border-radius: 4px;
    background-color: white; /* Белый фон по умолчанию */
    border: 1px solid black; /* Прозрачная граница для плавного перехода */
    color: black; /* Цвет текста черный */
    text-align: center;
    font-size: 22px;
    padding: 20px;
    position: relative; /* Для позиционирования псевдоэлемента */
    overflow: hidden;  /* Скрыть переполнение при наведении */
    transition: color 0.5s, border-color 0.5s; /* Переход для цвета текста и границы */
    cursor: pointer;
}

.button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.button:before { /* Псевдоэлемент для темного фона */
    content: '';
    position: absolute;
    top: 0;
    left: -100%; /* Начальное положение вне кнопки */
    height: 100%;
    width: 100%;
    background-color: black; /* Темный цвет для заполнения */
    transition: left 0.5s; /* Переход для перемещения */
    z-index: 0; /* Позволяет тексту быть поверх фонового цвета */
}

.button:hover:before {
    left: 0; /* Перемещение в видимую область при наведении */
}

.button:hover {
    color: white; /* Цвет текста становится белым при наведении */
    border-color: black; /* Цвет границы аналогичный фону при наведении */
}

.button span {
    position: relative; /* Позволяет тексту слегка выступать над псевдоэлементом */
    z-index: 1; /* Помещаем текст над фоновым слоем */
}
</style>
