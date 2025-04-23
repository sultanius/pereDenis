<template>
    <div class="container">
        <div class="test">
            <h1>26+</h1>
            <p>Домов спроектировано</p>
        </div>

        <div class="test">
            <h1>11+</h1>
            <p>На стадии реализации</p>
        </div>

        <div class="test">
            <h1>5+</h1>
            <p>Завершенных проектов</p>
        </div>

        <div class="test">
            <h1>3</h1>
            <p>Месяца срок проекта</p>
        </div>
    </div>
</template>

<style scoped>
.test {
    border-left: 1px solid black;
    padding: 12px;
    font-size: 20px;
}

h1 {
    font-size: 100px;
}

p {
    margin-bottom: 16px;
}

.container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin: 120px;
}
</style>
