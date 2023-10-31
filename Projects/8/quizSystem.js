"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var Quiz = /** @class */ (function () {
    function Quiz() {
        this.questions = [
            'What is the capital of France?',
            'Which planet is known as the Red Planet?',
            'What is the largest mammal on Earth?',
        ];
        this.answers = ['Paris', 'Mars', 'Blue Whale'];
        this.userAnswers = [];
        this.currentQuestionIndex = 0;
    }
    Quiz.prototype.start = function () {
        console.log('Welcome to the Quiz System!\n');
        this.askQuestion(this.currentQuestionIndex);
    };
    Quiz.prototype.askQuestion = function (index) {
        var _this = this;
        if (index >= this.questions.length) {
            this.showResults();
            return;
        }
        rl.question("".concat(this.questions[index], ": "), function (answer) {
            _this.userAnswers.push(answer);
            _this.currentQuestionIndex++;
            _this.askQuestion(_this.currentQuestionIndex);
        });
    };
    Quiz.prototype.showResults = function () {
        console.log('\nQuiz Results:');
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            var correctAnswer = this.answers[i];
            var userAnswer = this.userAnswers[i];
            var isCorrect = correctAnswer.toLowerCase() === userAnswer.toLowerCase();
            console.log("".concat(i + 1, ". ").concat(question));
            console.log("   Your Answer: ".concat(userAnswer));
            console.log("   Correct Answer: ".concat(correctAnswer));
            console.log("   Result: ".concat(isCorrect ? 'Correct' : 'Incorrect'));
            console.log('\n');
        }
        rl.close();
    };
    return Quiz;
}());
var quiz = new Quiz();
quiz.start();
