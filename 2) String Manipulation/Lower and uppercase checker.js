function firstletter_checker(string){
    if (string[0].toLowerCase() === 'x'){
        return true;
    }
    else{
        return false;
    }
}

test = firstletter_checker("IX-Men-x")
console.log(test)