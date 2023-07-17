const list=['HTML','CSS','JAVA','JS'];
var newList=list[0];
for(let i=1;i<list.length;i++)
    {
    newList=newList+','+list[i];
    }
console.log(newList);