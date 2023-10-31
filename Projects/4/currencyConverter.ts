import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define exchange rates (e.g., 1 USD to other currencies)
const exchangeRates: { [key: string]: number } = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 113.66,
  PKR: 274.38,
};

function displayCurrencies() {
  console.log('Available currencies:');
  for (const currency in exchangeRates) {
    console.log(currency);
  }
}

function convertCurrency() {
  displayCurrencies();

  rl.question('Enter the amount to convert: ', (amountStr) => {
    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount < 0) {
      console.log('Please enter a valid amount.');
      convertCurrency();
      return;
    }

    rl.question('Enter the source currency (e.g., USD): ', (fromCurrency) => {
      rl.question('Enter the target currency (e.g., PKR): ', (toCurrency) => {
        if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
          console.log('Invalid currency codes. Please try again.');
          convertCurrency();
          return;
        }

        const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
        console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
        rl.close();
      });
    });
  });
}

convertCurrency();
