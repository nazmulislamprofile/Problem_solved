function squareRootArray(array) {
  return  array.map((item)=>{
        return Math.sqrt(item);
    })
}

let array=[1,2,3,4,5];
let result=squareRootArray(array);
console.log(result);