/*
Reverse
Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.

For example, reverse("cat") would return the string "tac".
*/

function reverse_string(string){
    let reversed = ""
    for (n = (string.length - 1); n >= 0; n--){
       reversed = reversed + string[n] 
    }
    return reversed
}

test = reverse_string("I am happy")
console.log(test)