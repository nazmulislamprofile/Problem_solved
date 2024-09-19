function averageArray(array) {
    let sum= array.reduce((acc,val)=>acc+val,0)
    return avg=sum/array.length;
    
}

let array=[1,2,3,4,5,234,23,22,745,42];
let result=averageArray(array);
console.log(result);