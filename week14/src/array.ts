function getMax(num: number[]): number {
    let maxNumber = -Infinity; // cleaner than -1000000000
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maxNumber) maxNumber = num[i];
    }
    return maxNumber;
}

// Alternate shorter version
// const getMax = (num: number[]) => Math.max(...num);

interface Address {
    city: string;
    pincode: number;
}

interface U {
    name: string;
    age: number;
    addresses: Address[];
}

interface Usr {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUsers(users: Usr[]) {
    let ans: Usr[] = [];
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
