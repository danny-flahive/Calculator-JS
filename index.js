const readLine = require('readline-sync');
console.log('Welcome to the Calculator');
console.log('=========================');

validOperator = false;
operator = "";
while (!validOperator) {
    if (operator != "+" && operator != "-" && operator != "/" && operator != "*") {
        console.log("Enter an operator (+, -, *, /)");
        operator = readLine.prompt();
    }
    else {
        validOperator = true;
    }
}
console.log('Enter the first number: ');
var firstNum = parseInt(readLine.prompt());
console.log('Enter the second number: ');
var secondNum = parseInt(readLine.prompt());

var result;
switch (operator) {
    case "+":
        result = firstNum + secondNum;
        break;
    case "-":
        result = firstNum - secondNum;
        break;
    case "*":
        result = firstNum * secondNum;
        break;
    case "/":
        result = firstNum / secondNum;
}
console.log("The result is: " + result);