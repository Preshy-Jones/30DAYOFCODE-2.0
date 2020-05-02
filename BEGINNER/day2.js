function palindromecheck(argumentString) {
    //converting the input string to lowercase with the tolowercase() method
    //applying regular expression to find characters that are not alphabets or positive integers
    //and removing them using the replace() method by replacing them with nothing ""
    var argumentString = argumentString.toLowerCase().replace(/[^a-z0-9]+/g, "");
    //reversing the adjusted argument string by converting it to an array,reversing it, and converting it back to a string
    //using the split(),reverse() and join() methods respectively
    var reversedString = argumentString.split("").reverse().join("");
    //conditional statement to test if the adjusted argument string is the same as the reversed string 
    if (argumentString === reversedString) {
        //return true if they are the same
        return true;
    } else {
        //return false if they are different
        return false;
    }


}

palindromecheck("race car");// returns true
palindromecheck("Mr. Owl ate my metal worm");//returns true
palindromecheck("This is not a palindrome");//returns false
