let expenseReport = (str) => {
    //splitting the string to an array separated by the line breaker\n 
    let arr = str.split("\n");
    //adding the neighbour and with the cost 50 and assigning it its approprate number in the list
    arr.push(arr.length + " Neighbor 50.00")
    //extracting the original balance from the first element in the array 
    var origBal = Number(arr[0])
    //looping through the items in the array from index 1 since index 0 was the original price 
    for (let i = 1; i < arr.length; i++) {
        //using a regular expression to get the cost of each item in the array loop and calculating the new balance
        var cost = arr[i].match(/[\d\.]+/g)[1]
        var newBal = (origBal - Number(cost))
        //converting the new balance to 2 decimal places and adding to the element string in each array
        arr[i] = arr[i] + " Balance " + newBal.toFixed(2)
        //setting the original balance to the value of the new balance to start the loop again
        var origBal = newBal
    }

    //
    let iniBal = Number(arr[0])
    //adding the required string to the original balance 
    arr[0] = "Original Balance: " + arr[0]
    //calculating the total expense
    let totexpe = (iniBal - newBal).toFixed(2)
    arr.push("Total expense  " + totexpe, "Average expense  " + (totexpe / (arr.length - 1)).toFixed(2))
    //converting the array back to a string and substituting all spaces with an underscore
    return arr.join("\n").replace(/ /g, '_');
}


console.log(expenseReport("1000.00\n1 Market 125.45\n2 Hardware 34.95\n3 Video 7.45\n4 Book 14.32\n5 Gasoline 16.10"));
