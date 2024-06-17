/*
함수 매겨변수에 rest 연산자
*/

function total(num, ...arr){
    let result1 = num;
    let result2 = num;
    let result3 = num;
    //합계 계산
    for(let i =0; i<arr.length; i++)
        result1 += arr[i];
    for(i of arr)
        result2 += i
    for(i in arr)
        result3 += arr[i]
    let result4 = arr.reduce((acc, ele)=>acc+ele , num)
    console.log('합계 = ', result4)
}

total(10)
total(10,20)
total(10,20,30)