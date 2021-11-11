const readLine = require('readline-sync');
console.log('Welcome to the Calculator');
console.log('=========================');

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

console.log("How many numbers do you want to enter? ");
var numberOfValues = parseInt(readLine.prompt());
var values = []
for (let i = 0; i < numberOfValues; i++) {
    console.log('Enter number ' + (i + 1) + ': ');
    values.push(parseInt(readLine.prompt()));
}

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