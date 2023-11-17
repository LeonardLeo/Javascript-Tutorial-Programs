/*
Sum Together
Sum together two arrays of numbers

Difficulty: 1 Star


Sum Together
Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.

Assume both arrays are the same length.

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

sumTogether(arr1, arr2); // returns [4, 6, 8];
*/

function sumTogether(arr1, arr2) {
    let sum = [];
    if (arr1.length === arr2.length){
        for (let i = 0; i < arr1.length || i < arr2.length; i++){
            sum.push(arr1[i] + arr2[i])
        }
        return sum
    }
    else {
        return "Arrays must be equal in size";
    }
}

test = sumTogether([1,2,3], [4,5,6])
console.log(test)