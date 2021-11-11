const readLine = require('readline-sync');

exports.GetMenuChoice = function() {
    var menuChoice;
    var menuString = `\nPlease select a menu choice.\n\t1) Numeric Calculator\n\t2) Vowel Counter\n\t3) Question Calculator\n(0 to exit)`;
    menuChoice = this.GetNumberInput(menuString);
    while (menuChoice > 3 || menuChoice < 0) {
        menuChoice = this.GetNumberInput("Please enter a valid menu choice.");
    }
    return menuChoice;
}

exports.GetStringInput = function(message) {
    console.log(message);
    return readLine.prompt();
}

exports.GetNumberInput = function(message) {
    var value;
    console.log(message);
    value = parseInt(readLine.prompt());
    while (isNaN(value)) {
        console.log("Please enter a valid number. ");
        value = parseInt(readLine.prompt());
    }
    return value;
}

exports.GetOperator = function() {
    var validOperator = false;
    var operator = this.GetStringInput("Enter an operator (+, -, *, /)");
    while (operator != "+" && operator != "-" && operator != "/" && operator != "*") {
        operator = this.GetStringInput("Please enter a valid operator.");
    }
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
    var input = this.GetStringInput("Do you wish to perform another calculation? (Y/N): ");
    while (input != "Y" && input != "N") {
        input = this.GetStringInput("Please enter a valid response (Y/N): ");
    }
    return input == "Y";
}