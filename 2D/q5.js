const arr=['assignment','problem','media','upload'];
let b=[];
for(let i=0;i<arr.length;i++)
   {
     let j=arr[i].length-1;
       if(arr[i][0]=='a' || arr[i][j]=='a')
 b.push(arr[i]);
}
console.log(b);