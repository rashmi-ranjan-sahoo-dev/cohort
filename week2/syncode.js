function sum(n)
{
    let ans = 0 ;
    for(let i = 1 ; i < n ; i++)
    {
        ans+=i;
    }
    return ans;
}
const ans1 = sum(100);
const ans2 = sum(1000);
const ans3 = sum(10000);
console.log(ans1)
console.log(ans2)
console.log(ans3)

console.log(ans1,"+",ans2,"+",ans3);