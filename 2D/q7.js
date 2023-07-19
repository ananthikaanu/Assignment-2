const arr=[[1,2,3],[4,5,6],[7,8,9]];
var b=0;
var c=0;
var j
for(let i=0;i<arr.length;i++) 
    {
        b=b+arr[i][i];
        j=(arr[i].length-i-1);
        c=c+arr[i][j];
    }
console.log('First diagonal sum:', b);
console.log('Second diagonal sum:',c);
console.log(c-b);