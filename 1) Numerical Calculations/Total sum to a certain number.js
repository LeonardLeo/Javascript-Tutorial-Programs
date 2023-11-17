function maxSum(num){
   let sum = 0
   for (let i = 0; i <= num; i++){
        sum = sum + i
   } 
   return sum
}

test = maxSum(30)
console.log(test)