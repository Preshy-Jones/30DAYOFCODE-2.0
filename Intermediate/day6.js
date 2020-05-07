/*

Since birth, Akin has always spoken english. But one day, he decides he deserves his own language as a boss. So he encodes the english language and creates his own tongue.

To do this, he groups his letters into two lists of his own order, vowels and consonants.

 

This operation is carried out by substituting vowels in this order 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three steps forward, cyclically, while maintaining its case (i.e., lower or upper).

Similarly, the consonants are substituted in the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f'  ten steps forward cyclically.

 

Note: This works the same way when decoding.

Task:

Write the function Akin would use to code and decode his language before he crams it. It would take a string as input and return a string as output
Created on Tue May 7 2020
@author: Adedibu Precious
*/

let Atongue = (argument) => {
    arr = argument.split("");
    for (let i = 0; i < arr.length; i++) {
        let vowels = ['a', 'i', 'y', 'e', 'o', 'u'];
        let consonants = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f']
        var ray = []
        if (arr[i].toLowerCase() !== arr[i]) {
            arr[i] = arr[i].toLowerCase()
            ray.push(1)
        }
        if (vowels.includes(arr[i])) {
            var index = vowels.indexOf(arr[i]) + 3;
            if (index > 5) {
                var index = index - 6;
            }
            if (ray.length > 0) {
                arr[i] = (vowels[index]).toUpperCase()
            } else {
                arr[i] = vowels[index]
            }
        } else if (consonants.includes(arr[i])) {
            var index = consonants.indexOf(arr[i]) + 10;
            if (index > 19) {
                var index = index - 20;
            }
            if (ray.length > 0) {
                arr[i] = (consonants[index]).toUpperCase()
            } else {
                arr[i] = consonants[index]
            }
        }
    }
    return arr.join("")

}

