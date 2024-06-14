<template>
    <div id="container">
        <h3>고객등록</h3>
        <div class="input-group mb-3">
            <span class="input-group-text">이름</span>
            <input type="text" v-model="customer.name" class="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">이메일</span>
            <input type="text" v-model="customer.email" class="form-control" placeholder="email" aria-label="Useremail" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">핸드폰</span>
            <input type="text" v-model="customer.phone" class="form-control" placeholder="phone" aria-label="Userphone" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">주소</span>
            <input type="text" v-model="customer.address" class="form-control" placeholder="address" aria-label="Useraddress" aria-describedby="basic-addon1">
        </div>
        <button @click="addHandler" class="btn btn-primary">등록</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){ return {
        customer: {}
    }; },
    created(){},
    methods: {
        async addHandler(){
            // if(valCheck()){
            // }
            await axios.post("/api/customer", this.customer)
            .then(result=>{
                this.$emit('go-page',1);
            })
        },
        // valCheck(){
        //     if(!this.customer.name){
        //         alert("이름 입력")
        //         return false;
        //     }else if(!this.customer.email){
        //         alert("이메일 입력")
        //         return false;
        //     }

        //     return true;
        // },
    }
}
</script>
<style>
</style>