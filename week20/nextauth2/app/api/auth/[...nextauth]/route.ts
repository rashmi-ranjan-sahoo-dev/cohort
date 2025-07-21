/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "harkirat@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        // 🔐 Replace this with real DB check
        const user = {
            id: "1",
            name: "Harkirat",
            email: "harkirat@gmail.com"
          };

          if(user){
            return user;
          } else {
            return null;
          }
      }
    }),

     GoogleProvider({
      clientId:"ads",
      clientSecret:"soainr"
    }),
    FacebookProvider({
      clientId: "n;aljiorn",
      clientSecret: "a'kjisor"
    }),
  ],
  secret: "12345"
});

export { handler as GET, handler as POST };
