// app/page.tsx or wherever your home is
'use client';

import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

function RealHome() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {status === 'authenticated' && (
        <>
          <p>Welcome, {session?.user?.name || 'User'}!</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}

      {status === 'unauthenticated' && (
        <button onClick={() => signIn(undefined, { callbackUrl: '/' })}>Login</button>
      )}
    </div>
  );
}
