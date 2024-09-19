function findTopThreeLargest(array) {
  let newArray=array.sort((a,b)=>b-a)
  return newArray.slice(0,3);
}

let array=[20,34,21,234,234,26];
let result=findTopThreeLargest(array);
console.log(result);