/*
Either Not Both
Write a function eitherNotBoth that takes in a number and returns true if the the number is divisible by either 3 or 5, but not both. Return false otherwise.
*/

function eitherNotBoth(num) {
    return (num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)
}

console.log(eitherNotBoth(20))