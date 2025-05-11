<template>
    <div class="header-projects">

        <div>
<!--            <BurgerBtn />-->
            <div class="menu">
                <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
                <label for="burger-checkbox" class="burger"></label>

                <div class="menu-list">

                    <div style="margin-left: 15px">
                        <PereDesign  style="padding-bottom: 100px; display: block"/>

                        <ul>
                            <li>
                                <a href="/">ГЛАВНАЯ</a>
                            </li>
                            <li @click="navigateTo('/')">ОБО МНЕ</li>
                            <li @click="navigateTo('/projects')">ПРОЕКТЫ</li>
                            <li @click="navigateTo('/')">СТОИМОСТЬ</li>
                            <li @click="navigateTo('/')">КОНТАКТЫ</li>
                        </ul>
                    </div>

                    <div>
                        <p>+7 (921) 443 23 10</p>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <PereDesignBlack  />
        </div>

        <FillBtn> Написать нам </FillBtn>
    </div>
</template>

<script setup>
import BurgerBtn from '../../components/ui/BurgerBtn.vue'
import FillBtn from '../../components/ui/FillBtn.vue'
import PereDesign from '../icons/PereDesign.vue'
import PereDesignBlack from '../icons/PereDesignBlack.vue'

</script>

<style scoped>
.header-projects{
    display: flex;
    justify-content: space-between;
    max-width: 1520px;
    margin: 0 auto;
    padding-bottom: 48px;
    padding-top: 48px;
    color: white;
}




.burger-checkbox {
    position: absolute;
    visibility: hidden;
    color: black;
}
.burger {
    position: relative;
    z-index: 1000;
    cursor: pointer;
    display: block;
    position: relative;
    border: none;
    background: transparent;
    width: 40px;
    height: 26px;
}
.burger::before,
.burger::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: black;
}
.burger::before {
    top: 0;
    box-shadow: 0 11px 0 black;
    transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
}
.burger::after {
    bottom: 0;
    transition: bottom .3s .15s, transform .3s;
}
.burger-checkbox:checked + .burger::before {
    top: 11px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0,0,0,0);
    transition: box-shadow .15s, top .3s, transform .3s .15s;
}
.burger-checkbox:checked + .burger::after {
    bottom: 11px;
    transform: rotate(-45deg);
    transition: bottom .3s, transform .3s .15s;
}

ul{
    list-style-type: none;
    font-weight: 400;
    text-align: start;
}
li{
    margin-bottom: 24px;
    cursor: pointer;
}

li:hover{
    color: #656565;
}

.menu-list {
    z-index: 999;
    font-size: 20px;
    border: 1px solid black;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #000000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    /*gap: 12px;*/
    /*margin: 0;*/
    transform: translateX(-200%);
    transition: .7s;
    width: 280px;
    padding: 35px 0 55px;

    /*display: flex; !* Можно использовать Flexbox для расположения элементов *!*/
    /*justify-content: center; !* Выравниваем по центру по горизонтали *!*/
    /*align-items: center; !* Выравниваем по центру по вертикали *!*/
    /*overflow: hidden; !* Это можно оставить, чтобы скрыть любой избыточный контент *!*/
    /*color: white; !* Цвет текста *!*/
}

.burger-checkbox:checked ~ .menu-list {
    transform: translateX(0);
}

</style>
