let bCalculator = (n) => {
    str = n;
    decValue = 0;

    // Initializing base  
    // value to 1, i.e 2 ^ 0 
    base = 1;

    temp = str;
    while (temp > 0) {
        last_digit = temp % 10;
        temp = Math.round(temp / 10);

        decValue += last_digit * base;
        base = base * 2;
    }
    return decValue;
}



let bCalculator = (str1, str2) => {
    arr = [str1, str2]
    return arr.map(str => str1.split("").map(x => x * Math.pow(2, str1.indexOf(x))).reduce((a, b) => a + b)).reduce((a, b) => a + b)

}

let bCalculator = (str1) => {
    let res = str1.split("").reverse().map(Number);
    let result = res.map(x => x * res.indexOf(x))
    // return result
    return result
}


let bCalculator = (str1,str2) => {
    return bintoDec(str1) + bintoDec(str2)
}

function bintoDec(str) {

    var decValue = 0;
    var base = 1;
    var len = str.length;
    for (let i = len - 1; i >= 0; i--) {
        if (str.charAt(i) == '1') {
            decValue += base;
        }
        base = base * 2;
    }

    return decValue;
}
