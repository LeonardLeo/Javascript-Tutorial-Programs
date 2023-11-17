function Factorial(n){
    let sum = 1
    for (n; n > 0; n --){
        sum *= n
    }
    return sum
}

Factorial = Factorial(23)
console.log(Factorial)