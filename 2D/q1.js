const inputArray = ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
let totalCharacters = 0;
for (let i = 0; i < inputArray.length; i++) {
 totalCharacters += inputArray[i].length;
}
console.log(totalCharacters);