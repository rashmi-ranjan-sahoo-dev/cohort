interface People {
    name: string,
    age: number,
    greet: () => string,
}

let people: People = {
    name: "rinku",
    age:21,
    greet: ():string =>{
        return "hello"
    }
}

console.log(people );

console.log(people.greet())