/*
 Your Goal: Complete Ends With X
Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. 
Return true if the last character is either lower-case x or upper-case X, false otherwise.
*/

function endsWithX(string) {
    const lastindex = (string.length - 1)
    if (string[lastindex] === 'x' || string[lastindex] === 'X'){
        return true
    }
    else{
        return false
    }
}

test = endsWithX("I am so happy with GodX")
console.log(test)