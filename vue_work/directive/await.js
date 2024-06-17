
//비동기
function callAPI1(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(res => console.log(res))
    
    console.log("fetch 호출");
}

//동기
async function callAPI2(){
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(res => console.log(res))
    
    console.log("fetch 호출");
}

async function callAPI3(){
    let post = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                     .then(res => res.json())
    console.log(post.userId);
    console.log("fetch 호출")                 
}



callAPI1();

callAPI2();

callAPI3()