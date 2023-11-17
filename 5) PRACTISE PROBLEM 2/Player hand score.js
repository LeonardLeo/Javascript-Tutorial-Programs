/*
Player Hand Score
Calculate the total score of the cards in a player's hand

Difficulty: 3 Stars


Player Hand Score
The function playerHandScore that takes in a string of face cards 
(Jack, Queen, and King only) and returns the total score of the players hand.

The cards are represented by the first letter in the name of the card:

A "K" is 4 points
A "Q" is 3 points
A "J" is 2 points
Example Usage:

console.log( playerHandScore("K") ); // 4
console.log( playerHandScore("KJ") ); // 6
console.log( playerHandScore("KQQ") ); // 10 
*/

// Method 1 (MY SOLUTION)
let cardPoint = require("./Player hand score CARDS.js")

function playerHandScore(hand) {
    let hands = hand.toUpperCase();
    const keys = Object.keys(cardPoint);
    let sumPoints = 0;

    for (let i = 0; i < hands.length; i++){
        if (!keys.includes(hands[i])){
            return "Input only 'K', 'Q' or 'J'. Lower or Upper Case is fine."
        }
        else{
            sumPoints += cardPoint[hands[i]]
        }
    }
    return sumPoints
}


// Method 2 (Their Solution)
function playerHandScores(hand) {
    const scores = {
        "K": 4,
        "Q": 3,
        "J": 2
    }

    const handArr = hand.split("");
    let sum = 0;
    for(let i = 0; i < handArr.length; i++) {
        const score = scores[handArr[i]];
        sum += score;
    }

    return sum;
}


// Method 3 (MY METHOD WITHOUTOUT CALLING ANOTHER FILE)
function Playerhandscore(hand) {
    let hands = hand.toUpperCase();
    const cards = {
        K: 4,
        Q: 3,
        J: 2
    } 
    const keys = Object.keys(cards);
    let sumPoints = 0;

    for (let i = 0; i < hands.length; i++) {
        if (!keys.includes(hands[i])) {
            return "Input only 'K', 'Q' or 'J'. Lower or Upper Case is fine."
        }
        else {
            sumPoints += cards[hands[i]]
        }
    }
    return sumPoints
}

test = playerHandScore("KQQ")
console.log(test)
