"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.start = function () {
        console.log('Welcome to the Text-Based Adventure Game!\n');
        this.intro();
    };
    Game.prototype.intro = function () {
        console.log('You wake up in a mysterious room with two doors in front of you.');
        this.askForChoice();
    };
    Game.prototype.askForChoice = function () {
        var _this = this;
        rl.question('Choose a door (1/2): ', function (choice) {
            if (choice === '1') {
                _this.door1();
            }
            else if (choice === '2') {
                _this.door2();
            }
            else {
                console.log('Invalid choice. Please select 1 or 2.');
                _this.askForChoice();
            }
        });
    };
    Game.prototype.door1 = function () {
        console.log('You open the first door and find a treasure chest. You win!');
        rl.close();
    };
    Game.prototype.door2 = function () {
        console.log('You open the second door and fall into a pit. Game over!');
        rl.close();
    };
    return Game;
}());
var game = new Game();
game.start();
