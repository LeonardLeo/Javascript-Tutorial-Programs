function checker(num){
    if (num === 0){
        return "Zero"
    }
    else if (num > 0){
        return "Positive"
    }
    else if (num < 0){
        return 'Negative'
    }
    else{
        return "Error"
    }
}

test = checker(343/-1)
console.log(test)