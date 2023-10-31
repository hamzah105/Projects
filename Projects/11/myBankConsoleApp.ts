import * as readline from 'readline';

class Account {
  accountNumber: number;
  balance: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('Insufficient funds.');
    }
  }

  displayBalance() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: $${this.balance.toFixed(2)}`);
  }
}

class MyBank {
  accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  createAccount(accountNumber: number, initialBalance: number) {
    const account = new Account(accountNumber, initialBalance);
    this.accounts.push(account);
    console.log('Account created successfully.');
  }

  findAccount(accountNumber: number): Account | undefined {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }
}

const myBank = new MyBank();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log('\nMyBank Console App');
  console.log('1. Create Account');
  console.log('2. Deposit');
  console.log('3. Withdraw');
  console.log('4. Display Balance');
  console.log('5. Exit');
  rl.question('Enter your choice: ', (choice) => {
    handleChoice(parseInt(choice));
  });
}

function handleChoice(choice: number) {
  switch (choice) {
    case 1:
      rl.question('Enter account number: ', (accountNumber) => {
        rl.question('Enter initial balance: ', (initialBalance) => {
          myBank.createAccount(parseInt(accountNumber), parseFloat(initialBalance));
          displayMenu();
        });
      });
      break;
    case 2:
      rl.question('Enter account number: ', (accountNumber) => {
        rl.question('Enter deposit amount: ', (depositAmount) => {
          const depositAccount = myBank.findAccount(parseInt(accountNumber));
          if (depositAccount) {
            depositAccount.deposit(parseFloat(depositAmount));
            console.log('Deposit successful.');
            displayMenu();
          } else {
            console.log('Account not found.');
            displayMenu();
          }
        });
      });
      break;
    case 3:
      rl.question('Enter account number: ', (accountNumber) => {
        rl.question('Enter withdrawal amount: ', (withdrawAmount) => {
          const withdrawAccount = myBank.findAccount(parseInt(accountNumber));
          if (withdrawAccount) {
            withdrawAccount.withdraw(parseFloat(withdrawAmount));
            displayMenu();
          } else {
            console.log('Account not found.');
            displayMenu();
          }
        });
      });
      break;
    case 4:
      rl.question('Enter account number: ', (accountNumber) => {
        const displayAccount = myBank.findAccount(parseInt(accountNumber));
        if (displayAccount) {
          displayAccount.displayBalance();
          displayMenu();
        } else {
          console.log('Account not found.');
          displayMenu();
        }
      });
      break;
    case 5:
      console.log('Exiting MyBank Console App.');
      rl.close();
      break;
    default:
      console.log('Invalid choice. Please enter a valid option.');
      displayMenu();
  }
}

displayMenu();
