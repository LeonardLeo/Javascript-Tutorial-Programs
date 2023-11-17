/*
Fizz Buzz
Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"
*/

function fizzBuzz(numbers) {
    let store = ""
    for (let i = 0; i <= numbers.length; i++){
        let a = numbers[i] % 3 === 0;
        let b = numbers[i] % 5 === 0;
        
        if (a && b){
            numbers[i] = "fizzbuzz";
            store += numbers[i];
        }
        else if (a){
            numbers[i] = "fizz";
            store += numbers[i];
        }  
        else if (b){
            numbers[i] = "buzz";
            store += numbers[i];
        } 
    }
    return store;
}

console.log(fizzBuzz([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))