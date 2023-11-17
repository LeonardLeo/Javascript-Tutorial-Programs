/*
Count the Elements
Create an object that stores the count of each element in an array

Difficulty: 2 Stars


Count the Elements
Write a function countElements that takes in an array and returns an object a count of each element in the array.

const elements = ["e", "k", "e", "z", "i", "z"];
countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}
*/

// Method 1
function countElements(elements) {
    let store = {};
    let removeDuplicates = [];
    for (let i = (elements.length - 1); i >= 0; i--){
        if (!removeDuplicates.includes(elements[i])){
            removeDuplicates.push(elements[i])
        }
    }
    for (let i = (removeDuplicates.length - 1); i >= 0; i--){
        store[`${removeDuplicates[i]}`] = 0
    }
    for (let i = (elements.length - 1); i >= 0; i--){
        store[`${elements[i]}`] += 1
    }
    return store
}


// Method 2 (Their Solution)
function countElement(elements) {
    let elementCount = {};
    for(let i = 0; i < elements.length; i++) {
        if(!elementCount[elements[i]]) {
            elementCount[elements[i]] = 1;
        } else {
            elementCount[elements[i]] += 1;
        }
    }

    return elementCount;
}

test = countElements(['a','a','a','a','a','a','a','a','b','b','b','b','b','c','c','c',1,2,3,4,5,6,1,2,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,5,5,5,5,5,5,5,5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9])
console.log(test)
