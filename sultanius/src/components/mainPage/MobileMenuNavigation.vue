<template>
    <div class="full-screen-menu" :class="{ active: menuOpen }">

        <div class="mobile-menu__header" >
            <PereDesign :width="132" :height="41"/>


<!--            иконка крестика-->
            <div style="margin-top: 6px; margin-right: 12px; cursor: pointer;">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"  @click="toggleMenu">
                    <path d="M19.7863 19.7853L1.21484 1.21387M19.7863 1.21387L1.21484 19.7853" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>


        <WhiteTransparentBtn style="margin-bottom: 48px"> НАПИСАТЬ НАМ </WhiteTransparentBtn>

        <div class="menu-content">
            <nav>
                <ul>
                    <li @click="goToPage('/')">ГЛАВНАЯ</li>
                    <li @click="goToPage('/about-self')">ОБО МНЕ</li>
                    <li @click="goToPage('/projects')">ПРОЕКТЫ</li>
                    <li @click="goToPage('/')">СТОИМОСТЬ</li>
                    <li @click="goToPage('/contacts')">КОНТАКТЫ</li>
                </ul>
            </nav>

            <div >
                <div>+7 (921) 443 23 10</div>
                <div class="mobile-menu__contact-icons">
                    <div>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0001 0.562683C6.57196 0.570808 0.556336 6.59893 0.564461 14.0271C0.566361 16.2812 1.13528 18.4986 2.21884 20.4752L1.18759 26.8127L7.52509 25.7814C14.0313 29.3502 22.2001 26.9696 25.7688 20.4627C29.3376 13.9558 26.9576 5.78831 20.4507 2.21893C18.4737 1.13442 16.255 0.564843 14.0001 0.562683ZM7.28134 6.66893H10.9438C11.1096 6.66893 11.2686 6.73478 11.3858 6.85199C11.503 6.9692 11.5688 7.12817 11.5688 7.29393C11.5483 8.12743 11.6884 8.95709 11.9813 9.73768C12.1075 9.99899 12.1352 10.297 12.0595 10.5771C11.9837 10.8572 11.8095 11.1006 11.5688 11.2627L10.2876 12.5127C10.8557 13.6221 11.5985 14.6329 12.4876 15.5064C13.354 16.41 14.3608 17.1677 15.4688 17.7502L16.7188 16.4689C17.3438 15.8439 17.6313 15.8439 18.2438 16.0564C19.0244 16.3494 19.8541 16.4894 20.6876 16.4689C20.8509 16.4765 21.0055 16.5448 21.1211 16.6604C21.2367 16.776 21.305 16.9306 21.3126 17.0939V20.7564C21.305 20.9197 21.2367 21.0743 21.1211 21.1899C21.0055 21.3055 20.8509 21.3738 20.6876 21.3814C17.0111 21.2213 13.5261 19.6971 10.9126 17.1064C8.31782 14.4957 6.79298 11.009 6.63759 7.33143C6.63907 7.1594 6.7068 6.99456 6.8267 6.87117C6.94659 6.74779 7.10942 6.67536 7.28134 6.66893Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <svg style="margin-top: 2px" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.625 17L10.25 21.375L7.75 13.25L0.875 10.75L27.125 0.75L22.125 23.25L12.75 14.5L17.75 10.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="mobile-menu__translate">
                <div class="mobile-menu__translate-item">ru</div>
                <div class="mobile-menu__translate-item-br"></div>
                <div class="mobile-menu__translate-item" style="color: #636363; border-color: #636363">en</div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

import WhiteTransparentBtn from '../../components/ui/WhiteTransparentBtn.vue'
import PereDesign from '../icons/PereDesign.vue'
import { useNavigate } from '@/composables/useNavigate.js'


const props = defineProps({
    menuOpen: String,
})

const emit = defineEmits()

const { navigateTo } = useNavigate()


const toggleMenu = () => {
    console.log(1)
    emit('close')
};

const goToPage = (to) => {
    navigateTo(to);
    toggleMenu();
}

</script>

<style scoped>
li,p {
    font-size: 16px;
    font-weight: 400;
}
.full-screen-menu {
    display: none; /* Скрыто по умолчанию */
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    z-index: 1000; /* Чтобы меню было поверх других элементов */
    padding: 16px;
}

.full-screen-menu.active {
    display: flex; /* Показываем меню при активном состоянии */
}

.menu-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* Центрируем элементы внутри меню */
    gap: 32px;
}

nav {
    margin-bottom: 20px; /* Отступ для кнопки */
}

ul {
    list-style: none; /* Убираем маркеры списка */
    padding: 0;
}

li {
    margin: 10px 0; /* Отступы между пунктами меню */
    text-align: center;
    cursor: pointer;
}

.mobile-menu__header {
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.mobile-menu__contact-icons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
}
.mobile-menu__translate {
    display: flex;
    gap: 6px;
    justify-content: center;
}
.mobile-menu__translate-item {
    width: 44px;
    height: 36px;
    border: 1px solid white;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 100%;
    cursor: pointer;
}
.mobile-menu__translate-item-br {
    height: 36px;
    width: 1px;
    background-color: white;
}
</style>
