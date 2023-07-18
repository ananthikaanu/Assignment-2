const arr=[10,20,30,10,42,30,-5];
var b={};
for(let i=0;i<arr.length;i++)
    {
    count=0;
    for(let j=0;j<arr.length;j++)
        { 
        if(arr[i]==arr[j]) 
            count++;
        }
    b[arr[i]]=count;
    if(count==1)
        console.log(arr[i])
    }
