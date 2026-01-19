import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" && user.email) {
        try {
          // Store user in Convex
          await convex.mutation(api.users.storeGoogleUser, {
            email: user.email,
            name: user.name || user.email.split("@")[0],
            picture: user.image || undefined,
            emailVerified: (profile as any)?.email_verified || false,
          });
        } catch (error) {
          console.error("Error storing user in Convex:", error);
          // Don't block sign in if storage fails
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export const { GET, POST } = handlers;
