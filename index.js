const readLine = require('readline-sync');

PrintWelcome();
PerformCalculation();

function PerformCalculation() {
    var operator = GetOperator()
    var numberOfValues = GetIntInput('How many numbers do you want to enter? ');
    var values = GetIntArr(numberOfValues);
    var result;
    result = values[0];
    for (let i = 1; i < values.length; i++) {
        switch (operator) {
            case "+":
                result += values[i];
                break;
            case "-":
                result -= values[i];
                break;
            case "*":
                result *= values[i];
                break;
            case "/":
                result /= values[i];
        }
    }
    console.log("The result is: " + result);
}

function GetIntInput(message) {
    var value;
    do {
        console.log(message);
        value = parseInt(readLine.prompt());
    } while (isNaN(value));
    return value;
}

function GetIntArr(numberOfValues) {
    var values = [];
    for (let i = 0; i < numberOfValues; i++) {
        values.push(GetIntInput('Enter number ' + (i + 1) + ': '));
    }
    return values;
}

function GetOperator() {
    var validOperator = false;
    var operator;
    do {
        if (operator != "+" && operator != "-" && operator != "/" && operator != "*") {
            console.log("Enter an operator (+, -, *, /)");
            operator = readLine.prompt();
        }
        else {
            validOperator = true;
        }
    } while (!validOperator);
    return operator;
}

function PrintWelcome() {
    console.log('Welcome to the Calculator');
    console.log('=========================');
}