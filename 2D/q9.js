const list=['HTML','CSS','JAVA','JS'];
let newList=list[0];
for(let i=1;i<list.length;i++)
    {
    newList=newList+','+list[i];
    }
console.log(newList);