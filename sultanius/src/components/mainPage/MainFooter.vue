<template>
    <div class="main-footer-container">
        <div class="main-footer-container-grid">
            <div class="main-footer-container-grid__one grid-block--bottom" >
                <h1 class="hide-on-dekstop">КОНТАКТЫ</h1>

                <PereDesign class="main-footer-pere-icon" style="margin-bottom: 24px;"/>

                <p class="main-footer-telephone">
                    +7 (999) 555-33-22
                </p>

                <p class="main-footer-email">
                    info@pere.design
                </p>

                <div style="font-size: 15px;">
                    © 2025 | ООО "Pere.Design" |
                    <br class="hide-on-dekstop">
                    Политика конфиденциальности
                </div>
            </div>

            <div class="grid-block--top">
                <h1>ОБСУДИМ ПРОЕКТ? </h1>

                <form>
                    <div class="form-inputs">
                        <input class="custom-input" placeholder="Имя*" required type="text" name="input" v-model="form.name" />
                        <input class="custom-input" placeholder="Email*" required type="email" name="input" v-model="form.email" />
                        <input class="custom-input" placeholder="Телефон" required type="phone" name="input" v-model="form.phone" />
                        <input class="custom-input" placeholder="Доп.информация" required type="text" name="input" v-model="form.comment" />
                    </div>

<!--                    <div>-->
<!--                        <input class="custom-input" type="checkbox" id="checkbox" placeholder="Доп.информация" required name="input" v-model="form.comment" />-->
<!--                        <label for="checkbox">Я даю согласие на обработку персональных данных</label>-->
<!--                    </div>-->
                    <FillBtn class="main-footer-btn-submit">ОТПРАВИТЬ</FillBtn>
                </form>

            </div>
        </div>

    </div>
</template>

<script>
import PereDesign from '../icons/PereDesign.vue'
import FillBtn from '../../components/ui/FillBtn.vue'

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
.form-inputs{
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две равные колонки */
    grid-gap: 32px; /* Отступы между колонками */
    margin-bottom: 32px;
}
p{
    font-size: 20px;
    line-height: 100%;
}
.main-footer-container {
    background-color: #1A1A1A;
    color: white;
    margin-top: 80px;
}

.main-footer-container-grid {
    max-width: 1520px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две равные колонки */
    grid-gap: 16px; /* Отступы между колонками */
    padding-bottom: 60px;
}
.main-footer-container-grid__one {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-top: 200px;
}

.main-footer-btn-submit {
    /*style="width: 100%; border: 1px solid white; display: block; text-align: center"*/
    border: 1px solid white;
    display: block;
    text-align: center;
    padding: 12px;
    font-size: 12px;
}

.main-footer-telephone {
    margin-bottom: 12px;
}
.main-footer-email {
    margin-bottom: 60px;
}
.main-footer-pere-icon {
    margin-bottom: 24px;
}

@media (max-width: 768px) {
    h1 {
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 24px;
    }

    .main-footer-container {
        margin-top: 0;
        padding-top: 24px;
    }
    .main-footer-container-grid {
        grid-template-columns: 1fr;
        padding: 16px;
    }
    .grid-block--top {
        order: 1;
    }
    .grid-block--bottom {
        order: 2;
    }

    .form-inputs {
        grid-template-columns: 1fr;
    }

    .main-footer-container-grid__one {
        padding-top: 30px;
    }


    .main-footer-pere-icon {
        margin-left: -10px;
    }
    .main-footer-telephone {
        margin-bottom: 12px;
    }
    .main-footer-email {
        margin-bottom: 24px;
    }

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
