import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Quiz {
  questions: string[] = [
    'What is the capital of France?',
    'Which planet is known as the Red Planet?',
    'What is the largest mammal on Earth?',
  ];

  answers: string[] = ['Paris', 'Mars', 'Blue Whale'];

  userAnswers: string[] = [];

  currentQuestionIndex: number = 0;

  constructor() {}

  start() {
    console.log('Welcome to the Quiz System!\n');
    this.askQuestion(this.currentQuestionIndex);
  }

  askQuestion(index: number) {
    if (index >= this.questions.length) {
      this.showResults();
      return;
    }

    rl.question(`${this.questions[index]}: `, (answer) => {
      this.userAnswers.push(answer);
      this.currentQuestionIndex++;
      this.askQuestion(this.currentQuestionIndex);
    });
  }

  showResults() {
    console.log('\nQuiz Results:');
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      const correctAnswer = this.answers[i];
      const userAnswer = this.userAnswers[i];
      const isCorrect = correctAnswer.toLowerCase() === userAnswer.toLowerCase();

      console.log(`${i + 1}. ${question}`);
      console.log(`   Your Answer: ${userAnswer}`);
      console.log(`   Correct Answer: ${correctAnswer}`);
      console.log(`   Result: ${isCorrect ? 'Correct' : 'Incorrect'}`);
      console.log('\n');
    }

    rl.close();
  }
}

const quiz = new Quiz();
quiz.start();
