// import type { APIRoute } from 'astro';
// import NextAuth, { NextAuthOptions } from 'next-auth';
// // import Credentials from '@auth/core/providers/credentials';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import Auth from '@auth/core';


// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export const authOptions: NextAuthOptions = {
//   // https://next-auth.js.org/configuration/providers/oauth
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         // username: { label: "Username" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, request) {
//         console.log("credentials", credentials?.password);
//         console.log("request", await request);

//         const user = { id: "1", name: "Issenn" };
//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user
//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           return null
//         }
//         // const response = await fetch(request);
//         // if (!response.ok) return null;
//         // return (await response.json()) ?? null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token }) {
//       token.userRole = "admin"
//       return token
//     },
//   },
// }

// export const post: APIRoute = ({ request } : { request: Request }) => {
//   return NextAuth(authOptions)
// }
