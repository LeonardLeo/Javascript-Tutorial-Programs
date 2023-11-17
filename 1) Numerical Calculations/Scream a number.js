function scream(n){
    let str = "";
    for (i = 1; i <= n; i++) {
        str = str + "a"
    }
    return str;
}


test1 = scream(1);
test2 = scream(5);
test3 = scream(10);

console.log(test1, test2, test3);