const inputParser = require('./inputParser');

exports.PerformCalculation = function() {
    var userString = inputParser.GetStringInput('Please enter a string: ').toUpperCase();
    var vowelCounter = {A : 0, E: 0, I: 0, O: 0, U: 0};
    for (let i = 0; i < userString.length; i++) {
        if (vowelCounter[userString.charAt(i)] != undefined) {
            vowelCounter[userString.charAt(i)]++;
        }
    }
    console.log(`Vowel Counts: \nA: ${vowelCounter.A}\nE: ${vowelCounter.E}\nI: ${vowelCounter.I}\nO: ${vowelCounter.O}\nU: ${vowelCounter.U}`);
}