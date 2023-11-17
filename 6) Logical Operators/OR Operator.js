function willEat(hasPizza, hasDonuts, hasCookies) {
    if (hasPizza === true || hasDonuts === true || hasCookies === true){
        return true
    }
    else{
        return false;
    }
}


test = willEat(true, true, false)
console.log(test)