function fibonacci_sequence(n){
    if (n === 1){
      return 0
    }
    else if (n === 2){
      return 1
    }
    
    let count = 2
    let sum = 0
    let number = 0
    let next_number = 1
    while (count < n){
      count = count + 1
      
      sum = number + next_number
      
      number = next_number
      next_number = sum
      }
    return sum
  }
  
  
  const test = fibonacci_sequence(131)
  console.log(test)
  