let x: number = 1;

console.log(x);

function grt(firstName:string){
    console.log("Hello"+firstName);
}

grt("rinku")

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));

function isLigal(a: number): any{
    if( a < 18) return false;
    return true;
}

console.log(isLigal(14));

function delayedCall(fn: () => void) {
    setInterval(fn,1000);
}

delayedCall(function(){
    console.log("hello")
})

function getFiEle<T>(arr:T[]){
    return arr[0];
}

const el = getFiEle(["rinku","sahoo"]);
console.log(el.toLowerCase());