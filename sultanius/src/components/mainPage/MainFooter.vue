<template>
    <div class="main-footer-container">
        <div class="main-footer-container-grid">
            <div class="main-footer-container-grid__one grid-block--bottom" >
                <h1 class="hide-on-dekstop">{{ t(site.footer.contacts) }}</h1>

                <PereDesign width="150" height="50" class="main-footer-pere-icon" style="margin-bottom: 24px;"/>

                <p class="main-footer-telephone">
                    +7 (921) 443 23 10
                </p>

                <p class="main-footer-email">
                    hello.pere.design@mail.ru
                </p>

                <div style="font-size: 15px;">
                    © 2025 |  "Pere.Design" |
                    <br class="hide-on-dekstop">
                    {{ t(site.footer.privacy) }}
                </div>
            </div>

            <div class="grid-block--top">
                <h1>{{ t(site.footer.discuss) }} <span style="font-family: Involve">?</span> </h1>

                <form>
                    <div class="form-inputs">
                        <input class="custom-input" :placeholder="t(site.footer.namePh)" required type="text" name="input" v-model="form.name" />
                        <input class="custom-input" :placeholder="t(site.footer.emailPh)" required type="email" name="input" v-model="form.email" />
                        <input class="custom-input" :placeholder="t(site.footer.phonePh)" required type="phone" name="input" v-model="form.phone" />
                        <input class="custom-input" :placeholder="t(site.footer.commentPh)" required type="text" name="input" v-model="form.comment" />
                    </div>

<!--                    <div>-->
<!--                        <input class="custom-input" type="checkbox" id="checkbox" placeholder="Доп.информация" required name="input" v-model="form.comment" />-->
<!--                        <label for="checkbox">Я даю согласие на обработку персональных данных</label>-->
<!--                    </div>-->
                    <FillBtn class="main-footer-btn-submit" @click="onSubmit">{{ t(site.footer.submit) }}</FillBtn>
                </form>

            </div>
        </div>

    </div>
</template>

<script>
import PereDesign from '../icons/PereDesign.vue'
import FillBtn from '../../components/ui/FillBtn.vue'

import { ref, reactive } from 'vue'
import { useSiteLocale } from '@/composables/useSiteLocale'
import { site } from '@/locales/site'

export default {
    components: { PereDesign },

    setup() {
        const { t } = useSiteLocale()

        const form = reactive({
            name: '',
            email: '',
            phone: '',
            comment: '',
        });
        const BOT_TOKEN = '8406286548:AAGkTpAbBP9Cf89dywG3BJ1YP3ycIlCuR5A';
        const CHAT_ID = 349087015;

        const onSubmit = async () => {
            const text = t(site.footer.telegramBody)
                .replaceAll('{name}', form.name)
                .replaceAll('{phone}', form.phone)
                .replaceAll('{email}', form.email)
                .replaceAll('{comment}', form.comment)

            try {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text,
                    })
                })
                alert(t(site.footer.alertOk))
            } catch (error) {
                alert(t(site.footer.alertErr))
            }
        }


        return {
            form,
            onSubmit,
            t,
            site,
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
    font-size: 1.25rem; /* 20px при базе 16px */
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
    padding-left: var(--page-side-padding);
    padding-right: var(--page-side-padding);
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


</style>
