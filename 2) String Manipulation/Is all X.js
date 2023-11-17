/*
Your Goal: Is All X?
Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. Return true if they are, false if not.

Examples:

isAllX("Xx"); // true
isAllX("xAbX"); // false
*/

function isAllX(string) {
    let xCount = 0
    let xString = ''
    for (let i = 0; i <= (string.length - 1); i++){
        if (string[i] === 'x' || string[i] === 'X'){
            xString += string[i]
        }
        xCount += 1
    }
    if (xString.length === xCount){
        return true
    }
    else{
        return false
    }
}

test = isAllX("Xxxx")
console.log(test)
