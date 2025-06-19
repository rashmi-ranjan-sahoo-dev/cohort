"use strict";
let employee = {
    name: "rinku",
    age: 5,
    address: {
        city: "cuttack",
        country: "india",
        pincode: 754023,
    }
};
function isOk(user) {
    if (user.age < 18)
        return false;
    return true;
}
console.log(isOk(employee));
