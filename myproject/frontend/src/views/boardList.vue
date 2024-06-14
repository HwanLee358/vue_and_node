<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-md-12">
                <h3>게시판</h3>
                <select v-model="pageUnit" @change="goPage(1)">
                    <option>2</option>
                    <option>5</option>
                    <option>10</option>
                </select>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">순번</th>
                            <th scope="col">제목</th>
                            <th scope="col">작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list of boardList">
                            <th scope="row">{{ list.no }}</th>
                            <td>{{ list.title }}</td>
                            <td>{{ list.writer }}</td>
                        </tr>
                    </tbody>
                </table>
                <page-component v-bind="page" @go-page="goPage"/>
                <router-link to="/boardForm"><button>글쓰기</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import PageMixin from "../mixin.js";
import axios from 'axios';
import PageComponent from '@/components/Pagecomponent.vue'
export default {
    mixins : [PageMixin],
    components: {
        PageComponent
    },
    data(){ 
        return {
            boardList: [],
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
            const url = `/api/board?pageUnit=${this.pageUnit}&page=${page}`;
            await axios.get(url)
            .then(result =>{
                this.boardList = result.data.list;
                this.cPage = page;
                this.page = this.pageCalc(page, result.data.count[0].cnt, 5, this.pageUnit)
            })          
        },
    }
}
</script>
<style></style>