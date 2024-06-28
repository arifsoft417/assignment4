


function calculateSum(){
    let x=10;
    let y=20;
    let sum=x+y;
    console.log(sum);
}
calculateSum();


function isEven(num){
    return num % 2===0;
    
    
}
console.log(isEven(50)); 
console.log(isEven(49));


const numbers=[ 1,2,3,4,5,8,15];

function findMax(numbers){
var max= numbers[0];
for( var i=1; i<numbers.length; i++){
    if( max < numbers[i]){
        max= numbers[i];
    }
};

return max;
}
 var maxScore=findMax(numbers)
console.log(maxScore);

const arr = [1 , 2, 4, 9, 12, 13, 20];
function filterOddNumbers()
{const oddNumbers = arr.filter((num) => num%2 === 1);
    
   console.log( oddNumbers);
}

filterOddNumbers();
  
function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
  
  console.log(addNums([1, 2, 3]));
  

