const arr = [1,20,31,150,39,2,850,10];
let min = arr [0];
let max = arr [0];
for (let i=1;i< arr.length;i++) {
if (min >arr[i]) {
 min = arr[i];
}
if (max < arr[i])
{
 max = arr[i];
}
}
console.log ("The Lowest Score is:",min);
console.log ("The Highest Score is:",max);