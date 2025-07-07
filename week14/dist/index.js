"use strict";
let x = 1;
console.log(x);
function grt(firstName) {
    console.log("Hello" + firstName);
}
grt("rinku");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLigal(a) {
    if (a < 18)
        return false;
    return true;
}
console.log(isLigal(14));
function delayedCall(fn) {
    setInterval(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
function getFiEle(arr) {
    return arr[0];
}
const el = getFiEle(["rinku", "sahoo"]);
console.log(el.toLowerCase());
