
let inputString = "I'm learning javascript basics";
let words = [];
let currentWord = "";
for (let i = 0; i < inputString.length; i++) {
  const currentChar = inputString[i];
  if (currentChar === " ") {
    words.push(currentWord);
 currentWord = "";
  } else {
currentWord += currentChar;
}
}
words.push(currentWord);
console.log(words);