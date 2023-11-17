function sum_of_numbers(n){
    let sum = 0
    for (n; n > 0; n--){
        sum += n
    }
    return sum
}

console.log("Sum of numbers:", sum_of_numbers(5))
