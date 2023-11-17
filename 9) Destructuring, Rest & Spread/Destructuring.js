    // (1) Unpacking an OBJECT
const obj = {
    name: "Leo",
    age: 25,
    city: "New York"
}

const {name, age, city} = obj;
console.log(city); 
console.log(age);


// NOTE: When doing DESTRUCTURING of an OBJECT, 
// You must UNPACK with the same VARIABLES NAME. 
// You must also use {} <----- Curly brackets



    // (2) Unpacking an ARRAY
const array = ["Man", true, 83, "No", false]

const [a, b, c, d] = array;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
//console.log(e)


// NOTE: When doing DESTRUCTURING of an ARRAY, 
// You can UNPACK without the same VARIABLES NAME. 
// You must also use [] <----- Square brackets



