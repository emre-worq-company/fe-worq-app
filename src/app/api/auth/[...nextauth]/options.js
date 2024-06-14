import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import userService from "@/services/UserService";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("GoogleProvider profile", profile)
        return {
            ...profile,
            role: profile.role ?? "user",
            id: profile.sub
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email:",
          type: "email",
        },
        password: {
          label: "Password:",
          type: "password",
        }
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        const { email, password } = credentials

        const user = await userService(email, password);

        console.log("user", user);

        // If no error and we have user data, return it
        if (user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("jwt", token, user);
      if (user) {
        token.name = user.name ? user.name : user.userDetail.name;
        token.email = user.email ? user.email : user.userDetail.email;
        token.role = user.role ? user.role : user.userDetail.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      console.log("session", session, token);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}