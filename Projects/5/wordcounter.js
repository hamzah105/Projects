"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function countWordsAndCharacters(text) {
    // Remove leading and trailing whitespaces and extra whitespaces
    var cleanedText = text.trim().replace(/\s+/g, ' ');
    var words = cleanedText.split(' ');
    var wordCount = words.length;
    // Calculate character count without whitespaces
    var characterCount = cleanedText.replace(/\s/g, '').length;
    return { wordCount: wordCount, characterCount: characterCount };
}
function startWordCounter() {
    rl.question('Enter an English paragraph: ', function (paragraph) {
        var _a = countWordsAndCharacters(paragraph), wordCount = _a.wordCount, characterCount = _a.characterCount;
        console.log("Number of words: ".concat(wordCount));
        console.log("Number of characters (excluding spaces): ".concat(characterCount));
        rl.close();
    });
}
startWordCounter();
