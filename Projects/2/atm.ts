import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userData = {
  userId: '12345',
  userPin: '54321',
  balance: 1000,
};

function displayMenu() {
  console.log('\nATM Menu:');
  console.log('1. Check Balance');
  console.log('2. Withdraw Money');
  console.log('3. Deposit Money');
  console.log('4. Exit');
}

function startATM() {
  console.log('Welcome to the ATM.');
  rl.question('Enter your User ID: ', (userId) => {
    rl.question('Enter your PIN: ', (pin) => {
      if (userId === userData.userId && pin === userData.userPin) {
        console.log('Login successful!');
        showOptions();
      } else {
        console.log('Invalid User ID or PIN. Please try again.');
        startATM();
      }
    });
  });
}

function showOptions() {
  displayMenu();
  rl.question('Select an option (1-4): ', (choice) => {
    switch (choice) {
      case '1':
        console.log(`Your balance is $${userData.balance}`);
        showOptions();
        break;
      case '2':
        rl.question('Enter the amount to withdraw: ', (amount) => {
          const withdrawAmount = parseFloat(amount);
          if (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount > userData.balance) {
            console.log('Invalid amount. Please try again.');
          } else {
            userData.balance -= withdrawAmount;
            console.log(`You have withdrawn $${withdrawAmount}. Your new balance is $${userData.balance}`);
          }
          showOptions();
        });
        break;
      case '3':
        rl.question('Enter the amount to deposit: ', (amount) => {
          const depositAmount = parseFloat(amount);
          if (isNaN(depositAmount) || depositAmount <= 0) {
            console.log('Invalid amount. Please try again.');
          } else {
            userData.balance += depositAmount;
            console.log(`You have deposited $${depositAmount}. Your new balance is $${userData.balance}`);
          }
          showOptions();
        });
        break;
      case '4':
        console.log('Thank you for using the ATM. Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please select a valid option (1-4).');
        showOptions();
        break;
    }
  });
}

startATM();
