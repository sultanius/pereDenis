<template>
    <div class="burger-button" :class="{'white': color === 'white', 'black': color === 'black'}">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
    </div>
</template>

<script setup>

const props = defineProps({
    color: String,
})

</script>

<style scoped>
.burger-button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Распределяет полоски равномерно */
    width: 40px; /* Ширина кнопки */
    height: 30px; /* Высота кнопки */
}

.bar {
    height: 1px; /* Высота каждой полоски */
    border-radius: 1px; /* Скругление углов полосок */
    transition: background 0.3s ease; /* Плавный переход цвета */
}

.bar1, .bar2, .bar3 {
    background-color: #000000; /* Перший цвет полоски */
}

.white .bar {
    background-color: #ffffff; /* Цвет для белого бургера */
}

.black .bar {
    background-color: #000000; /* Цвет для черного бургера */
}

</style>
