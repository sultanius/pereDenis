<template>
    <div>
        <div class="header-projects">
            <div class="first-main-mobile__btn-navigation" @click="toggleMenu">
                <div class="first-main-mobile__btn-navigation__line"></div>
                <div class="first-main-mobile__btn-navigation__line"></div>
                <div class="first-main-mobile__btn-navigation__line"></div>
            </div>
            <div class="hide-on-mobile">
                <PereDesignBlack  />
            </div>
            <FillBtn class="hide-on-mobile" @click="goToMainFooter"> Написать мне </FillBtn>
        </div>
        <MobileMenuNavigation :menuOpen="menuActive" @close="menuActive = false"/>
    </div>
</template>

<script setup>
import BurgerBtn from '../../components/ui/BurgerBtn.vue'
import FillBtn from '../../components/ui/FillBtn.vue'
import PereDesign from '../icons/PereDesign.vue'
import PereDesignBlack from '../icons/PereDesignBlack.vue'

import { ref,  } from 'vue'
import { useNavigate } from '@/composables/useNavigate.js'
import { goToMainFooter } from '@/composables/helper.js'
const { navigateTo } = useNavigate();

import MobileMenuNavigation from '../../components/mainPage/MobileMenuNavigation.vue';


const menuActive = ref();

const toggleMenu = () => {
    console.log(34)
    menuActive.value = !menuActive.value;
}


</script>

<style scoped>
.header-projects{
    display: flex;
    justify-content: space-between;
    max-width: 1520px;
    margin: 0 auto;
    padding: 48px var(--page-side-padding);
    color: white;
}

.first-main-mobile__btn-navigation {
    z-index: 1;
    top: 80px;
    left: 16px;
    width: 56px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    cursor: pointer;
}
.first-main-mobile__btn-navigation__line {
    width: 24px;
    height: 1px;
    border-radius: 24px;
    background-color: black;
}

@media (max-width: 768px) {
    .header-projects{
        padding: 32px 16px;
    }
}

</style>
