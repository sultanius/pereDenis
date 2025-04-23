<template>
    <div class="container">
        <div class="container-grid">
            <div>

                <div>
                    +7 (999) 555-33-22
                </div>

                <div>
                    info@pere.design
                </div>

                <div>© 2025 | ООО "Pere.Design" | Политика конфиденциальности</div>
            </div>

            <div>
                <h1>Обсудим проект? </h1>

                    <input type="text" name="input" value="Type here" />
                    <input type="text" name="input" value="Type here" />
                    <input type="text" name="input" value="Type here" />
                    <input type="text" name="input" value="Type here" />
            </div>
        </div>

    </div>
</template>

<style scoped>
.container {
    background-color: #1A1A1A;
    height: 509px;
    color: white;
}

.container-grid {
    border: 1px solid white;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две равные колонки */
    grid-gap: 10px; /* Отступы между колонками */
    margin: 120px;
}
</style>
