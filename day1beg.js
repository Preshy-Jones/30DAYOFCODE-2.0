function divisors(integer) {
    db = []
    for (var i = 1; i < integer; i++) {
        var div = integer / i;
        var result = (div - Math.floor(div)) == 0;
        if (result) {
            db.push(i);
        }
    }
    return db.length;
}