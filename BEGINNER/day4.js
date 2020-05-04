let cStrings = (word) => {
    if (typeof word != "string") {
        return "not a String"
    }
    return word.toUpperCase() + ", " + word.toLowerCase();
}

console.log(cStrings("HasTaLAvisTA"));
