import Credentials from '@auth/core/providers/credentials';

export default {
  providers: [
    Credentials({
      credentials: {
        // username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        // console.log("credentials", credentials.password);
        // console.log("request", await request.json());

        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user
        // } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
        // }
        // const response = await fetch(request);
        // if (!response.ok) return null;
        // return (await response.json()) ?? null;
      },
    }),
  ],
}
