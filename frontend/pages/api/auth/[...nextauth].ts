import NextAuth, { NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

// const prisma = new PrismaClient();

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma) as Adapter<boolean>,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    })
  ],
  theme: {
    colorScheme: "dark",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // This method is not invoked when you persist sessions in a database.
    async jwt({ token, account }) {
      if (account) {
        console.log(account.provider)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account.access_token}`
        );
        const data = await res.json();
        console.log(data)
        const { jwt, user } = data;
        token.accessToken = jwt;
        token.userId = user.id;
      }
      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.accessToken = token.accessToken as string;
      session.user.userId = token.userId as number;
      return session;
    },
  },
}

export default NextAuth(authOptions)
