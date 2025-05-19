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
        <ProjectPreviewItem  v-for="(item, i) in projectPreviews" :image="item.image" :item="item" :key="item" @click="goToProject(item.pathUrl)"/>
    </div>

</template>

<script setup>
import FillBtn from '../../components/ui/FillBtn.vue'
import ProjectHeader from './ProjectHeader.vue'
import ProjectPreviewItem from './ProjectPreviewItem.vue'
import { useRouter } from 'vue-router'

const STAGE_PROCESS = {
    process: 'Строительство',
    type_project: 'Типовой проект',
    done: 'Реализован',
    waiting: 'Ожидание строительства',
    concept: 'Концепт',
}

const projectPreviews = [
    {
        id: 1,
        year: '2024',
        name: 'КП РЕПИНО ПАРК',
        pathUrl: 'kp-repino-park-1',
        stageProcess: STAGE_PROCESS.process,
        square: '480 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_1.png?alt=media&token=5c87dc54-c8bc-4d82-980f-14910a7bd25e',
    },
    {
        id: 2,
        year: '2024',
        name: 'КП РЕПИНО ПАРК',
        pathUrl: 'kp-repino-park-1',
        stageProcess: STAGE_PROCESS.process,
        square: '250 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_2.png?alt=media&token=fa68d9b2-e112-4602-a5bb-10af05405c97',
    },
    {
        id: 3,
        year: '2023',
        name: 'PERE_DESIGN_H3',
        pathUrl: 'pere-design-h3',
        stageProcess: STAGE_PROCESS.type_project,
        square: '160 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_3.jpg?alt=media&token=57a892dd-3fc1-4968-9333-af262eac02ef',
    },
    {
        id: 4,
        year: '2023',
        name: 'ОРЕХОВО',
        pathUrl: 'orekhovo',
        stageProcess: STAGE_PROCESS.done,
        square: '160 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_4.png?alt=media&token=9b0125e9-808e-43ea-85dd-c649d9753203',
    },
    {
        id: 5,
        year: '2024',
        name: 'КП ПЕТЕРГОФСКИЕ ДАЧИ',
        pathUrl: 'kp-petergofskie-dachi',
        stageProcess: STAGE_PROCESS.waiting,
        square: '160 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_5.png?alt=media&token=31bacf60-f9c2-4622-af01-811e50d232fb',
    },
    {
        id: 6,
        year: '2022',
        name: 'КП ЗЕЛЕНЫЙ ОСТРОВ',
        pathUrl: 'kp-zelenyj-ostrov',
        stageProcess: STAGE_PROCESS.done,
        square: '160 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_6.png?alt=media&token=66e13a86-9872-4b36-9f51-ebf03bb2199d',
    },
    {
        id: 7,
        year: '2023',
        name: 'НИЗИНО',
        pathUrl: 'NIZINO-1',
        stageProcess: STAGE_PROCESS.done,
        square: '230 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_7.png?alt=media&token=3ec5d1f2-15e4-4749-afe6-3b581c8a39a6',
    },
    {
        id: 8,
        year: '2021',
        name: 'ПАРГОЛОВО',
        pathUrl: 'PARGOLOVO',
        stageProcess: STAGE_PROCESS.waiting,
        square: '240 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_8.png?alt=media&token=e52a55b9-3214-4efa-a7f7-e7213ed17080',
    },
    {
        id: 9,
        year: '2023',
        name: 'НИЗИНО',
        pathUrl: 'NIZINO-2',
        stageProcess: STAGE_PROCESS.process,
        square: '250 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_9.png?alt=media&token=5b4829c7-e845-456a-9bc4-62a4f094551c',
    },
    {
        id: 10,
        year: '2022',
        name: 'ИСТРА',
        pathUrl: 'ISTRA',
        stageProcess: STAGE_PROCESS.waiting,
        square: '270 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_10.png?alt=media&token=2078fd26-c3dc-4df5-a18e-445df47fdbda',
    },
    {
        id: 11,
        year: '2023',
        name: 'ИЖЕСВК',
        pathUrl: 'IZHESVK',
        stageProcess: STAGE_PROCESS.process,
        square: '210 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_11.png?alt=media&token=a028c81b-8b7c-451c-b577-bc8189508735',
    },
    {
        id: 12,
        year: '2023',
        name: '111',
        pathUrl: 'kp',
        stageProcess: '111 проект',
        square: '111 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_12.png?alt=media&token=214a4a55-51aa-466a-ab06-baba89da192e',
    },
    {
        id: 13,
        year: '2024',
        name: 'СЕРПУХОВ',
        pathUrl: 'SERPUKHOV',
        stageProcess: STAGE_PROCESS.process,
        square: '160 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_13.png?alt=media&token=66dc5162-7a04-4906-a543-7dedb9406ce0',
    },
    {
        id: 14,
        year: '2022',
        name: 'ЦВЕТКОВО',
        pathUrl: 'CVETKOVO',
        stageProcess: STAGE_PROCESS.done,
        square: '190 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_14.png?alt=media&token=269dfe20-014a-4ab9-a5fd-94dcbf6991a6',
    },
    {
        id: 15,
        year: '2023',
        name: 'НАРА',
        pathUrl: 'NARA',
        stageProcess: STAGE_PROCESS.process,
        square: '270 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_15.png?alt=media&token=8dab2da6-36f2-442b-aac2-3117b15678eb',
    },
    {
        id: 16,
        year: '2024',
        name: 'КП ВИТЯЗЬ',
        pathUrl: 'KP-VITYAZ',
        stageProcess: STAGE_PROCESS.process,
        square: '680 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_16.png?alt=media&token=9377a1c8-f069-4ca5-b49f-275caf83f456',
    },
    {
        id: 17,
        year: '2024',
        name: 'СЕРГИЕВ ПОСАД',
        pathUrl: 'SERGIEV-POSAD',
        stageProcess: STAGE_PROCESS.waiting,
        square: '330 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_17.png?alt=media&token=fa1b9f1b-fb76-4e93-b0d8-ac0951cbd191',
    },
    {
        id: 18,
        year: '2023',
        name: 'ВИЛЛА СТОУН',
        pathUrl: 'VILLA-STOUN',
        stageProcess: STAGE_PROCESS.concept,
        square: '190 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_18.png?alt=media&token=7d577126-7168-40bf-a919-7e8056f5ba71',
    },
    {
        id: 19,
        year: '2023',
        name: 'НИЗИНО',
        pathUrl: 'NIZINO-3',
        stageProcess: STAGE_PROCESS.process,
        square: '240 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_19.png?alt=media&token=c1c76dda-d21b-4b15-8eb1-c740d40b62ca',
    },
    {
        id: 20,
        year: '2025',
        name: 'КП ЮККОВСКОЕ',
        pathUrl: 'KP-YUKKOVSKOE',
        stageProcess: STAGE_PROCESS.process,
        square: '150 м2',
        image: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Flist%2FpereProject_20.png?alt=media&token=db3b659f-7342-454a-aa8c-2d0fe566cf8b',
    },
]
const router = useRouter();

const goToProject = (pathUrl) => {
    router.push(`/projects/${pathUrl}`)
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
