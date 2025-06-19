
interface Address {
    city: string;
    country: string;
    pincode: number;
}


interface User {
    name: string;
    age: number;
    address: Address
}

interface Office {
    address: Address
}

let employee: User = {
    name: "rinku",
    age: 5,
    address: {
        city: "cuttack",
        country: "india",
        pincode: 754023,
    }
}

function isOk(user: User): any{
   if(user.age < 18) return false;
   return true
}

console.log(isOk(employee));