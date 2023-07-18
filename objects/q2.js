let input = "Ananthika";
let Obj = {};
for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (Obj[char]) {
    Obj[char] += 1;
  } else {
    Obj[char] = 1;
  }
}
console.log(Obj);