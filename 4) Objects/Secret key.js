/*
Your Goal: Remove the Secret Key
The object passed into removeSecret has a secret key that must be removed!

Set the value of this key to undefined to pass the test cases. Modify the object directly, there is no need to return it.

Both updating the value and using delete will change the object everywhere it is referenced.
*/

function removeSecret(object) {
    delete object.status;
    return object
}

const object = require("./TEST OBJECT.js")

const test = removeSecret(object)
console.log(test)
console.log(object.status)
module.exports = removeSecret;