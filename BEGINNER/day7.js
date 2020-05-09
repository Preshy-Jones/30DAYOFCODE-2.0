let Psum = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return "arrays are not of the same length"
    }
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i] * arr2[i];
    }
    return sum;
}


console.log(Psum([2, 6, 9, 4], [1, 2, 4, 8]));// 82
console.log(Psum([2, 6, 9, 4], [1, 2, 4, 8, 6]));// "arrays are not of the same length"

