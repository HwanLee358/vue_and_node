<template>
    <div>
        <PageTitle :title="mytitle"/>
        <PageTitle title="부모한테 받은 타이틀"></PageTitle>
        <page-title></page-title>
        <h1>중첩 컴포넌트</h1>
        <blog-comp :id="blog.id" title="blog.title" />
        <BlogComp />
    </div>
</template>
<script>
    import PageTitle from "../components/PageTitle";
    import BlogComp from "../components/BlogComp";
    export default {
        components: {PageTitle,BlogComp},
        data(){ return {
            mytitle : '동적 타이틀',
            blog: {id:3, title: 'post1'}
        }; },
        created(){},
        methods: {},
    }
</script>
<style></style>