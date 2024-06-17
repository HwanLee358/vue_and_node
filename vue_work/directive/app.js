import headers from './header.js';
import footers from './footer.js';
import router from './router.js';


const template = /*html*/`<div>
                            <headers />
                            <RouterView />
                            <footers />
                          </div>`
//vue 인스턴스 생성
const component ={
    template,
    // name : "모듈연승", //생략가능
    components : {headers, footers},
    data(){return {name : '홍길동' , msg: '안녕하세요~~'}},
    methods : {
        funca(){},
    } ,
    created(){},
    mounted(){},
    computed : {
        fullname(){},
    }
}
const {createApp} = Vue
createApp(component).use(router).mount('#app')