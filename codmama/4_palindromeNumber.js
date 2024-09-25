function main(input) {
    let num = parseInt(input);  // Example input: 152
    let temp = num;             // Copy of the number for manipulation
    let rev = 0;                // Variable to store the reversed number
    
    while (temp > 0) {
        let lastDigit = temp % 10;  // Extract the last digit
        rev = rev * 10 + lastDigit; // Build the reversed number
        temp = parseInt(temp / 10); // Remove the last digit from temp
    }
    
    if(rev===num){
        console.log(`${num}`,"is a palindrome number");
    }
    else{
         console.log(`${num}`,"is not a palindrome number");
    }
}
let input=123;
main(input);