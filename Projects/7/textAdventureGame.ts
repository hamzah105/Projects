import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Game {
  constructor() {}

  start() {
    console.log('Welcome to the Text-Based Adventure Game!\n');
    this.intro();
  }

  intro() {
    console.log('You wake up in a mysterious room with two doors in front of you.');
    this.askForChoice();
  }

  askForChoice() {
    rl.question('Choose a door (1/2): ', (choice) => {
      if (choice === '1') {
        this.door1();
      } else if (choice === '2') {
        this.door2();
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        this.askForChoice();
      }
    });
  }

  door1() {
    console.log('You open the first door and find a treasure chest. You win!');
    rl.close();
  }

  door2() {
    console.log('You open the second door and fall into a pit. Game over!');
    rl.close();
  }
}

const game = new Game();
game.start();
