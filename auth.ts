import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],
  debug: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Sign in attempt:", { user, account });
      return true;
    },
  },
  pages: {
    error: "/auth/error", // Optional: create this page to see errors
  },
});
