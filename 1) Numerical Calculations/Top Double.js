/*
Top Double
 OK, this one will be a bit of a tough challenge!

The goal is to double a value until just before it reaches a top.

Let's say our value is 2 and our top is 100. We would double it like so:

2, 4, 8, 16, 32, 64, 128

 We start at 2, double to 4, 8, so on until 128. We recognize 128 is larger than our top 100 so we return 64. This is the top double for 2 before 100.

The expected result for topDouble(2, 100) would be 64.

 Another loop that will be useful for this task is the while loop.

 Your Goal: Complete the Top Double
Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.
 This one is a bit tricky! You might double the value before realizing it is larger than top. You'll need to go back and return the value before that value that exceeds the top.

*/


function top_double(top, start_value){
    let sum = 0;
    if (start_value <= 0) {
        return "Pick a value to evaluate greater than 0"
    }
    else{
        for (start_value; (2 * start_value) <= top;){
            sum = 2 * start_value
            start_value = sum
        }
        return sum
    }
}


test = top_double(100, 0)
console.log(test)