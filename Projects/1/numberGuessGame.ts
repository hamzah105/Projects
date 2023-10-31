const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
  const minRange: number = 1;
  const maxRange: number = 100;
  const secretNumber: number = generateRandomNumber(minRange, maxRange);
  let attempts: number = 0;

  console.log('Welcome to the Number Guessing Game!');
  console.log(`I'm thinking of a number between ${minRange} and ${maxRange}. Can you guess it?`);

  function promptUser() {
    rl.question('Enter your guess: ', (input: string) => {
      const guessNumber: number = parseInt(input);

      if (isNaN(guessNumber)) {
        console.log('Please enter a valid number.');
        promptUser();
      } else {
        attempts++;

        if (guessNumber < secretNumber) {
          console.log('Try a higher number.');
          promptUser();
        } else if (guessNumber > secretNumber) {
          console.log('Try a lower number.');
          promptUser();
        } else {
          console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
          rl.close();
        }
      }
    });
  }

  promptUser();
}

playGame();
