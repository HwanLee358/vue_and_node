<template>
  <div class="home">
    <PageTitle title="컴포넌트 예제" menuno="10"></PageTitle>
    <MenuBar :menu="['신발','상의','신발']"></MenuBar>
    <HelloWorld :user="user"/>
    <!-- 부모가 자식 컴포넌트 이벤트 직접 발생-->
    <ChildComponent ref="child_component"></ChildComponent>

    <!--자식 컴포넌트에서 부모 컴포넌트로 이벤트 발생-->
    <hr>
    <child-component4 @send-message="sendMessage"></child-component4>

    <!--이름 있는 slot-->
    <slot-modal-Layout>
      <template v-slot:header>
        <h1>팝업타이틀</h1>
      </template>
      <template v-slot:default>
        <p>팝업 컨텐츠</p>
      </template>
      <template v-slot:footer>
        <button>닫기</button>
      </template>
    </slot-modal-Layout>

    <!-- Provide -->
    <provide-inject />
    <!-- <FooterTitle>카피라이트 slot 실습 </FooterTitle>-->
    <page-component v-bind="page" @go-page="goPage"/>
    <hr>
    <!-- count : {{ count }}
    <button type="button" @click="increment">store count 증가</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import ChildComponent from '@/components/ChildComponent.vue'
import ChildComponent4 from '@/components/ChildComponent4.vue'
import SlotModalLayout from '@/components/SlotModalLayout.vue'
import ProvideInject from '@/components/ProvideInjectChild.vue'
import PageComponent from '@/components/Pagecomponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle, MenuBar, 
    ChildComponent, ChildComponent4,
    SlotModalLayout, ProvideInject,
    PageComponent
  },
  data(){
    return { 
      user: {username:'choi', msg:'hi'},
      page: {},
    }
  },
  mounted(){
    //자식 컴포넌트 이벤트 발생
    //console.log(this.$refs.child_component.$refs.btn.click())
    
    // 자식 컴포넌트 직접 호출
    this.$refs.child_component.childFunc();
    this.$refs.child_component.$refs.username.focus();
  },
  provide(){
    return { itemLength: 4};
  },
  created(){
    //fetch => total, cp
    this.page = this.pageCalc(6, 124 , 5, 10);
  },
  // computed: {
  //   count(){
  //     return this.$store.state.count;
  //   }
  // },
  methods: {
    // increment(){
    //   this.$store.commit('increment')
    // },
    goPage(page){
      console.log('parent event : ' , page);
      this.page = this.pageCalc(6, 124 , 5, 10);
    },
    sendMessage(msg){
      console.log(msg)
    },

    pageCalc(currentPage, total, pageSize = 10, pageUnit = 10) {
      let firstPage = 1;
      let lastPage =
        Math.floor(total / pageUnit) + (total % pageUnit == 0 ? 0 : 1);
      let startIdx = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
      let endIdx = startIdx + pageSize - 1;
      if (endIdx > lastPage) {
        endIdx = lastPage;
      }
      console.log(firstPage, lastPage, startIdx, endIdx);
      return {currentPage, firstPage, lastPage, startIdx, endIdx };
    }
  }
}
</script>
