function doubleElements(array) {
  return array.map((num)=>{
   return num*2;
   }) 
    
}

let array=[1,2,3,4,5,234,23,22,745,42];
let result=doubleElements(array);
console.log(result);