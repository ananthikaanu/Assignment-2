const strings = ["assignment", "problem", "media", "upload"];
const filteredStrings = strings.filter(function(string) {
  const firstChar = string.charAt(0);
  const lastChar = string.charAt(string.length - 1);
  return firstChar === 'a' || lastChar === 'a';
});
console.log(filteredStrings);