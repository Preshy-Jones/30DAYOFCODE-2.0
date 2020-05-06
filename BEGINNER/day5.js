function triangle_no(num) {
    if (Number.isInteger(num) == false) {
        return "not an integer"
    }
    if (key(8 * num + 1)) {
        return true;
    } else {
        return false;
    }
}
function key(num) {
    for (var i = 0; i < num / 2 + 2; i++) {
        if (i * i == num) {
            return true;
        }
    }
    return false;
}

console.log(triangle_no(6));
console.log(triangle_no(8));
