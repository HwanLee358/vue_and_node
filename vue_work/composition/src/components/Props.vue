<template>
    {{ props.title }}
    {{ props.subject }}
</template>
<script setup>
    let props = defineProps({
        title:{
            Type: String,
            default : "타이틀초기값"
        },
        subject:{
            Type: String,
            require : true
        }
    });
</script>