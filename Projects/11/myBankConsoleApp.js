"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Account = /** @class */ (function () {
    function Account(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('Insufficient funds.');
        }
    };
    Account.prototype.displayBalance = function () {
        console.log("Account Number: ".concat(this.accountNumber));
        console.log("Balance: $".concat(this.balance.toFixed(2)));
    };
    return Account;
}());
var MyBank = /** @class */ (function () {
    function MyBank() {
        this.accounts = [];
    }
    MyBank.prototype.createAccount = function (accountNumber, initialBalance) {
        var account = new Account(accountNumber, initialBalance);
        this.accounts.push(account);
        console.log('Account created successfully.');
    };
    MyBank.prototype.findAccount = function (accountNumber) {
        return this.accounts.find(function (account) { return account.accountNumber === accountNumber; });
    };
    return MyBank;
}());
var myBank = new MyBank();
var rl = readline.createInterface({
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
    rl.question('Enter your choice: ', function (choice) {
        handleChoice(parseInt(choice));
    });
}
function handleChoice(choice) {
    switch (choice) {
        case 1:
            rl.question('Enter account number: ', function (accountNumber) {
                rl.question('Enter initial balance: ', function (initialBalance) {
                    myBank.createAccount(parseInt(accountNumber), parseFloat(initialBalance));
                    displayMenu();
                });
            });
            break;
        case 2:
            rl.question('Enter account number: ', function (accountNumber) {
                rl.question('Enter deposit amount: ', function (depositAmount) {
                    var depositAccount = myBank.findAccount(parseInt(accountNumber));
                    if (depositAccount) {
                        depositAccount.deposit(parseFloat(depositAmount));
                        console.log('Deposit successful.');
                        displayMenu();
                    }
                    else {
                        console.log('Account not found.');
                        displayMenu();
                    }
                });
            });
            break;
        case 3:
            rl.question('Enter account number: ', function (accountNumber) {
                rl.question('Enter withdrawal amount: ', function (withdrawAmount) {
                    var withdrawAccount = myBank.findAccount(parseInt(accountNumber));
                    if (withdrawAccount) {
                        withdrawAccount.withdraw(parseFloat(withdrawAmount));
                        displayMenu();
                    }
                    else {
                        console.log('Account not found.');
                        displayMenu();
                    }
                });
            });
            break;
        case 4:
            rl.question('Enter account number: ', function (accountNumber) {
                var displayAccount = myBank.findAccount(parseInt(accountNumber));
                if (displayAccount) {
                    displayAccount.displayBalance();
                    displayMenu();
                }
                else {
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
