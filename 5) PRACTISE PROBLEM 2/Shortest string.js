/*
Shortest String
Your goal in this challenge will be to find the shorter of two strings:

console.log( shortestString("apple", "a") ); // a
console.log( shortestString("apple", "spaghetti") ); // apple
Difficulty: 1 star
*/

function shortestString(string1, string2){
    if (string1.length > string2.length){
        return string2
    }
    else if (string1.length < string2.length){
        return string1
    }
    else{
        return `${string1} and ${string2} are equal`
    }
}


test = shortestString("man", "Leave me alone")
console.log(test)
