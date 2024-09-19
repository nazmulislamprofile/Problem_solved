function cubeRootArray(array) {
   return array.map((num)=>Math.cbrt(num));
    
}

let array=[1,2,3,4,5,234,23,22,745,42];
let result=cubeRootArray(array);
console.log(result);