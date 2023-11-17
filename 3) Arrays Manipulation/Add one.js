/*
Your Goal: Add One to Each Element
Complete the addOne function to add 1 to every element within the array. Since we are modifying the array directly do not return it.

An example:

const array = [1,2,3];
addOne(array); 
console.log(array); // [2,3,4]
*/

function addOne(array) {
    for (let i = 0; i < array.length; i++){
        array[i] = array[i] + 1
    }
    console.log(array)
}

test = addOne([1, 2, 3, 4, 5, 6, 7, 8, 9])

