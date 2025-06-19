interface Usr {
    name: string;
    age: number;
}

function sumOfAge(user1: Usr, user2: Usr){
    return user1.age + user2.age;
}

const age = sumOfAge({name:"rinku",age:20},{ name: "john", age:39});

console.log(age);