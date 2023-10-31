"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Define exchange rates (e.g., 1 USD to other currencies)
var exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 113.66,
    PKR: 74.38,
};
function displayCurrencies() {
    console.log('Available currencies:');
    for (var currency in exchangeRates) {
        console.log(currency);
    }
}
function convertCurrency() {
    displayCurrencies();
    rl.question('Enter the amount to convert: ', function (amountStr) {
        var amount = parseFloat(amountStr);
        if (isNaN(amount) || amount < 0) {
            console.log('Please enter a valid amount.');
            convertCurrency();
            return;
        }
        rl.question('Enter the source currency (e.g., USD): ', function (fromCurrency) {
            rl.question('Enter the target currency (e.g., PKR): ', function (toCurrency) {
                if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
                    console.log('Invalid currency codes. Please try again.');
                    convertCurrency();
                    return;
                }
                var convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
                console.log("".concat(amount, " ").concat(fromCurrency, " is equal to ").concat(convertedAmount.toFixed(2), " ").concat(toCurrency));
                rl.close();
            });
        });
    });
}
convertCurrency();
