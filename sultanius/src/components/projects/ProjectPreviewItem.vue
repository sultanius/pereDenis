<template>
    <div class="image-container">
        <img :src="item.image" alt="Пример изображения">
        <div class="overlay">
            <div class="top-left">
                {{ item.year }}
            </div>
            <div class="middle-text">{{ item.name }}</div>
            <div class="bottom-line"></div>

            <div class="bottom-left">
                <div>Стадия</div>
                <div>{{ item.stageProcess }}</div>
            </div>
            <div class="bottom-right">{{ item.square }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: Number,
    year: String,
    name: String,
    stageProcess: String,
    square: String,
    image: String,
    item: Object,
})
const isHovered = ref(false);


</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s; /* Плавный переход для эффекта наведения */
}

.image-container {
    position: relative;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
}

.image-container img {
    display: block; /* Удаляет пробелы вокруг изображения */
    /*width: auto; */
    /*height: auto;*/
    transition: transform 0.3s ease; /* Для анимации при наведении */
}

.image-container:hover img {
    transform: scale(1.05); /* Увеличение изображения при наведении */
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Центрирование текста по вертикали */
    align-items: center; /* Центрирование текста по горизонтали */
    opacity: 0; /* Изначально скрываем текст */
    transition: opacity 0.3s ease; /* Плавный переход */
}

.image-container:hover .overlay {
    opacity: 1; /* Показываем текст при наведении */
}

.top-left, .bottom-left, .bottom-right, .bottom-line, .middle-text {
    position: absolute;
    /* Настройте стиль по своему усмотрению */
}

.top-left {
    top: 24px;
    left: 24px;
}

.middle-text {
    top: 30%;
    left: 24px;
    font-size: 48px;
}

.bottom-line {
    bottom: 90px;
    border: 1px solid white;
    width: 100%;
    height: 1px;
    background-color: red;
}

.bottom-left {
    bottom: 24px;
    left: 24px;
}

.bottom-right {
    bottom: 24px;
    right: 24px;
    padding: 12px 24px;
    border: 1px solid white;
}
</style>
