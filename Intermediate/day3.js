/*Day 3: Everything is Packaging
*/


function mypackaging(int1, int2) {
    if (Number.isInteger(int1) == false || Number.isInteger(int2) == false) {
        return "not an integer"
    }
    //converting the second integer to an array of numbers
    let int2Array = int2.toString().split('').map(Number);
    //retuning back the input second integer if required number of digits is less than the number of digits in the second parameter
    if (int1 < int2Array.length) {
        return int2;
    } else {
        //loop to added "0" to the beginning of the array using the unshift() method 
        while (int2Array.length < int1) {
            int2Array.unshift(0);
        }
        //conveting the array to a string and returning it
        return int2Array.join("");
    }

}


console.log(mypackaging(5, 22)); //"00022"
console.log(mypackaging(1, 22)); //22
console.log(mypackaging(8, 46)); //"00000046"
