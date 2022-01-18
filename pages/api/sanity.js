import Credentials from "next-auth/providers/credentials";
import { getUserByEmailQuery } from "./auth/queries";
import argon2 from "argon2";
import { v4 as uuid } from "uuid";
import createClient from "@sanity/client";

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: "2021-08-31",
    useCdn: process.env.NODE_ENV === "production",
});

export async function getSanityContent({ query, variables = {} }) {
    const { data } = await fetch(
        "https://1i39y7gb.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        }
    ).then((response) => response.json());

    return data;
}

export const signUpHandler = (client) => async (req, res) => {
    const { email, password, name, image } = req.body;

    const user = await client.fetch(getUserByEmailQuery, {
        email,
    });

    if (user) {
        res.json({ error: "User already exist" });
        return;
    }

    const newUser = await client.create({
        _id: `user.${uuid()}`,
        _type: "user",
        email,
        password: await argon2.hash(password),
        name,
        image,
    });

    res.json({
        email: newUser.email,
        name: newUser.name,
        image: newUser.image,
    });
};

export default signUpHandler(client);

export const SanityCredentials = (client) =>
    Credentials({
        name: "Credentials",
        id: "sanity-login",
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
        async authorize(credentials) {
            const user = await client.fetch(getUserByEmailQuery, {
                email: credentials.email,
            });

            if (!user) throw new Error("Email does not exist");

            if (await argon2.verify(user.password, credentials.password)) {
                return {
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    id: user.id,
                };
            }

            throw new Error("Password Invalid");
        },
    });
