import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        console.log(username, password);

        const user = {
          name: "Rinku",
          id: 1,
          username:"harikirat"
        }

        if(user) return user;
        else return null'

        // TODO: Add logic to verify user here

       // return null; // or return { id: "1", name: "User" } if valid
      },
    }),
  ],
});

export { handler as GET, handler as POST };
