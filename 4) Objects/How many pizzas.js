// Note: We can get to use the 
// . Operator
// and the
// [] Operator 
// When we are tryimg to get or retrieve values

function numberOfPizzas(order) {
    return order.pizzas || order["pizzas"]
}

const order = {
    pizzas: 3,
    extraCheese: true,
    deliveryInstructions: "Round the back, please!",
};
test = numberOfPizzas(order)
console.log("Number of Pizzas", test);


