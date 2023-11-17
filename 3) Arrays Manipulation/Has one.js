/*
Your Goal: Complete the Function hasOne
Complete the function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.

console.log( hasOne([1,2,3]) ); // true
console.log( hasOne([1,1,1]) ); // true
console.log( hasOne([4,5,6]) ); // false
 In JavaScript, you can return early in a function which may make this easier than returning in a single spot.
 */

function hasOne(array) {
    let checker = false
    for (let i = 0; i <= array.length; i++){
       if (array[i] === 1){
        return true
       } 
       else{
        checker = false
       }
    }
    return checker
}
 

 test = hasOne([1, 2, 3, 4, 23, 11, 17, 18, 1])
 console.log(test)