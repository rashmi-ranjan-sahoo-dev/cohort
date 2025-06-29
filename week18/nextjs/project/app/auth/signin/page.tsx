import axios from "axios";
import { useState } from "react";

export default function Signin() {

    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")

   async function handleSubmit() {
      try{
        const response = await axios.post("http://localhost:3000/api/v1/signin",{
            username,
            password
        })

        alert("Login successful!")

        console.log("response:", response.data)

        localStorage.setItem("token",response.data.token)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch(error: any){
        if(error.response){
            alert(error.response.data.message|| "Login failed")
        } else {
            alert(" Network error or server not reachable")
        }

        console.error("Login error:", error);
      }
   }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="harkirat@gmail.com" onChange={(e) => setUsername(e.target.value)} />
                        <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => setPassword(e.target.validationMessage)} />
                        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        onClick={handleSubmit}
                        >Sign in</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}

export interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void
}

 export function LabelledInput({ label, placeholder, type ,onChange }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required onChange={onChange} />
    </div>
}