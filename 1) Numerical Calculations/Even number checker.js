function iseven(n){
    if (n === 0){
        return 'Zero is neither an even or odd number'
    }
    else{
        let checker = (n % 2) === 0;
        if (checker){
            return n + " is Even"
        }
        else{
            return n + " is Odd";
        }
    }
}

// OR

/*
function isEven(num) {
    if (num === 0) {
        return 'Zero is neither an even or odd number'
    }
    else {
        let checker = (num % 2) === 0;
        if (checker) {
            return checker
        }
        else {
            return checker;
        }
    }
}
*/


test = iseven(-28)
console.log(test)