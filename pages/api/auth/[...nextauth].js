import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import SanityAdapter from "./adapter";
import Credentials from "next-auth/providers/credentials";
import { client, SanityCredentials } from "../sanity";
import {
    getUserByIdQuery,
    getUserByProviderAccountIdQuery,
    getUserByEmailQuery,
    getVerificationRequestQuery,
} from "./queries";
import argon2 from "argon2";

export default NextAuth({
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials, req) {
                const user = await client.fetch(getUserByEmailQuery, {
                    email: credentials.email,
                });

                if (!user) throw new Error("Email does not exist");
                console.log(user);

                if (await argon2.verify(user.password, credentials.password)) {
                    return {
                        email: user.email,
                        name: user.name,
                        image: user.recordings,
                        id: user.id,
                        test: "ueyee",
                    };
                }

                return null;
            },
        }),
        // SanityCredentials(client),
    ],
    session: { strategy: "jwt" },
    secret: process.env.SECRET,
    // session: {
    //     strategy: "jwt",
    // },
    // callbacks: {
    //     async jwt({ token, user }) {
    //         // Persist the OAuth access_token to the token right after signin
    //         if (user) {
    //             const { accessToken, ...rest } = user;
    //             token.accessToken = accessToken;
    //             token.user = rest;
    //         }
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         // Send properties to the client, like an access_token from a provider.

    //         session.user = {
    //             ...session.user,
    //             ...token.user,
    //         };
    //         session.accessToken = token.accessToken;
    //         console.log("session", session);
    //         return session;
    //     },
    // },
    theme: {
        colorScheme: "light",
    },
    // adapter: SanityAdapter(client),
});
