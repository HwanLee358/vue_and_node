const template = /*html*/`
    <div>
        userID<input v-model="post.userId">
        title <input v-model="post.title"> 
        body<input v-model="post.body"> 
        <button @click="addHandler">등록</button>
    </div>
    <input v-model=""><button>조회</button>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="po in posts">
                <td>{{po.userId}}</td>
                <td>{{po.id}}</td>
                <td>{{po.title}}</td>
                <td>{{po.body}}</td>
                <td><button @click="modifyHandler">수정</button></td>
                <td><button @click="delHandler">삭제</button></td>
            </tr>
        </tbody>
    </table>
`
const url = "https://jsonplaceholder.typicode.com/posts";
export default{
    template,
    data(){return {
        posts:[], post:{}
    }},
    created(){
        axios.get(url)
             .then(json => {
                this.posts = json.data
             })
    },
    methods :{
        addHandler(){
            axios.post()
                 .then(json => {
                    this.posts.push(json.data)
                 })
        },
        delHandler(id){
            axios.delete(`${url}/${id}`)
                  .then(json => {
                    let data = this.posts.filter( fis => fis.id != id)
                    this.posts = data;
                  })
        }
    }
}