/*
 객체 구조분해
*/

let emp = {empName : 'scott', dept: '개발', hireDate: '2019-11-01'}
//let empName = emp.empName
let {empName, dept} = emp;
console.log(empName, dept)

// 객체 복사
let emp1 = {...emp, dept, hireDate: '2015'};
emp.empName = 'kim';
console.log(emp1, emp)

// 배열 구조분해
let arr = ['a','b','c']
let [second] = arr
console.log(second)