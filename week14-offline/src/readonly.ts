// readonly

// type User2 = {
//   readonly name: string;
//   readonly age: number;
// }

type User2 = {
    name: string;
    age: number;
}

const user: Readonly<User2> ={
    name: 'john',
    age: 21
}

console.log(user);

