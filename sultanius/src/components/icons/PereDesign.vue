<template>
    <img :width="props.width" :height="props.height" src="../../assets/imgs/mainPage/pereMainIcon.png">
</template>

<script setup>
const props = defineProps({
    width: [String, Number],
    height: [String, Number],
})

</script>
