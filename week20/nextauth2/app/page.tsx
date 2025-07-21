/* eslint-disable @next/next/no-async-client-component */


import { getServerSession } from "next-auth";
import { SessionProvider, signOut, useSession, signIn } from "next-auth/react";


// export default function Home(){
//   return <SessionProvider>
//     <RealHome/>
//   </SessionProvider>
// }


// function RealHome(){
//   const session = useSession();

//     return (
//       <div>
//         {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}
//           {session.status === "unauthenticated" && <button onClick={() => signIn()}>Login</button>}
//       </div>
//     )
// }

export default async function Home() {

  const session = await getServerSession
   return <div>
        {JSON.stringify(session)}
   </div>
}