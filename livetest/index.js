//1. Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"

function reverseString(str){
    let strArray=Array.from(str);
    return  strArray.reverse().join("");
} 

let str="hello";
let result1=reverseString(str);
console.log(result1);


//2. Write a function sumArray(arr) that takes an array of numbers and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output: 10
function sumArray(arr){
   return arr.reduce((acc,num)=>acc+num);
}

let arr=[1,2,3,4];
let result2=sumArray(arr);
console.log(result2)

//3. Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed). Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]
function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

let array = [5, 5, 5, 6, 7];
let result3 = removeDuplicates(array);
console.log(result3);



/*4.  Write a function celsiusToFahrenheit(celsius) that takes a temperature in Celsius and converts it to Fahrenheit. The formula to convert Celsius to Fahrenheit is:
Fahrenheit=(celsius * 9/5)+32 Example: console.log(celsiusToFahrenheit(25)); // Output: 77*/
function celsiusToFahrenheit(celsius){
        return (celsius * 9/5)+32;
}

let celsius=25;
let result4=celsiusToFahrenheit(celsius);
console.log(result4);

