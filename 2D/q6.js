const a=['edstem','techn'];
let b='';
for(let i=0;i<a.length;i++)
    {
    for(let j=0;j<a[i].length;j++)
        {
        b=b+a[i][j];
        }
    if(i<a.length-1)
        b=b+'_';
    }   
console.log(b);