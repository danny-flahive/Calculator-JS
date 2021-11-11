const inputParser = require('./inputParser');

exports.PerformCalculation = function() {
    var operator = inputParser.GetOperator()
    var numberOfValues = inputParser.GetNumberInput('How many numbers do you want to enter? ');
    var values = inputParser.GetNumberArray(numberOfValues);
    var result = values[0];
    values = values.slice(1, values.length);
    switch (operator) {
        case "+":
            result = values.reduce(function(accumulator, current) {return accumulator += current}, result)
            break;
        case "-":
            result = values.reduce(function(accumulator, current) {return accumulator -= current}, result)
            break;
        case "*":
            result = values.reduce(function(accumulator, current) {return accumulator *= current}, result)
            break;
        case "/":
            values = values.filter(function (value) {return value != 0})
            result = values.reduce(function(accumulator, current) {return accumulator /= current}, result)
            break;
    }
    console.log("The result is: " + result);
}