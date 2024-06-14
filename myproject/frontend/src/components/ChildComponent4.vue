<template>
    <button @click="sendMessage">클릭</button>
</template>
<script>
export default {
    data(){ return { msg: '부모에게 이벤트 전달' } },
    created(){},
    methods: {
        sendMessage(){
            this.$emit('send-message', this.msg)
        }
    },
    mounted(){
        //this.$emit('send-message', this.msg)
    }
}
</script>
<style></style>