const user1 = new Map()

user1.set(1, "rinku");
user1.set(2,"babul");

const user2 = user1.get(1);
console.log(user2);

user1.delete(1);

console.log(user1);