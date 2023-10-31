const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getNumber(prompt, callback) {
  rl.question(prompt, (input) => {
    const number = parseFloat(input);
    if (isNaN(number)) {
      console.log('Invalid input. Please enter a valid number.');
      getNumber(prompt, callback);
    } else {
      callback(number);
    }
  });
}

function calculator() {
  console.log('Command-line Calculator');
  
  getNumber('Enter the first number: ', (num1) => {
    getNumber('Enter the second number: ', (num2) => {
      console.log('Select an operation:');
      console.log('1. Add');
      console.log('2. Subtract');
      console.log('3. Multiply');
      console.log('4. Divide');

      rl.question('Enter the operation (1/2/3/4): ', (operation) => {
        switch (operation) {
          case '1':
            console.log(`Result: ${num1 + num2}`);
            break;
          case '2':
            console.log(`Result: ${num1 - num2}`);
            break;
          case '3':
            console.log(`Result: ${num1 * num2}`);
            break;
          case '4':
            if (num2 === 0) {
              console.log('Division by zero is not allowed.');
            } else {
              console.log(`Result: ${num1 / num2}`);
            }
            break;
          default:
            console.log('Invalid operation. Please select a valid operation (1/2/3/4).');
            break;
        }
        rl.close();
      });
    });
  });
}

calculator();
