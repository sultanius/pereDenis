<template>
    <div class="container">
        <div class="container-grid">
            <div class="container-grid__one" >
                <PereDesign style="margin-bottom: 24px;"/>

                <p style="margin-bottom: 6px">
                    +7 (999) 555-33-22
                </p>

                <p style="margin-bottom: 60px">
                    info@pere.design
                </p>

                <div style="font-size: 15px;">© 2025 | ООО "Pere.Design" | Политика конфиденциальности</div>
            </div>

            <div>
                <h1>ОБСУДИМ ПРОЕКТ? </h1>

                <form>
                    <input class="custom-input" placeholder="Имя*" required type="text" name="input" v-model="form.name" />
                    <input class="custom-input" placeholder="Email*" required type="email" name="input" v-model="form.email" />
                    <input class="custom-input" placeholder="Телефон" required type="phone" name="input" v-model="form.phone" />
                    <input class="custom-input" placeholder="Доп.информация" required type="text" name="input" v-model="form.comment" />
<!--                    <div>-->
<!--                        <input class="custom-input" type="checkbox" id="checkbox" placeholder="Доп.информация" required name="input" v-model="form.comment" />-->
<!--                        <label for="checkbox">Я даю согласие на обработку персональных данных</label>-->
<!--                    </div>-->
                </form>

                <button>Отправить</button>
            </div>
        </div>

    </div>
</template>

<script>
import PereDesign from '../icons/PereDesign.vue'

import { ref, reactive } from 'vue'

export default {
    components: { PereDesign },

    setup() {
        const form = reactive({
            name: '',
            email: '',
            phone: '',
            comment: '',
        });


        return {
            form,
        };
    }
};

</script>

<style scoped>
h1{
    margin-top: 32px;
    margin-bottom: 32px;
}
form{
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две равные колонки */
    grid-gap: 32px; /* Отступы между колонками */
    margin-bottom: 32px;
}
p{
    font-size: 20px;
}
.container {
    background-color: #1A1A1A;
    color: white;
}

.container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две равные колонки */
    grid-gap: 16px; /* Отступы между колонками */
    margin-right: 120px;
    margin-left: 120px;
    padding-top: 60px;
    padding-bottom: 60px;
}
.container-grid__one {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-top: 200px;
}

/* Сбрасываем все стили */
input {
    border: none;           /* Убираем рамку */
    background: none;      /* Убираем фон */
    margin: 0;             /* Убираем внешние отступы */
    outline: none;         /* Убираем обводку при фокусировке */
    font: inherit;         /* Используем шрифт родителя */
    color: inherit;        /* Используем цвет текста родителя */
    box-sizing: border-box; /* Устанавливаем box-sizing */
    padding-bottom: 8px;
}

/* Добавляем собственные стили */
.custom-input {
    border-bottom: 1px solid #ccc; /* Рамка инпута */
    width: 100%;            /* Ширина инпута */
    transition: border-color 0.3s; /* Плавный переход для изменения цвета рамки */
}

.custom-input:focus {
}
</style>
