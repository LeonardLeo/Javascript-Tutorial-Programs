function startswithx(string){
    if (string[0] !== 'x'){
        return false;
    }
    else{
        return true;
    }
}

test = startswithx("X-Men-x")
console.log(test)