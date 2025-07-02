// app/page.tsx or wherever your home is

import { getServerSession } from "next-auth";


export default async function Home() {

  const session = await getServerSession();
  return (
    <div>
         {JSON.stringify(session)};
    </div>
   
  );
}
