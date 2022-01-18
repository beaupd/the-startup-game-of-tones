import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import SanityAdapter from "./adapter";
import { client, SanityCredentials } from "../sanity";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        SanityCredentials(client),
    ],
    session: {
        jwt: true,
    },
    secret: process.env.SECRET,
    adapter: SanityAdapter(client),
});
