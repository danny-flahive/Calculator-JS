const readLine = require('readline-sync');
const inputParser = require('./inputParser');
const arithmetic = require('./arithmetic');
const vowelCounter = require('./vowelCounter');
const EXIT = 0
const NUMERIC_MODE = 1;
const VOWEL_MODE = 2;

PrintWelcome();
MainLoop();

function MainLoop() {
    var continueCalculation = true;
    while(continueCalculation) {
        var menuChoice = inputParser.GetMenuChoice();
        switch(menuChoice) {
            case 0:
                continueCalculation = false;
                break;
            case 1:
                arithmetic.PerformCalculation();
                break;
            case 2:
                vowelCounter.PerformCalculation();
                break;
        }
    }
}

function PrintWelcome() {
    console.log('Welcome to the Calculator');
    console.log('=========================');
}

