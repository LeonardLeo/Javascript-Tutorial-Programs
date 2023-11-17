/*
Half Value
Your goal in this challenge will be to halve every number in the array.

For odd numbers, round up!

Examples:

console.log( halfValue([2,2,2]) ); // [1,1,1]
console.log( halfValue([3,4,5]) ); // [2,2,3]
Difficulty: 1 Star


Your Goal: Halve 'em! 
The function halfValue takes an array of numbers. 
It should return a new array with all the original values halved.

Odd numbers should be rounded up to the nearest whole number.
*/

function halfValue(numbers) {
    let array = []
    for (let i = 0; i < numbers.length; i++){
        array.push(Math.round(numbers[i] / 2))
    }
    return array
}

test = halfValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
console.log(test)

