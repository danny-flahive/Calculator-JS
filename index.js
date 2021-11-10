const readLine = require('readline-sync');
console.log('Welcome to the Calculator');
console.log('=========================');

console.log('Enter the first number: ');
var firstNum = readLine.prompt();
console.log('Enter the second number: ');
var secondNum = readLine.prompt();

var result = parseInt(firstNum) * parseInt(secondNum);
console.log("The result is: " + result);