function scream_even_numbers(n){
    let word = ''
    for (n; n > 0; n --){
        if (n % 2 === 0){
            word = 'A' + word
        }
        else{
            word = 'a' + word
        }
    }
    return word
}

test = scream_even_numbers(10)
console.log(test)