<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pageTitle></pageTitle>
    <page-title></page-title>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle
  },
}  
</script>