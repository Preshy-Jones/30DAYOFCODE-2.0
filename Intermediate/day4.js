let optimusPrime = (num) => {
    if (Number.isInteger(num) == false) {
        return "not an integer"
    }
    //creating array of numbers between 1 and the input number
    let arr = Array(num - 2).fill(2).map((x, y) => x + y)
    primes = []

    for (let i = 0; i < arr.length; i++) {
        //creating array to store the perfect divisors of each element in the array
        divisors = [];
        //loop for a range of numbers from 2 to the number of each in the "arr" array
        for (let j = 2; j < arr[i]; j++) {
            //checking for the perfect divisors and pushing it to the divisors array. This is done for each element in the 'arr' array
            if (arr[i] % j === 0) {
                divisors.push(i);
            }
        }
        //if there are no divisors for that element it is a prime number and it is pushed into the prime array
        if (divisors.length === 0) {
            primes.push(arr[i])
        }
    }
    return primes;
}

console.log(optimusPrime(11));
console.log(optimusPrime(30));
