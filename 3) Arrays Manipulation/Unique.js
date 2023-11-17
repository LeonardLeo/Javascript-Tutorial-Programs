/*
Your Goal: Find Unique Elements
Write a function that will take an array of numbers and return a new array that only contains unique numbers.

 Let's examine how to determine if an element is contained in array.
*/
// METHOD 1
function unique(array){
    let newArray = [];
    for (let i = 0; i <= (array.length -1); i++){
        if (!newArray.includes(array[i])){
            newArray.push(array[i])
        }
    }
    console.log("")
    return newArray
}



test = unique([1,1,1,1,1,2,2,3,2,1,4,5,5,5,5,23,43])
console.log(test)


// METHOD 2
function Unique(array){
    let newArray = [];
    for (let i = 0; i <= (array.length -1); i++){
        if (newArray.indexOf(array[i]) === -1){
            newArray.push(array[i])
        }
    }
    console.log("")
    return newArray
}



Test = Unique([1,1,1,1,1,2,2,3,2,1,4,5,5,5,5,23,43])
console.log(Test)

/*
Contains Element
How do we determine if an element already exists inside an array?

In the strings tutorial we discussed the indexOf method. This method also exists on arrays!

 You can find the full documentation on indexOf here.

 Let's say we had an existing array and wanted to know if an element is contained in it:

const element = 3;
const array = [1,2,3];

const isContained = array.indexOf(element) >= 0;

console.log( isContained ); // true
If the array does not contain the element, the indexOf method will return -1. Therefore, if the index returned is greater or equal to zero we know it is contained.

The variable isContained in this case will be true because it contains 3!

 So how do we apply this to unique numbers?

Similar to our greaterThanFive example in the task, we can start by creating a new array. We can then choose to add all numbers to this new array so long as they are not already contained.
*/