"use strict";
function getMax(num) {
    let maxNumber = -Infinity; // cleaner than -1000000000
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maxNumber)
            maxNumber = num[i];
    }
    return maxNumber;
}
function filterUsers(users) {
    let ans = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}
const filteredUsers = filterUsers([
    {
        firstName: "rinku",
        lastName: "sahoo",
        age: 21
    }
]);
console.log(filteredUsers);
