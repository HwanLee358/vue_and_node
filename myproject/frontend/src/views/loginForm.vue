<template>
    <div v-if="account">
        {{ $store.state.user.userid }}
        <button type="button" @click="logoutHandler">로그아웃</button>
    </div>
    <div v-else>
        id : <input v-model="form.userid">
        pw : <input v-model="form.userpw">
        <button type="button" @click="loginHandler">로그인</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){ 
        return {
            form: {userid: '', userpw: ''},
            loginid : ''
        }; 
    },
    computed: {
      account(){
        return this.$store.state.user.userid;
      }  
    },
    created(){
        axios.get("/api/account")
        .then((result) => {
            this.$store.commit('user' ,result.data);
        })
        .catch(() => {
            console.log("로그인 필요")
        })
    },
    methods: {
        loginHandler(){
            axios.post("/api/login", this.form)
            .then((result) => {
                // this.loginid = result.data.userid
                this.$store.commit('user' ,result.data);
                alert("로그인 성공")
            })
            .catch((err) => {
                console.log(err)
                alert("로그인 실패")
            })
        },
        logoutHandler(){
            axios.post('/api/logout')
            .then(() => {
                // localStorage.setItem('vuex', null);
                this.$store.commit('user', {});
                //window.localStorage.clear();
               // window.sessionStorage.clear();
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>
<style></style>