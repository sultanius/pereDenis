<template>
    <ProjectHeader />


    <div  class="container">
        <div>наш опыт</div>
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

        <div  style="text-align: end">
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
        <ProjectPreviewItem  v-for="(item, i) in projectPreviews" :image="item.image" :item="item" :key="item" @click="goToProject(item.nameId)"/>
    </div>

</template>

<script setup>
import FillBtn from '../../components/ui/FillBtn.vue'
import ProjectHeader from './ProjectHeader.vue'
import ProjectPreviewItem from './ProjectPreviewItem.vue'
import { useRouter } from 'vue-router'

const projectPreviews = [
    {
        id: 1,
        year: '2024',
        name: 'КП РЕПИНО ПАРК',
        nameId: 'КП-РЕПИНО-ПАРК-1',
        stageProcess: 'Строительство',
        square: '480 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/9-key-images%2F9Keys-01.jpg?alt=media&token=9a7644cf-d32c-4789-91a2-fabb6a3821cc',
    },
    {
        id: 2,
        year: '2024',
        name: 'КП РЕПИНО ПАРК',
        nameId: 'КП-РЕПИН-ПАРК-2',
        stageProcess: 'Строительство',
        square: '250 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/9-key-images%2F9Keys-01.jpg?alt=media&token=9a7644cf-d32c-4789-91a2-fabb6a3821cc',
    },
    {
        id: 3,
        year: '2023',
        name: 'PERE_DESIGN_H3',
        nameId: 'PERE_DESIGN_H3',
        stageProcess: 'Типовой проект',
        square: '160 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/9-key-images%2F9Keys-14.jpg?alt=media&token=76c57bc4-a668-42ab-8a69-f30a3f259569',
    },
]
const router = useRouter();

const goToProject = (nameId) => {
    router.push(`/projects/${nameId}`)
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
.container{
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
    display: flex;
    height: 77px;
    margin-bottom: 32px;
}

.toggle-button {
    /*padding: 32px 24px; !* Отступы внутри кнопки *!*/
    border: 1px solid #333; /* Граница кнопки */
    background-color: transparent; /* Фон кнопки */
    color: #333; /* Цвет текста */
    cursor: pointer; /* Указатель при наведении */
    flex: 1; /* Занимает равное место */
    transition: background-color 0.3s, color 0.3s; /* Плавный переход */
    border-radius: 4px;
    font-size: 20px;
}

/* Активный класс */
.toggle-button.active {
    background-color: #383838; /* Фон активной кнопки */
    color: white; /* Цвет текста активной кнопки */
}

/* Убираем двойные границы между кнопками */
.toggle-button:not(:last-child) {
    border-right: none; /* Убираем правую границу */
}

/* Добавляем внутренние отступы, чтобы края кнопок не задевали друг друга */
.toggle-button {
    box-sizing: border-box; /* Учитываем границы в расчетах ширины */
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

</style>
