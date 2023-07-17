let str='madam';
const len=str.length;
var flag=0;
for (let i=0;i<len/2;i++)
{
if (str[i] !== str[len-1-i])
flag=1;
}
if(flag==1)
  console.log("It is not a palindrome");
else
  console.log("It is palindrome");