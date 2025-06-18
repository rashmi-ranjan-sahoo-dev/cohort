function greet( user: {
    name: string,
    age: number
}) {
    console.log ( "hello " + user.name)
}

let user = {
    name: "harkirat",
    age: 21
}

greet(user)

// interface

interface userType {
    firstname: string,
    lastname: string,
    age: number
}

function g(user: userType){
   console.log(user)
}


let u: userType = {
    firstname: "harkirat",
    age: 21,
    lastname: "singh"
}

g(u);