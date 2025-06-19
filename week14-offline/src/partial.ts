interface User1 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

// Pick API


type UpdateProps1 = Pick<User1, 'name' | 'age' | 'email'>

// Partial

// interface User {
//     name?:string;
//     age?: number;
//     email?: string;
// }

type UpdatePropsOptonal = Partial<UpdateProps1>

function updateUser1(updatedUser: UpdatePropsOptonal){
    console.log(updatedUser.name);
}

updateUser1({name:'rinku',age:21,});