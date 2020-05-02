function singletoStupor(num) {
    //verifying that input is an integer
    if (Number.isInteger(num) == false) {
        return "not an integer"
    }
    //converting the input number to an array of numbers
    var numberArray = num.toString().split('').map(Number);
    //creating a counter and initializing it to zero
    var count = 0;
    //setting a while to run while the number until the number is not a single digit
    while (numberArray.length > 1) {
        //adding up the numbers in the array and converting it back to an array of numbers
        numberArray = numberArray.reduce((a, b) => a * b).toString().split('').map(Number);
        count++;
    }

    return count;
}

console.log(singletoStupor(43))//4
console.log(singletoStupor(77))//4
console.log(singletoStupor("4.6"))//not an integer
