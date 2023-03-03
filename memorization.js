let factorialMemo =[];

function factorial(num) {
    if (factorialMemo[num]) {
        return factorialMemo[num]
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result*i;        
    }
    factorialMemo[num] = result;
    return result;
}

let arr =[3,3,3,3,6,8,5,3,3,3,3];
for (let i = 0; i< arr.length; i++) { 
    console.log(factorial(arr[i]));
}









