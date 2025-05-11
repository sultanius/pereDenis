<template>
    <ProjectHeader />

    <div class="container-project-info">
        <div style="color: #656565">(фотографии проекта)</div>
        <div>
            <h1>КП РЕПИНО ПАРК</h1>
        </div>
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/nearwater-c02a9.appspot.com/o/9-key-images%2F9Keys-14.jpg?alt=media&token=76c57bc4-a668-42ab-8a69-f30a3f259569">
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
</template>

<script setup>
import ProjectHeader from './ProjectHeader.vue'

</script>

<style scoped>
h1{
    font-size: 40px;
    font-weight: 600;
}
img{
    max-width: 100%;
}

.container-project-info{
    max-width: 1520px;
    margin: 0 auto;
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
