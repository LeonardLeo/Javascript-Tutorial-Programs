// EXAMPLE 1
function catchRest(a, b, c, ...args){
    return args
}

console.log(catchRest(1, 2, 3, 4, 5, 6, 7))


// EXAMPLE 2
function get(...args){
    return args
}

console.log(get('hello', 'world'))


// EXAMPLE 3
const arr = [...[0, 1], ...[2, 3]]
console.log(arr) 


// EXAMPLE 4
let a = [1]
let b = [2]
let c = [...a, ...b]
console.log(c)


// EXAMPLE 5
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
        }
    
    sayHello(){
        return `Hi my name is ${this.name}`
        }
}
let person = new Person("John", 28)
console.log(person.sayHello())
    

// EXAMPLE 6
const [a1, b1, c1, ...others] = [1,2,3,4,5,6,7,8,9,10]
console.log(others)


// EXAMPLE 7
let obj = {
    man: "Leo",
    age: 29,
    food: "Beans",
    drink: "Water"
}

const {man, age, ...args} = obj
console.log(args)

