/*
Your Goal: Find the First X
In the string argument find the index of the first lower-case "x" and return it.

NOTE:
If the index is not found, indexOf will return a -1.
*/


// METHOD 1
/*
function findFirstX(string) {
    let finderx = string.indexOf('x');
    return finderx    
}
*/

// METHOD 2
function findFirstX(string) {
    for (let i = 0; i <= (string.length - 1); i++){
        if (string[i] === 'x'){
            return i
        }
    }
}


test = findFirstX("I am one of the x-men")
console.log(test)
