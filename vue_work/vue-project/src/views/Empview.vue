<template>
    <RouterLink to="/empForm">사원등록</RouterLink>
    <div>
        <span>employeeId</span><span>firstName</span><span>lastName</span>
    </div> 
    <div v-for="em in employees">
        <span>{{ em.employee_id}}</span>
        <span @click="gotoUpdateForm">{{ em.first_name }}</span>
        <span>{{ em.last_name }}</span>
    </div>
</template>
<script>
    import axios from "axios";
    const url = '/empSelect';
    export default {
    data(){ return {
        employees: []
    }; },
    created() {
        axios.get(url).then(json => {
            this.employees = json.data
        })
    },
    methods: {
            gotoUpdateForm(){

            }
        }
    }
    </script>
    <style>
        span{
            display: inline-block;
            width: 20%;
        }
    </style>