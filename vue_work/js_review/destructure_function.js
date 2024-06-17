/*

*/

function total(num, ...arr){
    let sum = num;
    let avg = 0;
    sum = arr.reduce((acc, ele)=> acc+ele ,num)
    avg = sum / arr.length;
    return {sum, avg}
}

let result = total(1,2,3,4,5)
console.log('sum=', result[0],'avg=',result[1])
let {sum,avg}= total(10,20,30,40,50)
console.log('sum=',sum, 'avg=', avg)