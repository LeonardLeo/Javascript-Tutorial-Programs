/*
Create a function which retrieves the property name on this.

You can expect the property to exist. Example:

const name = thisName.call({ name: 'Ted' }); 

console.log(name); // Ted
*/

function thisName() {
    return this.name
}

function totalThings(a, b, c) {
    return `There are ${a + b + c} ${this}`;
}

console.log(thisName.call({name: "Charles"}))
console.log(totalThings.apply("Students", [10, 3, 2]))