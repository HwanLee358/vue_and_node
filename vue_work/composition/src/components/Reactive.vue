<template>
    {{ state.nested.count }}
    {{ state.arr[0] }}
    <button @click="addCnt">클릭</button>
</template>

<script setup>
import { reactive } from 'vue'
let state = reactive({
    nested: {count: 0},
    arr: ['foo','bar']
});
const addCnt = () => state.nested.count++
</script>