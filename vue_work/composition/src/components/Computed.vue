<template>
    <input type="text" v-model="firstname">
    <input type="text" v-model="lastname">
    <div>{{ fullname }}</div>
    <hr>
    <input type="text" v-model="name.firstname">
    <input type="text" v-model="name.lastname">
    <div>{{ fullname2 }}</div>
    <hr>
    <input type="text" v-model="reactivename.firstname">
    <input type="text" v-model="reactivename.lastname">
    <div>{{ fullname3 }}</div>
</template>
<script setup>
import {ref, computed, reactive} from 'vue'
let firstname = ref('hong')
let lastname = ref('jung')

let fullname = computed(()=> {
    return firstname.value + lastname.value
})

let name = ref({firstname : '길동', lastname : '홍'})
let fullname2 = computed(() => {
    return name.value.lastname + name.value.firstname
})

let reactivename = reactive({firstname: '길동', lastname: '홍'})
let fullname3 = computed(() => {
    return reactivename.lastname + reactivename.firstname
})

</script>
