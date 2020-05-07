let Zeros = (num) => {
    if (Number.isInteger(num) == false) {
        return "not an integer"
    }
    let count = 0;
    for (let i = 5; i <= num; i += 5) {
        let key = i;
        while (key % 5 === 0) {
            key /= 5;
            count++;
        }
    }
    return count;
}

console.log(Zeros(6));
console.log(Zeros(100));
console.log(Zeros(25));

