import { randomUUID } from "crypto";
import { User, type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password) return null;
        
        const user: User = { 
          token: randomUUID(),
          id: randomUUID(), 
          name: credentials.username,
          group: "",
        };
        
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login/",
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, //30 days
    updateAge: 24 * 60 * 60, //24 h
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      session.accessToken = token.accessToken as string;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
