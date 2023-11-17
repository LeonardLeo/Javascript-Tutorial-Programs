/*
Your Goal: Car Crossing the Bridge
There's a river that runs right between two towns. In order for cars to cross the river, we built a bridge!

XOR

Trouble is, there's only room for 1 car to cross the bridge at a time. This means that if both cars were to be crossing at the same time, neither would be able to cross.

Complete the carCrossing function to return true if and only if one car is crossing.

The logical term for this situation is an "Exclusive OR". In other words, it is only true if exactly 1 of the terms are true.
*/


// METHOD 1
function carCrossing(aCrossing, bCrossing) {
    if (aCrossing === false && bCrossing === false){
        return false;
    }
    else if (!(aCrossing && bCrossing)) {
        return true;
    }
    else{
        return false;
    }
}


// METHOD 2
function carCrossings(aCrossing, bCrossing) {
    return (aCrossing && !bCrossing) || (bCrossing && !aCrossing);
}


test = carCrossings(true, false)
console.log(test); 




