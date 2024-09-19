function findIndex(array, element) {
   return  array.indexOf(element);
 
}

let array=[1,2,3,4,5,234,23,22,745,42];
let element=array[3];
let result=findIndex(array,element);
console.log(result);