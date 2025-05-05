function sum(a,b) 
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mult(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

function call(a,b,fuctionalarrguments)
{
   return fuctionalarrguments(a,b);
}

console.log(call(1,2,div));