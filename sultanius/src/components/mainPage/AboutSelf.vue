<template>
    <div class="container">
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
</template>

<script setup>
import PereDesign from '../icons/PereDesign.vue'
import PereDesignBlack from '../icons/PereDesignBlack.vue'

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

.container{
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две равные колонки */
    grid-gap: 10px; /* Отступы между колонками */
    margin-top: 80px;
    margin-bottom: 80px;
    color: #000000;
    position: relative;
}
.pere-icon {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>
