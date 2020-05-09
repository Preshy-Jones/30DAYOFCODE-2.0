let bitCount = (num) => {
    if (Number.isInteger(num) == false) {
        return "not an integer"
    }
    return (num.toString(2)).split("1").length - 1;
}

console.log(bitCount(1234));


// let bintodec = (num) => {
//     var bin = ""
//     while (num >= 1) {
//         bin += (num % 2).toString()
//         num = Math.floor(num / 2)
//     }
//     return bin.split("").reverse().join("");

// }