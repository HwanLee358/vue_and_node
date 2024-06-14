<template>
    <div id="container">
        <h3>글쓰기</h3>
        <div class="input-group mb-3">
            <span class="input-group-text">제목</span>
            <input type="text" v-model="addboard.title" class="form-control" placeholder="name" aria-label="title" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">작성자</span>
            <input type="text" v-model="addboard.writer" class="form-control" placeholder="writer" aria-label="writer" aria-describedby="basic-addon1">
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control" v-model="addboard.content" placeholder="Leave a comment here" style="height:200px"></textarea>
        </div>
        <div class="mb-3">
            <input class="form-control" type="file" id="formFile" ref="file" v-on:change="onChangeFileUpload()">
        </div>
        <button @click="addHandler" class="btn btn-primary">등록</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){ 
        return {
            addboard: {},
            file: '',
        }; 
    },
    created(){},
    methods: {
        addHandler(){
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post('/api/board', formData, {headers : { 'Content-Type' : 'multipart/form-data'}})
            .then(function(data){
                console.log(data.data)
            })
            .catch(function(){
                console.log('FAILURE!!');
            })
        },
        onChangeFileUpload(){
            this.file = this.$refs.file.files[0];
        },
    }
}
</script>
<style></style>