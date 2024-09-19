function filterOdds(array) {
        
  return array.filter((num)=>num%2!==0);
  //return array.filter(function(num){return num%2!==0})
    
}

let array=[1,2,3,4,5,234,23,22,745,42];
let result=filterOdds(array);
console.log(result);