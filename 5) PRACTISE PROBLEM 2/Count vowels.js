/*
Count Vowels
Count the number of vowels in a given word

Difficulty: 2 Stars


Count Vowels
Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".

Handle lowercase and uppercase vowels.


// Method 1 (.INCLUDES METHOD)
function countVowels(str) {
    let string = str.toLowerCase();
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i <= string.length; i++){
        if (vowels.includes(string[i])){
            count += 1
        }
    }
    return count
}

// Method 2 (FOR LOOP)
function countVowels(str) {
    let string = str.toLowerCase();
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++){
        for (let j = 0; j < vowels.length; j++){
            if (string[i] === vowels[j]){
                count += 1
            }
        }
    }
    return count
}
*/

// Method 3 (.INDEXOF METHOD)
function countVowels(str) {
    let string = str.toLowerCase();
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++){
        if (vowels.indexOf(string[i]) !== -1){
            count += 1
        }
    }
    return count
}

test = countVowels('I am Chukwubuikem Leonard Onyiriuba. In the past, people called me Chibuike. I am a Christian and Catholic')
console.log(test)



