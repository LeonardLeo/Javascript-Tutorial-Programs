/*
Count C
Your goal in this challenge is to count the number of c characters found in a word!

Examples:

console.log( countC('ccc') ); // 3
console.log( countC('cupcake') ); // 2
console.log( countC('Carrot cake') ); // 2
 That last one had both upper and lower case c's! Be sure to count them both.

Difficulty: 2 Stars


Your Goal: Count the C's
The function countC takes a string str as its only argument.

This function should return the number of c's found in the string. 
It must count both lower-case c and upper-case C.
*/

function countC(str) {
    let string = str.toLowerCase();
    let count = 0;
    for (let i = 0; i <= string.length; i++){
        if (string[i] === 'c'){
            count += 1
        }
    }
    return count
}

test = countC('I am Chukwubuikem Leonard Onyiriuba. In the past, people called me Chibuike. I am a Christian and Catholic')
console.log(test)


