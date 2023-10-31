var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playGame() {
    var minRange = 1;
    var maxRange = 100;
    var secretNumber = generateRandomNumber(minRange, maxRange);
    var attempts = 0;
    console.log('Welcome to the Number Guessing Game!');
    console.log("I'm thinking of a number between ".concat(minRange, " and ").concat(maxRange, ". Can you guess it?"));
    function promptUser() {
        rl.question('Enter your guess: ', function (input) {
            var guessNumber = parseInt(input);
            if (isNaN(guessNumber)) {
                console.log('Please enter a valid number.');
                promptUser();
            }
            else {
                attempts++;
                if (guessNumber < secretNumber) {
                    console.log('Try a higher number.');
                    promptUser();
                }
                else if (guessNumber > secretNumber) {
                    console.log('Try a lower number.');
                    promptUser();
                }
                else {
                    console.log("Congratulations! You guessed the number ".concat(secretNumber, " in ").concat(attempts, " attempts."));
                    rl.close();
                }
            }
        });
    }
    promptUser();
}
playGame();
