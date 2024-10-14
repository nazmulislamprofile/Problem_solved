
let input=1
let data=parseInt(input);
    isPrime(data);

    function isPrime(n){
        if(n<=1){
            console.log(n,"is not a prime number.");
            return;
        }


            for(let i=2;i<=Math.sqrt(data);i++){
                
                if(n%i==0){
                    console.log(n,"is not a prime number.");
                    return;
                }
            }
            console.log(n,"is a prime number.");
    }