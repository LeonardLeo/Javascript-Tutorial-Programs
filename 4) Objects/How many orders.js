/*
Array of Objects
Things get really interesting when we start to put objects inside arrays and vice-versa!

Let's take our team example again:

const team = {
    name: "Mets",
    wins: 86,
    inPlayoffs: false,
};
In a league, we might have many teams:

const teams = [team1, team2, team3];
for(let i = 0; i < teams.length; i++) {
    console.log(teams[i].name); 
}
This example loops over each team and logs out the name of each team.

 This code assumes that each team has a name property. If the team is an object without a name property, this will log undefined.

 Your Goal: Accumulate the Pizza Orders
Given an array of pizza orders, return the total number of pizzas ordered.

The orders are an array of objects, each with pizzas key inside:

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
 For this example above, we'd expect 18 total pizzas:

const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 18
*/ 

function numberOfPizzas(orders) {
    let total = 0
    for (let i = 0; i <= orders.length - 1; i++){
        total += orders[i].pizzas
    }
    return total
}

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
test = numberOfPizzas(orders)
console.log(test)