interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

// Pick API


type UpdateProps = Pick<User, 'name' | 'age' | 'email'>


function updateUser(updatedUser: UpdateProps){
    console.log(updatedUser.name);
}

updateUser({name:'rinku',age:21,email:'rinkuasahoo04@gmail.com'});