<template>
    <div v-if="isDesktop" class="about-self-container">
        <div style="margin: 0 auto">
            <img src="../../assets/imgs/mainPage/pereDen.jpg" >
        </div>
        <div >
            <h1>ДЕНИС ПЕРЕВОЗНИКОВ</h1>

            <p>
                Начиная каждый проект,
                целиком и полностью отдаю ему время и себя, с первой личной встречи с заказчиком, заканчивая различными деталями в архитектуре или при выборе декора в интерьере.
            </p>

            <p>
                Сфера проектирования частных пространств особенно близка мне. В этом случае, ты более конкретно,
                с особым трепетом стараешься сделать идеально для конкретного заказчика и от этого  получаю максимальное удовольствие и мотивацию.
            </p>

            <p>
                Быть архитектором, значит каждый день строить в голове какие-то образы,
                искать, смотреть и сохранять всевозможные текстуры объемы, ракурсы,
                технологии
                и делать зарисовки. И не важно пригодится это или нет, чаще всего все это
                делается на подсознании и в последствие может всплыть в люблю секунду.
            </p>

            <PereDesignBlack class="pere-icon" />
        </div>
    </div>

    <AboutSelfMobile v-else/>
    <MainStats />

    <div class="main-page-projects-btn" >
        <FillBtn style="margin: 0 auto; width: 400px; text-align: center;"> ПРОЕКТЫ </FillBtn>
    </div>

    <div v-if="router.currentRoute.value.fullPath !== '/' && isDesktop" class="about-self-additional-container">
        <h1 style="text-align: right">ПРИНЦИПЫ МОЕЙ РАБОТЫ</h1>

        <div class="about-self-additional-grid">
            <div class="about-self-additional-grid__one-mobile">
                <div>
                    <svg width="43" height="136" viewBox="0 0 43 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.792 23.024H0.680002V0.0239959H42.264V136H17.792V23.024Z" fill="#E5E5E5"/>
                    </svg>
                </div>
                <div>
                    <p class="about-self-bold-p">Комфорт и удобство</p>
                    <p>Пространство должно быть <br/> эргономичным и удобным <br/> для жизни каждый день</p>
                </div>
            </div>
            <div class="about-self-additional-grid__two">
                <div>
                    <p class="about-self-bold-p">Эстетика <br/> и индивидуальность</p>
                    <p>Дом отражает личность <br/>хозяина, а не просто следует <br/>трендам</p>
                </div>
                <div>
                    <svg width="91" height="139" viewBox="0 0 91 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.544 117.472L49.936 71.656C55.5787 66.3813 59.5653 61.6587 61.896 57.488C64.3493 53.1947 65.576 48.84 65.576 44.424C65.576 41.3573 65.0853 38.536 64.104 35.96C63.1227 33.384 61.712 31.176 59.872 29.336C58.1547 27.3733 56.0693 25.84 53.616 24.736C51.2853 23.632 48.7093 23.08 45.888 23.08C39.5093 23.08 34.3573 25.5333 30.432 30.44C26.6293 35.3467 24.728 41.848 24.728 49.944H0.624C0.624 42.3387 1.66667 35.5307 3.752 29.52C5.83733 23.3867 8.84267 18.2347 12.768 14.064C16.6933 9.77066 21.416 6.45866 26.936 4.12799C32.5787 1.79733 38.8347 0.631994 45.704 0.631994C52.0827 0.631994 57.9707 1.73599 63.368 3.94399C68.7653 6.152 73.4267 9.28 77.352 13.328C81.4 17.2533 84.528 21.9147 86.736 27.312C88.944 32.7093 90.048 38.536 90.048 44.792C90.048 48.9627 89.6187 52.888 88.76 56.568C87.9013 60.1253 86.4293 63.744 84.344 67.424C82.2587 70.9813 79.56 74.6613 76.248 78.464C72.936 82.144 68.7653 86.2533 63.736 90.792L35.952 116H89.496V139H1.544V117.472Z" fill="#E5E5E5"/>
                    </svg>
                </div>
            </div>
            <div class="about-self-additional-grid__three">
                <div>
                    <svg width="93" height="142" viewBox="0 0 93 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.704 97.784C25.5627 104.408 27.9547 109.621 31.88 113.424C35.8053 117.104 40.7733 118.944 46.784 118.944C53.04 118.944 58.1307 116.859 62.056 112.688C66.104 108.395 68.128 102.936 68.128 96.312C68.128 89.32 65.6747 83.8 60.768 79.752C55.984 75.5813 49.544 73.496 41.448 73.496H37.4V49.944H39.424C45.5573 49.944 50.2187 48.7787 53.408 46.448C56.72 43.9947 58.376 40.4987 58.376 35.96C58.376 32.1573 57.272 29.0907 55.064 26.76C52.856 24.3067 49.9733 23.08 46.416 23.08C39.9147 23.08 36.112 27.1893 35.008 35.408H10.168C11.0267 24.6133 14.6453 16.1493 21.024 10.016C27.4027 3.75999 35.8053 0.631994 46.232 0.631994C51.5067 0.631994 56.352 1.55199 60.768 3.39199C65.3067 5.23199 69.1707 7.80799 72.36 11.12C75.672 14.3093 78.248 18.1733 80.088 22.712C81.928 27.128 82.848 31.9733 82.848 37.248C82.848 42.5227 81.928 47.0613 80.088 50.864C78.248 54.544 75.3653 57.7947 71.44 60.616C85.5467 66.9947 92.6 78.7093 92.6 95.76C92.6 102.384 91.4347 108.517 89.104 114.16C86.896 119.68 83.768 124.464 79.72 128.512C75.672 132.56 70.8267 135.749 65.184 138.08C59.664 140.288 53.592 141.392 46.968 141.392C40.4667 141.392 34.3947 140.349 28.752 138.264C23.232 136.056 18.3867 133.051 14.216 129.248C10.168 125.323 6.856 120.723 4.28 115.448C1.82667 110.051 0.416 104.163 0.0480003 97.784H24.704Z" fill="#E5E5E5"/>
                    </svg>
                </div>
                <div>
                    <p class="about-self-bold-p">Практичность</p>
                    <p>Использую решения, <br/> которые служат годами <br/> и упрощают эксплуатацию</p>
                </div>
            </div>
            <div class="about-self-additional-grid__four">
                <div>
                    <p class="about-self-bold-p">Реализуемость <br/> проекта</p>
                    <p>Проектирую то, <br/> что реально построить<br/> в срок и в бюджет</p>
                </div>
                <div>
                    <svg width="99" height="136" viewBox="0 0 99 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.84 95.704L63.4 0.0239959H84.008V93.68H98.36V115.576H84.008V136H59.536V115.576H0.84V95.704ZM59.536 93.68V41.24L25.68 93.68H59.536Z" fill="#E5E5E5"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="router.currentRoute.value.fullPath !== '/'" class="about-self-additional-container-mobile">
        <h1>ПРИНЦИПЫ МОЕЙ РАБОТЫ</h1>

        <div class="about-self-additional-grid-mobile">
            <div class="about-self-additional-grid-item-mobile">
                <div class="about-self-additional-grid-item-text-mobile">
                    <svg width="23" height="74" viewBox="0 0 23 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.3 12.6H1.07288e-06V0.0999978H22.6V74H9.3V12.6Z" fill="#E5E5E5"/>
                    </svg>
                </div>

                <div class="about-self-additional-grid-item-text-mobile">
                    <svg width="49" height="76" viewBox="0 0 49 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.6 64.3L26.9 39.4C29.9667 36.5333 32.1333 33.9667 33.4 31.7C34.7333 29.3667 35.4 27 35.4 24.6C35.4 22.9333 35.1333 21.4 34.6 20C34.0667 18.6 33.3 17.4 32.3 16.4C31.3667 15.3333 30.2333 14.5 28.9 13.9C27.6333 13.3 26.2333 13 24.7 13C21.2333 13 18.4333 14.3333 16.3 17C14.2333 19.6667 13.2 23.2 13.2 27.6H0.1C0.1 23.4667 0.666667 19.7667 1.8 16.5C2.93333 13.1667 4.56667 10.3667 6.7 8.1C8.83333 5.76666 11.4 3.96666 14.4 2.7C17.4667 1.43333 20.8667 0.799997 24.6 0.799997C28.0667 0.799997 31.2667 1.4 34.2 2.6C37.1333 3.8 39.6667 5.5 41.8 7.7C44 9.83333 45.7 12.3667 46.9 15.3C48.1 18.2333 48.7 21.4 48.7 24.8C48.7 27.0667 48.4667 29.2 48 31.2C47.5333 33.1333 46.7333 35.1 45.6 37.1C44.4667 39.0333 43 41.0333 41.2 43.1C39.4 45.1 37.1333 47.3333 34.4 49.8L19.3 63.5H48.4V76H0.6V64.3Z" fill="#E5E5E5"/>
                    </svg>
                </div>

                <div class="about-self-additional-grid-item-text-mobile">
                    <svg width="51" height="78" viewBox="0 0 51 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1 53.6C14.5667 57.2 15.8667 60.0333 18 62.1C20.1333 64.1 22.8333 65.1 26.1 65.1C29.5 65.1 32.2667 63.9667 34.4 61.7C36.6 59.3667 37.7 56.4 37.7 52.8C37.7 49 36.3667 46 33.7 43.8C31.1 41.5333 27.6 40.4 23.2 40.4H21V27.6H22.1C25.4333 27.6 27.9667 26.9667 29.7 25.7C31.5 24.3667 32.4 22.4667 32.4 20C32.4 17.9333 31.8 16.2667 30.6 15C29.4 13.6667 27.8333 13 25.9 13C22.3667 13 20.3 15.2333 19.7 19.7H6.2C6.66667 13.8333 8.63333 9.23333 12.1 5.9C15.5667 2.5 20.1333 0.799997 25.8 0.799997C28.6667 0.799997 31.3 1.3 33.7 2.3C36.1667 3.29999 38.2667 4.69999 40 6.49999C41.8 8.23333 43.2 10.3333 44.2 12.8C45.2 15.2 45.7 17.8333 45.7 20.7C45.7 23.5667 45.2 26.0333 44.2 28.1C43.2 30.1 41.6333 31.8667 39.5 33.4C47.1667 36.8667 51 43.2333 51 52.5C51 56.1 50.3667 59.4333 49.1 62.5C47.9 65.5 46.2 68.1 44 70.3C41.8 72.5 39.1667 74.2333 36.1 75.5C33.1 76.7 29.8 77.3 26.2 77.3C22.6667 77.3 19.3667 76.7333 16.3 75.6C13.3 74.4 10.6667 72.7667 8.4 70.7C6.2 68.5667 4.4 66.0667 3 63.2C1.66667 60.2667 0.9 57.0667 0.7 53.6H14.1Z" fill="#E5E5E5"/>
                    </svg>

                </div>

                <div class="about-self-additional-grid-item-text-mobile">
                    <svg width="54" height="74" viewBox="0 0 54 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 52.1L34.5 0.0999978H45.7V51H53.5V62.9H45.7V74H32.4V62.9H0.5V52.1ZM32.4 51V22.5L14 51H32.4Z" fill="#E5E5E5"/>
                    </svg>
                </div>
            </div>

            <div>
                <div class="about-self-additional-grid-item-text-mobile">
                    <p class="about-self-bold-p">Комфорт и удобство</p>
                    <p>Пространство должно быть <br/> эргономичным и удобным <br/> для жизни каждый день</p>
                </div>
                <div class="about-self-additional-grid-item-text-mobile">
                    <p class="about-self-bold-p">Эстетика <br/> и индивидуальность</p>
                    <p>Дом отражает личность <br/>хозяина, а не просто следует <br/>трендам</p>
                </div>
                <div class="about-self-additional-grid-item-text-mobile">
                    <p class="about-self-bold-p">Практичность</p>
                    <p>Использую решения, <br/> которые служат годами <br/> и упрощают эксплуатацию</p>
                </div>
                <div class="about-self-additional-grid-item-text-mobile">
                    <p class="about-self-bold-p">Реализуемость <br/> проекта</p>
                    <p>Проектирую то, <br/> что реально построить<br/> в срок и в бюджет</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PereDesign from '../icons/PereDesign.vue'
import PereDesignBlack from '../icons/PereDesignBlack.vue'
import MainStats from './MainStats.vue';
import AboutSelfMobile from './AboutSelfMobile.vue';
import FillBtn from '../../components/ui/FillBtn.vue'

import { useWindowSize } from '@/composables/useWindowSize.js'
import { useRouter } from 'vue-router'

const router = useRouter();
const { isDesktop, height } = useWindowSize()

</script>

<style scoped>
img{
    object-fit: cover;
    max-width: 403px;
}
h1{
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 100%;
}
p {
    font-size: 20px;
    margin-bottom: 16px;
    line-height: 100%;
}

.about-self-bold-p {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 25px;
}

.about-self-container{
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две равные колонки */
    grid-gap: 10px; /* Отступы между колонками */
    margin-top: 80px;
    margin-bottom: 80px;
    color: #000000;
    position: relative;
}
.about-self-additional-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15rem 32rem;
}

.about-self-additional-grid__one {
    border-top: 1px solid black;
    border-left: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
}
.about-self-additional-grid__two {
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: flex;
    justify-content: space-between;

    padding-top: 32px;
    padding-right: 32px;
}
.about-self-additional-grid__three {
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
}
.about-self-additional-grid__four {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding-bottom: 32px;
    padding-right: 32px;
}

.pere-icon {
    position: absolute;
    bottom: 0;
    right: 0;
}

.about-self-additional-container {
    max-width: 1520px;
    margin: 0 auto;
}

.main-page-projects-btn {
    display: flex;
    margin-bottom: 80px;
}

@media (max-width: 768px) {
    h1 {
        font-size: 24px;
    }

    p {
        margin-bottom: 8px;
    }

    .about-self-additional-container-mobile {
        padding: 16px;
    }

    .about-self-additional-grid-mobile {
        display: grid;
        grid-template-columns: 2fr 10fr;
        gap: 25px;
    }

    .about-self-additional-grid-item-mobile {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-self-additional-grid-item-text-mobile {
        height: 133px;
    }

}
</style>
