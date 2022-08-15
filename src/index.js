function prepend(numSpaces, inputString) {
    // your code here
    var newString = "";
    for (var i = 0; i < numSpaces; i++) {
        newString += " ";
    }
    return newString.concat(inputString);
}
console.log(prepend(5, "Hello"));
