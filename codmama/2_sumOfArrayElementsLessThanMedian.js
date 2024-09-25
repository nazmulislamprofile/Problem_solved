function main (input) {
    let data=input.split(/\s+/);
    let size=parseInt(data[0]);
    let array=data.slice(1).map(Number);
    let sortArray=array.sort((a,b)=>a-b);
   // console.log(sortArray)
    let median=findMedianNumber(sortArray);
   // console.log(median);
    let lesThanMedianArray= sortArray.filter((item)=>{
        return item<median
    })
   
    let result=lesThanMedianArray.reduce((sum,acc)=>sum+acc,0);
    console.log(result);
    




    //median number find function
    function findMedianNumber(sortArray)
    {
        let len=sortArray.length;
        if(size%2===0){
            return (sortArray[len / 2 - 1] + sortArray[len / 2]) / 2;
           
        }
        else{

            return sortArray[Math.floor(len/2)];
            
        }

    }
    
    
}
let input = "4\n5 2 7 1";
main(input);
