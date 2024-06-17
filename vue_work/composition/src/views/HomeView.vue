<template>
  <div class="home">
    <LifeCycle></LifeCycle>
    <br>
    <Reactive></Reactive>
    <br>
    <Computed></Computed>
    <br>
    <Watch></Watch>
    <br>
    <Watch2></Watch2>
    <br>
  </div>
  <div>
    <Props />
    <Props title="props전달" subject="subject전달"></Props>
    <br>
    <Provides></Provides>
  </div>
</template>

<script>
// @ is an alias to /src
import LifeCycle from '../components/LifeCycle.vue'
import Reactive from '../components/Reactive.vue'
import Computed from '../components/Computed.vue'
import Watch from '../components/Watch.vue'
import Watch2 from '../components/Watch2.vue'

import Props from '../components/Props.vue'
import { provide } from 'vue'
import Provides from '../components/Provide.vue'

export default {
  name: 'HomeView',
  components: {
    LifeCycle,Reactive,Computed, Watch, Watch2,
    Props, Provides,           
  },
  setup(){
    provide('title', 'Vue.js 프로젝트')
  }
}
</script>
