import { useState } from "react";
import { LabelledInput } from "../signin/page";
import axios from "axios";

export default function Signup() {

    const[username,setUsername] = useState("")
        const[password,setPassword] = useState("")
    
      async function handleSubmit() {

        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/signup",{
                username,
                password
            })
            if(response){
                alert("Signup successful!");
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
    if (error.response) {
      alert(error.response.data.message || "Signup failed");
    } else {
      alert("Network error or server not reachable");
    }
    console.error("Signup error:", error);
  }  
      }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="harkirat@gmail.com" 
                        onChange={(e) => setUsername(e.target.value)} />
                        <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        onChange={handleSubmit}>Sign in</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}