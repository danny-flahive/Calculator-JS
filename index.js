const readLine = require('readline-sync');
const EXIT = 0
const NUMERIC_MODE = 1;
const VOWEL_MODE = 2;

PrintWelcome();

var continueCalculation = true;
while(continueCalculation) {
    var menuChoice = GetMenuChoice();
    switch(menuChoice) {
        case 0:
            continueCalculation = false;
            break;
        case 1:
            PerformNumericCalculation();
            break;
        case 2:
            PerformVowelCalculation();
            break;
    }
}

function GetMenuChoice() {
    var menuChoice;
    var menuString = `\nPlease select a menu choice.\n\t1) Numeric Calculator\n\t2) Vowel Counter\n(0 to exit)`;
    do {
        menuChoice = GetIntInput(menuString);
    } while (menuChoice > 2 || menuChoice < 0)
    return menuChoice;
}

function PerformVowelCalculation() {
    console.log('Please enter a string: ');
    var userString = readLine.prompt().toUpperCase();
    var vowelCounter = {A : 0, E: 0, I: 0, O: 0, U: 0};
    for (let i = 0; i < userString.length; i++) {
        if (vowelCounter[userString.charAt(i)] != undefined) {
            vowelCounter[userString.charAt(i)]++;
        }
    }
    console.log(`Vowel Counts: \nA: ${vowelCounter.A}\nE: ${vowelCounter.E}\nI: ${vowelCounter.I}\nO: ${vowelCounter.O}\nU: ${vowelCounter.U}`);
}

function PerformNumericCalculation() {
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
        values.push(GetIntInput(`Enter number ${i+1}: `));
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

function AskToContinue() {
    var input;
    do {
        console.log("Do you wish to perform another calculation? (Y/N): ")
        input = readLine.prompt();
    } while (input != "Y" && input != "N");
    return input == "Y";
}