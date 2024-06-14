<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-md-12 col-lg-7 border">
                <h3>고객관리</h3>
                <select v-model="pageUnit" @change="goPage(1)">
                    <option>2</option>
                    <option>5</option>
                    <option>10</option>
                </select>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">순번</th>
                            <th scope="col">이름</th>
                            <th scope="col">이메일</th>
                            <th scope="col">핸드폰</th>
                            <th scope="col">주소</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="emp of customers" @click="modifyHandler(emp)">
                            <th scope="row">{{ emp.id }}</th>
                            <td>{{ emp.name }}</td>
                            <td>{{ emp.email }}</td>
                            <td>{{ emp.phone }}</td>
                            <td>{{ emp.address }}</td>
                            <td><button class="btn btn-secondary" @click="delHandler(emp.id)">삭제</button></td>
                        </tr>
                    </tbody>
                </table>
                <page-component v-bind="page" @go-page="goPage"/>
            </div>
            <div class="col-md-12 col-lg-5 border">
                <CustomerForm></CustomerForm>
                <hr>
                <CustomerModi ref="customerForm"></CustomerModi>
            </div>
        </div>
    </div>
</template>
<script>
import PageMixin from "../mixin.js";

import axios from 'axios';
import PageComponent from '@/components/Pagecomponent.vue'
import CustomerForm from '@/views/CustomerForm.vue'
import CustomerModi from '@/views/CustomerModi.vue'

export default {
    mixins : [PageMixin],
    components: {
        PageComponent,CustomerForm, CustomerModi
    },
    data(){ 
        return {
            customers: [],
            page: {},
            pageUnit: 10,
            cPage: 1,
        }; 
    },
    created(){
        this.goPage(1); 
    },
    methods: {
        async goPage(page){
            const url = `/api/customer?pageUnit=${this.pageUnit}&page=${page}`;
            await axios.get(url)
            .then(result =>{
                this.customers = result.data.list;
                this.cPage = page;
                this.page = this.pageCalc(page, result.data.count[0].cnt, 5, this.pageUnit)
            })          
        },
        async delHandler(index){
            if(confirm('삭제하시겠습니까?')){
                await axios.delete(`/api/customer/${index}`, index);
                this.goPage(this.cPage);
            }
        },
        async modifyHandler(customer){
            this.$refs.customerForm.customer = {...customer};
        },
    }
}
</script>
<style>
</style>