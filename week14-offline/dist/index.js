"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "rinku", age: 20 }, { name: "john", age: 39 });
console.log(age);
