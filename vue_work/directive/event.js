const template = /*html*/`
<select v-model="selValue" class="form-control mb-3" v-on:change="changeSelect">
    <option value="02" v-for="c in citys" :value="c.value">{{c.text}}</option>
</select>
<input @keyup.down="doSomeing" v-model="firstName">
<input @click.ctrl="doSomeing" v-model="lastName">
<div>watch :{{fullName}}</div>
<div>computed :{{computedFullName}}</div>
`;

export default{
    template,
    data(){ return {
        selValue : '21',
        citys : [{value: '02', text: '서울'},
                 {value: '21', text: '부산'},
                 {value: '064', text: '제주'}
        ],
        firstName : '길동',
        lastName : '홍',
        fullName : ''
    }},
    watch :{
        firstName(){this.fullName = this.firstName + " "+ this.lastName},
        lastName(){this.fullName = this.firstName + " " + this.lastName},
    },
    computed :{
        computedFullName(){return this.fullName = this.firstName + " " + this.lastName}
    },
    methods : {
        changeSelect(){
            const result = this.citys.find(a => this.selValue == a.value)
            alert(this.selValue)
        },
        doSomeing(){
            alert("확인")
        }
    }
}