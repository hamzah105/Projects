import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countWordsAndCharacters(text: string) {
  // Remove leading and trailing whitespaces and extra whitespaces
  const cleanedText = text.trim().replace(/\s+/g, ' ');

  const words = cleanedText.split(' ');
  const wordCount = words.length;

  // Calculate character count without whitespaces
  const characterCount = cleanedText.replace(/\s/g, '').length;

  return { wordCount, characterCount };
}

function startWordCounter() {
  rl.question('Enter an English paragraph: ', (paragraph) => {
    const { wordCount, characterCount } = countWordsAndCharacters(paragraph);
    console.log(`Number of words: ${wordCount}`);
    console.log(`Number of characters (excluding spaces): ${characterCount}`);
    rl.close();
  });
}

startWordCounter();
