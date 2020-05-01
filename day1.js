function scrabble(str1, str2) {
    //returning false if either of the input strings are empty
    if (str1 == "" || str2 == "") {
        return false;
    }
    //converting strings to array
    var stringArray1 = str1.split("");
    var stringArray2 = str2.split("");
    //creating empty array
    var db = [];
    //looping through the second  string array and pushing 0 
    for (var i = 0; i < stringArray2.length; i++) {
        if (stringArray1.includes(stringArray2[i])) {
            db.push(0)
        } else {
            //push 1 to identify that any of the letters ae not in the first array
            db.push(1)
        }
    }
    //adding all numbers in the formerly empty array
    var totalArray = db.reduce(function (a, b) {
        return a + b;
    }, 0);

    //if all the letters in the second string are in the first then it means a portion of the first string can make up the second string
    //this is achieved only when the total of the "db" array is "0"
    if (totalArray == 0) {
        return true
    } else {
        return false
    }
}