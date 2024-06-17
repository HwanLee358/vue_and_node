let fruits = ["Banana","오렌지","Apple","망고"]
// fruits.sort((a,b)=> b.length - a.length )
fruits.sort((a,b)=>{
    if(a > b) return 1;
    else if( a==b) return 0;
    else return -1;
})
console.log(fruits)

//객체배열 정렬
let arrEmp = [
    {empName : 'scott', dept: '개발', hireDate: '2019-11-01', score : 90},
    {empName : 'hong', dept: '기획', hireDate: '2018-01-21', score : 95},
    {empName : 'choi', dept: '총무', hireDate: '2016-08-17', score : 100}
]

arrEmp.sort((a,b)=>{
    if(a.empName > b.empName) return 1;
    else if(a.empName == b.empName) return 0;
    else return -1;
})
console.log(arrEmp)

// score (숫자)
arrEmp.sort((a,b)=>{
    b.score - a.score
})
console.log(arrEmp)

// 필터
let result = arrEmp.filter( emp => emp.dept != '개발')
console.log('개발부서',result)

let result2 = arrEmp.filter( e => e.score > 95)
console.log('점수', result2)