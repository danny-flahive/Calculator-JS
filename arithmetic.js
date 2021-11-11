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

//TODO: Add bracket handling
//TODO: Treat */ and +- with same precedence, go with the one closest to the left first
exports.AnswerQuestion = function(question) {
    var questionTokens = question.split(" ");
    //Calculate the result incrementally, in line with the order of operations
    //Works on two operands with one operator at a time, until all calculations are complete & a final result produced
    while (questionTokens.length > 1) {
        let firstOperand;
        let secondOperand;
        let operator;
        let currentIndex = questionTokens.indexOf("*");
        if (currentIndex > 0) {
            operator = "*";
        } else if (questionTokens.indexOf("/") > 0) {
            currentIndex = questionTokens.indexOf("/")
            operator = "/";
        } else if (questionTokens.indexOf("+") > 0) {
            currentIndex = questionTokens.indexOf("+")
            operator = "+";
        } else if(questionTokens.indexOf("-") > 0) {
            currentIndex = questionTokens.indexOf("-")
            operator = "-";
        }
        firstOperand = parseInt(questionTokens[currentIndex - 1]);
        secondOperand = parseInt(questionTokens[currentIndex + 1]);
        let result;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = firstOperand / secondOperand;
                break;
        }
        questionTokens.splice(currentIndex - 1, 3, result);
    }

    console.log(`The result is: ${questionTokens[0]}`);
}