function avg(b){
    var sum=0;
    for(let i=0;i<b.length;i++)
        {
        sum=sum+b[i];
        }
    return sum/b.length;
}
const b=[2,3,4,5,6,7];
console.log(avg(b));