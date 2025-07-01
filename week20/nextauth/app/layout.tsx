import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


export default function Home(){
  return <SessionProvider>
            <RealHome/>
   </SessionProvider>
}

function RealHome(){
  const Session = useSession();

  return <div>
    {sessionStorage.status === 'authenticated' && <button onClick={() => signOut()}>Logout</button>}
    {sessionStorage.status === 'unauthenticated' && <button onClick={() => signIn()}>signIn</button>}
  </div>
}