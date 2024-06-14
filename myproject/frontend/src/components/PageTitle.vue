<template>
    <div>{{menuno}} : {{title}}</div>
    <!-- <h3>store count {{ this.$store.state.count }}</h3> -->
</template>
<script>
export default {
    props: {
        'title': {
            type: String,
            default: '페이지 제목입니다'
        },
        'menuno': {
            type: Number,
            default: 1
        },
    },
    data(){ return {}; },
    created(){},
    methods: {}
}
</script>
<style></style>