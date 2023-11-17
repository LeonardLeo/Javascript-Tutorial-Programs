/*
Palindrome
Determine if a given word is a palindrome

Difficulty: 2 Stars


Palindrome
Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.

A palindrome is a word that is spelled the same forwards as it is backwards.

The word pop is a palindrome.
*/

function isPalindrome(string) {
    let strLower = string.toLowerCase();
    let reversed = '';
    for (let i = (strLower.length - 1); i >= 0; i--){
        reversed += strLower[i]
    }
    console.log(reversed)
    if (reversed === strLower){
        return true
    }
    else{
        return false
    }
}


test = isPalindrome('Mom')
console.log(test)
