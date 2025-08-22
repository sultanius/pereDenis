<template>

    <div  class="propject-comp-container">
        <div></div>
        <div>
            <h1>РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h1>

            <p>Каждый проект, который мы реализуем, отражает нашу философию минимализма и стремление к идеальному балансу между стилем и функциональностью</p>
            <p>Мы гордимся тем, что наши дома становятся не просто архитектурными сооружениями, а пространствами для жизни, наполненными комфортом и светом</p>
            <p>В этом разделе представлены некоторые из наших самых успешных проектов, которые подчеркивают наш подход к индивидуальности и вниманию к деталям</p>
        </div>

        <div class="toggle-buttons">
            <button class="toggle-button active" @click="setActive(0)">Все проекты</button>
            <button class="toggle-button" @click="setActive(1)">Частные дома</button>
            <button class="toggle-button" @click="setActive(2)">Интерьер</button>
        </div>

        <div class="propject-comp-select">
            <select name="city" id="city-select" class="custom-select">
                <option value="petersburg">Строительство</option>
                <option value="petersburg">Типовой проект</option>
                <option value="petersburg">Реализован</option>
                <option value="petersburg">Ожидание строительства</option>
                <option value="petersburg">Концепт</option>
            </select>

            <select name="city"  class="custom-select">
                <option value="petersburg">2025</option>
                <option value="petersburg">2024</option>
                <option value="petersburg">2023</option>
                <option value="petersburg">2022</option>
                <option value="petersburg">2021</option>
                <option value="petersburg">2020</option>
            </select>
        </div>
    </div>

    <div class="preview-container">
        <ProjectPreviewItem  v-for="(item, i) in projectPreviews" :image="item.image" :item="item" :key="item" @click="goToProject(item.pathUrl)"/>
    </div>

</template>

<script setup>
import FillBtn from '../../components/ui/FillBtn.vue'
import ProjectHeader from './ProjectHeader.vue'
import ProjectPreviewItem from './ProjectPreviewItem.vue'
import { useRouter } from 'vue-router'
import { projectPreviews } from '../../constants/index.js'

const router = useRouter();

const goToProject = (pathUrl) => {
    // router.push(`/projects/${pathUrl}`)
    router.push({ path: `/projects/${pathUrl}`, params: { str: '123' }})
}

const setActive = (index) => {
    // Получаем все кнопки
    const buttons = document.querySelectorAll('.toggle-button');

    // Убираем активный класс у всех кнопок
    buttons.forEach((button, i) => {
        button.classList.remove('active');
    });

    // Добавляем активный класс к выбранной кнопке
    buttons[index].classList.add('active');
}

</script>


<style scoped>

.test {
    border: 1px solid black;
}
h1{
    margin-bottom: 16px;
    font-size: 40px;
    font-weight: 600;
    line-height: 100%;
}
p{
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 100%;
}
.propject-comp-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    /*margin: 35px 120px;*/
    margin: 0 auto;
    max-width: 1520px;
}

.preview-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    /*margin: 35px 120px;*/
    margin: 0 auto;
    max-width: 1520px;
}


.toggle-buttons {
    margin-bottom: 32px;
}

.toggle-button {
    border: 1px solid #333;
    background-color: transparent;
    color: #333;
    cursor: pointer;
    flex: 1; /* Занимает равное место */
    transition: background-color 0.3s, color 0.3s; /* Плавный переход */
    border-radius: 4px;
    font-size: 20px;
    padding: 20px 24px;
}

/* Активный класс */
.toggle-button.active {
    background-color: #383838;
    color: white;
}

/* Убираем двойные границы между кнопками */
.toggle-button:not(:last-child) {
    border-right: none; /* Убираем правую границу */
}

/* Добавляем внутренние отступы, чтобы края кнопок не задевали друг друга */
.toggle-button {
    box-sizing: border-box; /* Учитываем границы в расчетах ширины */
}

.propject-comp-select {
    text-align: end;
}






.custom-select {
    background-color: white;
    border-radius: 4px;
    padding: 12px 14px;
    border: 1px solid black; /* Черный бордер */
    color: black; /* Цвет текста в селекте */
    /*width: 200px; !* Ширина селекта *!*/
    appearance: none; /* Убираем стандартный стиль селекта */
    transition: border-color 0.3s;
}

.custom-select:focus {
    outline: none; /* Убираем обвод вокруг селекта при фокусе */
}

/* Стили для выпадающего списка */
.custom-select option {
    background-color: grey; /* Серый фон выпадающего списка */
    transition: background-color 0.3s;
    color: white; /* Белый текст в выпадающем списке */
    padding: 10px; /* Паддинги для опций */
    margin-top: 12px;
}

.custom-select option:hover {
    color: black;
}

/* Добавляем стрелку вниз */
.custom-select::after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
}
/* Стиль для выпадающего меню с эффектом анимации */
.custom-select{
    overflow: hidden; /* Убираем лишние элементы */
}
.custom-select option {
    display: none; /* Скрываем стандартные опции */
}

.custom-select:focus option {
    display: block; /* Отображаем опции при фокусе */
    animation: slideDown 0.3s ease-in-out; /* Класс для анимации */
}

@media (max-width: 768px) {
    .propject-comp-container {
        grid-template-columns: 1fr;
        padding: 16px;
        gap: 12px;
    }

    .preview-container {
        grid-template-columns: 1fr;
        padding: 16px;
    }

    .toggle-buttons {
        margin-bottom: 0;
    }

    .toggle-button {
        padding: 14px;
        font-size: 14px;
    }

    .propject-comp-select {
        text-align: start;
    }
}
</style>
