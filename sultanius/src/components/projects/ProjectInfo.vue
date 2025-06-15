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
                <img v-if="image.url"  :src="image.url" loading="lazy">
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
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-zelenyj-ostrov%2Fkp-zelenyj-ostrov-1.png?alt=media&token=f6c26e1f-e596-4bf4-ae8d-0730802d41d0',
    ],
    'kp-zelenyj-ostrov': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-zelenyj-ostrov%2Fkp-zelenyj-ostrov-1.png?alt=media&token=f6c26e1f-e596-4bf4-ae8d-0730802d41d0',
    ],
    'NIZINO-1': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-1%2FNIZINO-1-1.png?alt=media&token=7ccd6dad-050f-4fba-b7e4-a1a4a2275937',
    ],
    'PARGOLOVO': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FPARGOLOVO%2FPARGOLOVO-1.png?alt=media&token=84988971-6ffe-43dc-a777-0e16199a7978',
    ],
    'NIZINO-2': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-2%2FNIZINO-2-1.png?alt=media&token=0a393ddc-93f5-4aa4-98a5-2ebf4deb6887',
    ],
    'ISTRA': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-1.png?alt=media&token=19df7d78-d604-4d6a-8289-2dc980081c28',
    ],
    'IZHESVK': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FIZHESVK%2FIZHESVK-1.png?alt=media&token=2e7aa58c-4b0d-43a3-9927-5f2f46976737',
    ],
    'KORKINSKIE-CHOLMI': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKORKINSKIE-CHOLMI%2FKORKINSKIE-CHOLMI-1.png?alt=media&token=2d7f2a50-f9ee-495f-99af-deb8feb35a89',
    ],
    'SERPUKHOV': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERPUKHOV%2FSERPUKHOV-1.png?alt=media&token=f45d5726-1cb3-4d9e-b1f4-5c88dff9d1ca',
    ],
    'CVETKOVO': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FCVETKOVO%2FCVETKOVO-1.png?alt=media&token=154f637b-4a56-45df-92d9-ed656858a5e2',
    ],
    'NARA': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNARA%2FNARA-1.png?alt=media&token=ed7e9dbd-0aef-4d74-801d-6e057d088351',
    ],
    'KP-VITYAZ': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-1.jpg?alt=media&token=06f434f2-75af-4650-808a-90f8a9f53b18',
    ],
    'SERGIEV-POSAD': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-1.jpg?alt=media&token=2ccb160f-444e-490c-a16c-8f1ffb0394b8',
    ],
    'VILLA-STOUN': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-1.jpg?alt=media&token=a453368e-aead-446e-8f4b-aeaeab7b3656',
    ],
    'NIZINO-3': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-1.jpg?alt=media&token=a0bbeb27-2202-41b7-9685-6f9c05666f48',
    ],
    'KP-YUKKOVSKOE': [
        'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-1.jpg?alt=media&token=c7d7f6e1-46d6-4bca-b810-352daf2c7f57',
    ],
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
    'kp-petergofskie-dachi': [
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-petergofskie-dachi%2Fkp-petergofskie-dachi-2.png?alt=media&token=8dd73a1d-89d8-4a85-90b1-f1d95ba251b3',
            widthClass: 'w-100',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-petergofskie-dachi%2Fkp-petergofskie-dachi-3.png?alt=media&token=0eba01d3-1204-400f-b2c1-23d0fa423c8b',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-petergofskie-dachi%2Fkp-petergofskie-dachi-4.png?alt=media&token=beb68204-2d15-4738-b522-c4356ee3816f',
            widthClass: 'w-50',
        },
        {
            url:'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-petergofskie-dachi%2Fkp-petergofskie-dachi-5.png?alt=media&token=cbce4309-d4b9-49e4-8ae2-d1e99a47dc5e',
            widthClass: 'w-100',
        },
    ],
    'kp-zelenyj-ostrov': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-zelenyj-ostrov%2Fkp-zelenyj-ostrov-2.png?alt=media&token=2de6d804-8a65-44d7-8cbb-75e28b02a6b5',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-zelenyj-ostrov%2Fkp-zelenyj-ostrov-3.png?alt=media&token=f55a83bb-03ff-48ff-83a8-bea65f9f7872',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-zelenyj-ostrov%2Fkp-zelenyj-ostrov-4.png?alt=media&token=2200d284-6000-4395-9837-cbe1bff25d5a',
            widthClass: 'w-50',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2Fkp-zelenyj-ostrov%2Fkp-zelenyj-ostrov-5.png?alt=media&token=50462cb3-ddae-4142-873d-aa524ac0d9be',
            widthClass: 'w-50',
        },
    ],
    'NIZINO-1': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-1%2FNIZINO-1-2.png?alt=media&token=bb36d439-592a-4c7b-bfbd-3fbd789bb263',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-1%2FNIZINO-1-3.png?alt=media&token=9053a055-4726-443a-b35a-c575c8f5b787',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-1%2FNIZINO-1-4.png?alt=media&token=f79efc40-d202-43de-850c-fe7c9601eafc',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-1%2FNIZINO-1-5.png?alt=media&token=168c39d0-3f5e-4217-9c33-8a9753dc796f',
            widthClass: 'w-100',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-1%2FNIZINO-1-6.png?alt=media&token=a06895de-6d4a-447d-b04f-ca7994c046ef',
            widthClass: 'w-50',
        },
    ],
    'PARGOLOVO': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FPARGOLOVO%2FPARGOLOVO-2.png?alt=media&token=d148e4a6-2add-4210-9277-0c6039850f13',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FPARGOLOVO%2FPARGOLOVO-3.png?alt=media&token=f075683f-2beb-4c12-bce8-71a85c2dec5b',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FPARGOLOVO%2FPARGOLOVO-4.png?alt=media&token=082a379e-e847-4586-b4b5-ce0753c47f7b',
            widthClass: 'w-50',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FPARGOLOVO%2FPARGOLOVO-5.png?alt=media&token=c62ff418-8a48-4a78-a375-bcfeef9f7cb2',
            widthClass: 'w-50',
        },
    ],
    'NIZINO-2': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-2%2FNIZINO-2-2.png?alt=media&token=675104ce-132a-4dab-9cc4-8b482e2e2b11',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-2%2FNIZINO-2-3.png?alt=media&token=ed9edb19-b37c-43ac-9629-c20d1c149824',
            widthClass: 'w-100',
        },
    ],
    'ISTRA': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-2.png?alt=media&token=c16bf07a-b258-4c59-8ea1-a081e3f260a7',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-3.png?alt=media&token=5f4a8a90-6b5f-4c3a-9cac-99ed94cd4390',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-4.png?alt=media&token=93cc4f50-e995-41e1-98e8-06200c86258d',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-5.png?alt=media&token=feb2c859-eef0-4b3d-bbbf-f0f3230b46c1',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-6.png?alt=media&token=ed772594-5736-4011-ab8d-c47f58fab29d',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-7.png?alt=media&token=79327bb7-5f9b-49b3-b6cf-c81ab54e4b20',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-8.png?alt=media&token=14a36e32-10fe-4b60-a806-5a75efb9cbff',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-9.png?alt=media&token=d0abb609-6082-44d5-b47b-e4aa242d6f19',
            widthClass: 'w-50',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FISTRA%2FISTRA-10.png?alt=media&token=13f7a6b9-a3c7-4215-989c-ef6c1b5ad1fe',
            widthClass: 'w-50',
        },
    ],
    'IZHESVK': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FIZHESVK%2FIZHESVK-2.png?alt=media&token=a0d09666-127b-4e80-a4af-321a43beabe0',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FIZHESVK%2FIZHESVK-3.png?alt=media&token=b1e0b84c-5bca-43ea-b9ce-a7646c259e89',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FIZHESVK%2FIZHESVK-4.png?alt=media&token=da6e9f52-cc78-4284-959b-341e3dbd0164',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FIZHESVK%2FIZHESVK-5.png?alt=media&token=519adbb7-5025-455a-9d48-4628013f3145',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FIZHESVK%2FIZHESVK-7.png?alt=media&token=a7a9e14d-8f6b-4b38-9bac-2b361c6b8964',
            widthClass: 'w-100',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FIZHESVK%2FIZHESVK-8.png?alt=media&token=cf88f570-2aa0-4a74-8338-1e5093275368',
            widthClass: 'w-50',
        },
    ],
    'KORKINSKIE-CHOLMI': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKORKINSKIE-CHOLMI%2FKORKINSKIE-CHOLMI-2.png?alt=media&token=26c5f260-5e2e-4751-a44a-235dd3adec7a',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKORKINSKIE-CHOLMI%2FKORKINSKIE-CHOLMI-3.png?alt=media&token=d3135cc6-92d8-45a6-9263-599709515427',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKORKINSKIE-CHOLMI%2FKORKINSKIE-CHOLMI-4.png?alt=media&token=9c60d748-a461-44a8-bba1-ea2d3209072e',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKORKINSKIE-CHOLMI%2FKORKINSKIE-CHOLMI-5.png?alt=media&token=5367375f-30df-4d9b-8584-89f77190ce04',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKORKINSKIE-CHOLMI%2FKORKINSKIE-CHOLMI-6.png?alt=media&token=bf3608e4-c6b4-4554-a66e-19cd330b2114',
            widthClass: 'w-100',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKORKINSKIE-CHOLMI%2FKORKINSKIE-CHOLMI-7.png?alt=media&token=a9556d96-efb4-4159-87bf-c23c7ed0a86b',
            widthClass: 'w-50',
        },
    ],
    'SERPUKHOV': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERPUKHOV%2FSERPUKHOV-2.png?alt=media&token=b234d68f-180e-48a4-8d5d-822b502b8755',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERPUKHOV%2FSERPUKHOV-3.png?alt=media&token=edb14add-706a-4a81-b00a-6ff8a9a01f97',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERPUKHOV%2FSERPUKHOV-4.png?alt=media&token=e5010b00-8f44-4e68-859d-fafa23205a2d',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERPUKHOV%2FSERPUKHOV-5.png?alt=media&token=b567e809-8b85-4ce6-a78a-a27abdce61ac',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERPUKHOV%2FSERPUKHOV-6.png?alt=media&token=f2747fe5-306a-4e67-bd1a-4c8317cdc558',
            widthClass: 'w-100',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERPUKHOV%2FSERPUKHOV-7.png?alt=media&token=d1f3125e-1405-4a76-94b6-14fd667fffdc',
            widthClass: 'w-50',
        },
    ],
    'CVETKOVO': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FCVETKOVO%2FCVETKOVO-2.png?alt=media&token=98a93ca2-4ef2-42e6-a971-f180db2b9344',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FCVETKOVO%2FCVETKOVO-3.png?alt=media&token=a11574de-ff5a-4d3c-89c5-44376c3c69d5',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FCVETKOVO%2FCVETKOVO-4.png?alt=media&token=a07e4836-76f4-4083-8e73-2fd63373f854',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FCVETKOVO%2FCVETKOVO-5.png?alt=media&token=2875a12a-e71b-4608-9119-8937905fd4dc',
            widthClass: 'w-100',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FCVETKOVO%2FCVETKOVO-6.png?alt=media&token=7a4dfb91-a351-4549-b3b8-4f9e41f3f0bc',
            widthClass: 'w-50',
        },
    ],
    'NARA': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNARA%2FNARA-2.png?alt=media&token=b2813a70-6979-4269-b97a-d109ef050e7e',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNARA%2FNARA-3.png?alt=media&token=922af5b1-138d-47c6-b2c6-244399c89fd4',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNARA%2FNARA-4.png?alt=media&token=ac3690eb-020e-4908-beb4-d647f583e709',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNARA%2FNARA-5.png?alt=media&token=6bb6e5f4-ed82-417b-9a8d-4dc3ae6777a7',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNARA%2FNARA-6.png?alt=media&token=efec8503-1e83-4e0b-ada2-2a69294f24e6',
            widthClass: 'w-100',
        },
    ],
    'KP-VITYAZ': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-2.jpg?alt=media&token=e6613065-6bce-4b9a-8327-4522a63e9589',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-3.jpg?alt=media&token=83130b41-14d6-4b1b-a8d2-c0a1f30b5251',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-4.jpg?alt=media&token=6059adf6-fc6d-4388-96cb-22c32e93b79a',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-5.jpg?alt=media&token=b3450136-9f21-40b4-8240-2674603d50fa',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-6.jpg?alt=media&token=b00b021f-5c17-4506-b3a5-3973b513e745',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-7.jpg?alt=media&token=2dcf4d9f-bf32-42ff-aa8d-d16ebf58f1f0',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-VITYAZ%2FKP-VITYAZ-8.jpg?alt=media&token=bb4754cd-48d3-4957-8cdf-5eaf3f74ee47',
            widthClass: 'w-50',
        },
    ],
    'SERGIEV-POSAD': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-2.jpg?alt=media&token=ab33d86d-736d-4de2-9d26-3e2052df47cb',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-3.jpg?alt=media&token=f715147f-3abc-4e3f-8561-846cb8772d94',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-4.jpg?alt=media&token=0721f0d6-008e-4d61-846a-296deaeaf7c3',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-5.jpg?alt=media&token=12cd572c-cadd-4491-8040-a4e463eff0cf',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-6.jpg?alt=media&token=d266a244-0ad3-4378-88dc-6b37a4dfe80e',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-7.jpg?alt=media&token=164ecb4c-efad-4cf6-baa8-bb24e2295745',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-8.jpg?alt=media&token=03e2b76c-cc35-4338-bef6-0843f2ca623c',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FSERGIEV-POSAD%2FSERGIEV-POSAD-9.jpg?alt=media&token=8e4abeb2-54a0-41d4-8946-603831d6ba86',
            widthClass: 'w-100',
        },
    ],
    'VILLA-STOUN': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-2.jpg?alt=media&token=e7549ff3-2aad-4de9-b4e6-bf15a6b4ef44',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-3.jpg?alt=media&token=31d9699d-7226-4b28-8bd2-95cb0778489e',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-4.jpg?alt=media&token=b799bd27-7848-4b74-96fb-4832e800dc1d',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-5.jpg?alt=media&token=7a6ab74b-a70a-47c5-a1ee-8584fbc1a9cf',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-6.jpg?alt=media&token=c121c18d-580a-4a93-8892-0a96bde1ea2f',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-7.jpg?alt=media&token=58d35719-6c6b-4676-b815-1aa4db682694',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-8.jpg?alt=media&token=e6dfe03d-8914-47a0-8fb9-69cad3a0aff8',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-9.jpg?alt=media&token=d4f37cc5-d5ec-469f-b445-0799a970ee56',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-10.jpg?alt=media&token=0210c8a7-bb83-479e-b9f5-e2a6ac1cc601',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-11.jpg?alt=media&token=ec427393-c99b-4d91-a874-efdcd5080f53',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-13.jpg?alt=media&token=7ef14f68-9038-40d7-964e-ebb185ac8e2f',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-14.jpg?alt=media&token=a6da8fcc-54a2-448e-80c2-debe8a1c29e8',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-15.jpg?alt=media&token=3f8e3fd4-3bc3-41f9-aa1a-41178b02cd65',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FVILLA-STOUN%2FVILLA-STOUN-16.jpg?alt=media&token=fb05ebb0-26a3-449a-b01b-94ff04352009',
            widthClass: 'w-50',
        },
    ],
    'NIZINO-3': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-2.jpg?alt=media&token=219bb1ef-0c54-4f57-957b-83bc9e89f666',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-3.jpg?alt=media&token=5e755ce1-f869-4871-9a67-1f797b8d7829',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-4.jpg?alt=media&token=0aece42c-ff5d-43ed-a76f-247ee3acf803',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-5.jpg?alt=media&token=17258ab9-b117-435a-b5b3-f979fa5cc92d',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-6.jpg?alt=media&token=82a65c73-eef5-400d-8b5e-2839a7389d9e',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-7.jpg?alt=media&token=02405f1a-9aef-40c0-933b-360c522934d3',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-8.jpg?alt=media&token=d4f85dcf-b245-4378-9f62-afc9e5d933d4',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-9.jpg?alt=media&token=a2baf9ea-5d2e-41a8-ba72-fa49ba9e1d01',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-10.jpg?alt=media&token=677db328-b77f-4d01-9ec6-1eae4e1833a6',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-11.jpg?alt=media&token=19caa806-dff1-42ec-b037-ff1c8ee95ae3',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-12.jpg?alt=media&token=6e92e41c-2243-4e67-ada9-cbe1a15da296',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-13.jpg?alt=media&token=cadfc2a5-b6cf-44e3-8f57-885dafa2b684',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-14.jpg?alt=media&token=d6261633-4f11-4626-bacd-3c59a22a06d3',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-15.jpg?alt=media&token=f1749a85-952b-42ad-a577-d360c5af4971',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-16.jpg?alt=media&token=d69adff7-1705-4c24-8c7c-a0299e97b94c',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-17.jpg?alt=media&token=d5436544-3d9e-4c8b-84d4-77bf37753b06',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-18.jpg?alt=media&token=fb5b560b-f1ba-4d30-bea1-4a479d8e9f55',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-19.jpg?alt=media&token=18465e63-0265-45a9-bd29-2686be80b239',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-20.jpg?alt=media&token=d4e22275-c4a7-4971-b8ff-81836de5ca94',
            widthClass: 'w-50',
        },
        {
            url: '',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FNIZINO-3%2FNIZINO-3-21.jpg?alt=media&token=e14bd90f-cf9c-4411-8603-3a1ce2fd628d',
            widthClass: 'w-50',
        },
    ],
    'KP-YUKKOVSKOE': [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-2.jpg?alt=media&token=d5c96867-8757-48fc-aef2-ef9b7f4d6ed3',
            widthClass: 'w-100',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-3.jpg?alt=media&token=159282d0-968d-43e1-b9c0-cd30b54dbb6c',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-4.jpg?alt=media&token=9995e8f0-84ba-474a-99b6-9935a8c5f33f',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-5.jpg?alt=media&token=9d66178b-1c94-4a66-aac3-6a349b89e227',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-6.jpg?alt=media&token=3e320888-624a-44d0-857f-622895235a4c',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-7.jpg?alt=media&token=824be9fb-2eca-4698-abc9-90f47717613f',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-8.jpg?alt=media&token=a3fd57ea-8140-4fce-9f00-3304e1b2b439',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-9.jpg?alt=media&token=65ab26b2-ff0b-4b75-8d19-fa64b4324bda',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-10.jpg?alt=media&token=dfbe86f7-cdf3-4974-ab90-d63af141f438',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-11.jpg?alt=media&token=9231e72d-ccc9-4b2f-8fab-25a015fe965a',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-12.jpg?alt=media&token=497265f0-f6d4-4d32-bf61-4aa628cca9d1',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-13.jpg?alt=media&token=85500e8e-338a-4d52-bf25-c6f365e7311f',
            widthClass: 'w-50',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/pereDesign%2FKP-YUKKOVSKOE%2FKP-YUKKOVSKOE-14.jpg?alt=media&token=c36841a4-b048-4a10-93fd-2bf962cddbc8',
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
