const inputParser = require('./inputParser');

exports.PerformCalculation = function() {
    var operator = inputParser.GetOperator()
    var numberOfValues = inputParser.GetNumberInput('How many numbers do you want to enter? ');
    var values = inputParser.GetNumberArray(numberOfValues);
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