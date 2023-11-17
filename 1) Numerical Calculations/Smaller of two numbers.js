function smaller_number(num1, num2){
    if (num2 > num1){
        return num1
    }
    else if (num1 > num2){
        return num2
    }
    else{
        return "They are equal"
    }
}



test = smaller_number(2, 5)
console.log(test)