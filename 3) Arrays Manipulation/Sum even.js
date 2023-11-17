function sumEven(array) {
    let total = 0
    for (let i = 0; i <= (array.length - 1); i++){
        if ((array[i] % 2) === 0) {
            total += array[i]
        }
    }
    return total
}

 test = sumEven([18, 2, 3, 4, 23, 11, 17, 18, 1])
 console.log(test)