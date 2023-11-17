/*
Your Goal: Find the Longer Half
Let's find the longer half of the string before and after the x!

First, you'll need to find the lower-case x.
Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
Take the longer string and return it!
This will be a tough function to write! Using everything you learned, you will be able to accomplish it. (You got this! )

Examples:

splitAtX("Happyxdays"); // "Happy"
splitAtX("10xDeveloper"); // "Developer"
 For the string "Happyxdays", we would look at the two strings before and after the x: "Happy" and "days". "Happy" is longer, so we would return it.
*/

function splitAtX(string) {
    const finderx = string.indexOf('x');
    const beforex = string.slice(0, finderx);
    const afterx = string.slice(finderx + 1);
    if (beforex.length > afterx.length) {
        return beforex
    }
    else if (afterx.length > beforex.length) {
        return afterx
    }
    else {
        return 'They are of equal size'
    }
}



test = splitAtX("Please i need an x-man to come save me.")
console.log(test)

