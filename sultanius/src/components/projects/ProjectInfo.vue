<template>
    <ProjectHeader />

    <div class="container container-project-info">
        <div style="color: #656565">(фотографии проекта)</div>
        <div>
            <h1>КП РЕПИНО ПАРК</h1>
        </div>
        <div>
            <img :src="projectMainImageMap[route.params.name][0]">
        </div>
        <div>
            <div class="info-row-item">
                <p class="bold-p">Год</p>
                <p>2024</p>
            </div>

            <div class="info-row-item">
                <p class="bold-p">Стадия</p>
                <p>Строительство</p>
            </div>

            <div class="info-row-item">
                <p class="bold-p">Площадь</p>
                <p>480м2</p>
            </div>

            <div class="info-row-item">
                <p class="bold-p">Автор</p>
                <p>Денис Перевозников</p>
            </div>
        </div>


    </div>

    <div class="container">
        <div class="image-container">
            <div v-for="(image, index) in projectImageMap[route.params.name]" :key="index" :class="['image-item', image.widthClass]">
                <img v-if="image.url"  :src="image.url" >
            </div>
        </div>
    </div>

    <MainFooter />

</template>

<script setup>
import { useRoute } from 'vue-router'

import ProjectHeader from './ProjectHeader.vue'
import MainFooter from '../mainPage/MainFooter.vue'

const route = useRoute();
console.log(3, route.params.name);

const projectMainImageMap = {
    'kp-repino-park-1': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-1.png?alt=media&token=aa72fb0b-cb79-461c-949d-70acc40f2988',
    ],
    'kp-repino-park-2': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fpere-design-h3%2Fkp-repino-park-3-1.png?alt=media&token=384991d9-7dc9-4197-88d8-70bbf44381bb',
    ],
    'pere-design-h3': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-1.png?alt=media&token=aa72fb0b-cb79-461c-949d-70acc40f2988',
    ],
    'orekhovo': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-1.png?alt=media&token=aa72fb0b-cb79-461c-949d-70acc40f2988',
    ],
    'kp-petergofskie-dachi': [
        '',
    ],
    'kp1': [
        '',
    ]
}

const projectImageMap = {
    'kp-repino-park-1': [
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-2.png?alt=media&token=e1c02686-fec8-4018-8c47-cbde9beb6350',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-3.png?alt=media&token=f5870c79-3747-4c17-b1c6-adec4c119770',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-4.png?alt=media&token=40a05d87-b585-43e9-afb4-2848dae13743',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-5.png?alt=media&token=38d2b8d6-5799-473b-a0f4-f59e4b4eddd6',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-6.png?alt=media&token=c7d84ac8-8521-4af3-aa50-d864b9d56361',
            widthClass: 'w-100',
        },
        {
            url:'',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-1%2Fkp-repino-park-1-7.png?alt=media&token=870b1848-7d95-4816-9b0c-e4965d7c2eca',
            widthClass: 'w-50',
        },
    ],
    'kp-repino-park-2': [

        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-2%2Fkp-repino-park-2-2.png?alt=media&token=618c5f09-8846-4ea9-8261-681a1ba5806b',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-2%2Fkp-repino-park-2-3.png?alt=media&token=1b6ac5e2-a1f1-42f2-a35e-4c05468fb8e3',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-2%2Fkp-repino-park-2-4.png?alt=media&token=71e1ebe7-bc7d-4fbe-8502-c42816f9876e',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-2%2Fkp-repino-park-2-5.png?alt=media&token=b45656e5-e4c0-4b4f-b6c9-45381f7df47e',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-repino-park-2%2Fkp-repino-park-2-6.png?alt=media&token=2f0e13f2-cdbe-4f55-a02e-cf171a45aae7',
            widthClass: 'w-100',
        },
    ],
    'pere-design-h3': [
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fpere-design-h3%2Fkp-repino-park-3-2.png?alt=media&token=85c4c4ce-92d6-42a9-b8ad-9ad7657b320c',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fpere-design-h3%2Fkp-repino-park-3-3.png?alt=media&token=e37aad27-0e5e-4884-b19c-9f86aed4f683',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fpere-design-h3%2Fkp-repino-park-3-4.png?alt=media&token=5af56d18-534d-4849-90d7-24e6c4d9d178',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fpere-design-h3%2Fkp-repino-park-3-5.png?alt=media&token=beb2637a-4cf6-485d-bada-6691b53dae49',
            widthClass: 'w-100',
        },
        {
            url:'',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fpere-design-h3%2Fkp-repino-park-3-6.png?alt=media&token=3e1a5d51-32d6-4cc9-b756-0db7ceb6cc42',
            widthClass: 'w-50',
        },
    ],
    'orekhovo': [
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-2.png?alt=media&token=2d043e31-db87-425e-9178-16b7f913dac7',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-3.png?alt=media&token=5a514a57-a96c-4946-97d9-1fc7adc5c629',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-4.png?alt=media&token=0448e86f-bd35-4d84-9b86-d4c3347d541c',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-5.png?alt=media&token=5f65f484-a926-4cdb-a568-2f5cd5c1c78f',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-6.png?alt=media&token=62e984bd-c27c-4c2a-ae98-11c0aee64b26',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-7.png?alt=media&token=31ee5fac-f007-4b69-ad5c-eb8e26e9cd41',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-8.png?alt=media&token=6f2288c1-127b-46d1-9c11-0e023c267709',
            widthClass: 'w-50',
        },
        {
            url:'',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Forekhovo%2Forekhovo-9.png?alt=media&token=9064600c-df57-453d-9811-f6fef1545b0a',
            widthClass: 'w-50',
        },
    ],
    '1': [
        {
            url:'',
            widthClass: 'w-50',
        },
    ],
}

</script>

<style scoped>



.image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px; /* отступ между элементами */
    margin-bottom: 12px; /* отступ снизу контейнера */
}

.image-item {
    box-sizing: border-box;
}

.w-100 {
    flex: 0 0 100%;
}

.w-50 {
    flex: 0 0 calc(50% - 12px); /* учитываем отступы при расчете ширины */
}

.image-item img {
    width: 100%;
    height: auto; /* сохраняем пропорции изображений */
    display: block; /* убираем пробел под изображениями */
}




h1{
    font-size: 40px;
    font-weight: 600;
}
img{
    max-width: 100%;
}

.container {
    max-width: 1520px;
    margin: 0 auto;
}

.container-project-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
}

.info-row-item {
    display: flex;
    border-bottom: 1px solid #BFBFBF;
    font-size: 20px;
    padding: 24px 0;
    color: #383838;
}
.bold-p {
    font-size: 24px;
    font-weight: 500;
    margin-right: 120px;
    min-width: 150px;
}
p {
    /*border: 1px solid black;*/
}

</style>
