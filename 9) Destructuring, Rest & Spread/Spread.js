// This is sort of the opposite of the rest syntax. 
// Instead of saying "grab me the rest of the values", we're saying "spread these values out".
// Let's see what that means:


// EXAMPLE 1
const numbers = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

const sum = add(...numbers);

console.log(sum); // 6


// EXAMPLE 2
const names = ["Onyiriuba", "Leonard", "Chukwubuikem"]
const nickname = [...names]

console.log(nickname)

