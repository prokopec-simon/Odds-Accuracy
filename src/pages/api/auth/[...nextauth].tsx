import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return process.env
        .NEXTAUTH_ALLOWED_EMAILS!.split(",")
        .includes(user.email!);
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
