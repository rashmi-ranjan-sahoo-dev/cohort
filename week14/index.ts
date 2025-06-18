let x: number = 1;

console.log(x);

function greet(firstName:string){
    console.log("Hello"+firstName);
}

greet("rinku")

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