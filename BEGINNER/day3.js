let santa = (int1, int2) => {
    if (Number.isInteger(int1) == false || Number.isInteger(int2) == false) {
        return "one or both inputs not an integer"
    }
    //using modulus operator to validate that second integer is divisble by the first
    if (int2 % int1 == 0) {
        return "give away"
    } else {
        return "eat them yourself"
    }
}

console.log(santa(3, 9)); //"give away"
console.log(santa(3, 8)); //"eat them yourself"
