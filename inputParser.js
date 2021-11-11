const readLine = require('readline-sync');

exports.GetMenuChoice = function() {
    var menuChoice;
    var menuString = `\nPlease select a menu choice.\n\t1) Numeric Calculator\n\t2) Vowel Counter\n(0 to exit)`;
    do {
        menuChoice = this.GetNumberInput(menuString);
    } while (menuChoice > 2 || menuChoice < 0)
    return menuChoice;
}

exports.GetStringInput = function(message) {
    console.log(message);
    return readLine.prompt();
}

exports.GetNumberInput = function(message) {
    var value;
    do {
        console.log(message);
        value = parseInt(readLine.prompt());
    } while (isNaN(value));
    return value;
}

exports.GetOperator = function() {
    var validOperator = false;
    var operator;
    do {
        if (operator != "+" && operator != "-" && operator != "/" && operator != "*") {
            operator = this.GetStringInput("Enter an operator (+, -, *, /)");
        }
        else {
            validOperator = true;
        }
    } while (!validOperator);
    return operator;
}

exports.GetNumberArray = function(numberOfValues) {
    var values = [];
    for (let i = 0; i < numberOfValues; i++) {
        values.push(this.GetNumberInput(`Enter number ${i+1}: `));
    }
    return values;
}

exports.AskToContinue = function() {
    var input;
    do {
        input = this.GetStringInput("Do you wish to perform another calculation? (Y/N): ")
    } while (input != "Y" && input != "N");
    return input == "Y";
}