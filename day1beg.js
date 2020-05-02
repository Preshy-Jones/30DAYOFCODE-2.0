function divisors(integer) {
    //creating empty array
    db = []
    //looping from 1 to less than the input integer
    for (var i = 1; i < integer; i++) {
        //dividing the input integer by each number in the loop
        var div = integer / i;
        //checking that the result is not a decimal to get the numbers that are perfect divisors
        var result = (div - Math.floor(div)) == 0;
        if (result) {
            //pushing the divisors into the created array
            db.push(i);
        }
    }
    //returning the number of divisors by getting the length of the array
    return db.length;
}

console.log(divisors(10))// 3
console.log(divisors(20));//5
