const template = /*html*/
`<table class="table table-striped table-hover">
    <thead><th>제품명</th><th>가격</th></thead>
    <tbody>
        <tr :key="idx" v-for="(v, idx) in prod">
            <td>{{idx}}</td>
            <td>{{v.prodNm}}</td>
            <td>{{v.price}}</td>
        </tr>
    </tbody>
 <table>
`;

export default {
    template,
    data(){
        return {
            prod: [{prodNm: '키보드', price: 4000},
                   {prodNm: '모니터', price: 7000},
                   {prodNm: '노트북', price: 10000}
            ]
        };
    },
    methods:{}
}