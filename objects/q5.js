function areAnagrams(word1, word2) {
if (word1.length !== word2.length) {
return false;
 }
const charCount1 = {};
const charCount2 = {};
for (let char of word1) {
charCount1[char] = (charCount1[char] || 0) + 1;
}
for (let char of word2) {
charCount2[char] = (charCount2[char] || 0) + 1;
}
for (let char in charCount1) {
if (charCount1[char] !== charCount2[char]) {
return false;
}
}
return true;
}
 console.log(areAnagrams("den", "end"))
 console.log(areAnagrams("hello", "heloo"))
 console.log(areAnagrams("malayalam", "malayalam"))
 console.log(areAnagrams("english", "english"))
    