<template>
    <div class="main-stats-container">
        <div class="test">
            <h1 id="count1">26+</h1>
            <p>{{ t(site.stats.homesDesigned) }}</p>
        </div>

        <div class="test">
            <h1 id="count2">11+</h1>
            <p>{{ t(site.stats.inProgress) }}</p>
        </div>

        <div class="test">
            <h1 id="count3">5+</h1>
            <p>{{ t(site.stats.completed) }}</p>
        </div>

        <div class="test">
            <h1 id="count4">3</h1>
            <p>{{ t(site.stats.timeline) }}</p>
        </div>
    </div>
</template>

<script setup>
import FillBtn from '../../components/ui/FillBtn.vue'

import { onMounted } from 'vue'
import { useSiteLocale } from '@/composables/useSiteLocale'
import { site } from '@/locales/site'

const { t } = useSiteLocale()

const animateCounter = (id, target, duration) => {
    const element = document.getElementById(id);
    let start = 0;
    const increment = target / (duration / 100);
    const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(interval);
        }
        element.innerText = Math.floor(start) + (target % 1 === 0 ? '' : '+');
    }, 50);
}

onMounted(() => {
    // animateCounter('count1', 26, 2000);
    // animateCounter('count2', 11, 2000);
    // animateCounter('count3', 5, 2000);
    // animateCounter('count4', 3, 2000);
})

</script>

<style scoped>
.test {
    border-left: 1px solid #000000;
    padding-left: 16px;
    font-size: 20px;
    padding-bottom: 0;
}

h1 {
    font-size: 100px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 24px;
}

p {
    font-size: 20px;
    line-height: 100%;
    color: #656565;
}

.main-stats-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    max-width: 1520px;
    margin: 80px auto;
}
@media (max-width: 768px) {

    .main-stats-container {
        grid-template-columns: 1fr 1fr;
        padding: 16px;
        margin-top: 0;
        margin-bottom: 0;
    }

    h1 {
        font-size: 64px;
        margin-bottom: 0px;
    }

    p {
        font-size: 16px;
    }

}
</style>
