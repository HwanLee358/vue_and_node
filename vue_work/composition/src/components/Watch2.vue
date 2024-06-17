<template>
    <div>
        <input v-model="data.num1">
        <input v-model="data.num2">
        <div>{{ data.result }}</div>
    </div>
</template>
<script setup>
import {reactive, watch} from 'vue'
let data = reactive({num1 : 0, num2 : 0, result : 0})
watch(data, (newNum,oldNum) =>{
    newNum.result = parseInt(newNum.num1) + parseInt(newNum.num2)
    console.log(data.result)
})
</script>