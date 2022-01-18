import { Profile, Session } from "next-auth";
import {
    getUserByIdQuery,
    getUserByProviderAccountIdQuery,
    getUserByEmailQuery,
    getVerificationRequestQuery,
} from "./queries";
import { v4 as uuid } from "uuid";
import argon2 from "argon2";

/** @return { import("next-auth/adapters").Adapter } */
export default function SanityAdapter(client, options = {}) {
    return {
        displayName: "Sanity",

        async createUser(profile) {
            const user = await client.create({
                _id: `user.${uuid()}`,
                _type: "user",
                email: profile.email,
                name: profile.name,
                image: profile.image,
            });

            return {
                id: user._id,
                ...user,
            };
        },
        async getUser(id) {
            const user = await client.fetch(getUserByIdQuery, {
                id,
            });

            if (!user) return null;

            return {
                id: user._id,
                ...user,
            };
        },
        async getUserByEmail(email) {
            if (!email) return null;

            const user = await client.fetch(getUserByEmailQuery, {
                email,
            });

            if (!user) return null;

            return {
                id: user._id,
                ...user,
            };
        },
        async getUserByAccount({ providerAccountId, providerId }) {
            const account = await client.fetch(
                getUserByProviderAccountIdQuery,
                {
                    providerId,
                    providerAccountId: String(providerAccountId),
                }
            );

            if (!account) return null;

            return {
                id: account?.user._id,
                ...account?.user,
            };
        },
        async updateUser(user) {
            const { id, name, email, image } = user;

            const newUser = await client
                .patch(id)
                .set({
                    name,
                    email,
                    image,
                })
                .commit();

            return {
                id: newUser._id,
                ...newUser,
            };
        },
        async deleteUser(userId) {
            return;
        },
        async linkAccount(
            userId,
            providerId,
            providerType,
            providerAccountId,
            refreshToken,
            accessToken,
            accessTokenExpires
        ) {
            await client.create({
                _type: "account",
                providerId,
                providerType,
                providerAccountId: `${providerAccountId}`,
                refreshToken,
                accessToken,
                accessTokenExpires,
                user: {
                    _type: "reference",
                    _ref: userId,
                },
            });
        },
        async unlinkAccount({ providerAccountId, provider }) {
            return;
        },
        async createSession() {
            logger.warn("[createSession] method not implemented");

            return {};
        },

        async getSession() {
            logger.warn("[getSession] method not implemented");
            return {};
        },

        async updateSession() {
            logger.warn("[updateSession] method not implemented");
            return {};
        },

        async deleteSession() {
            logger.warn("[deleteSession] method not implemented");
        },
        async createVerificationToken({ identifier, expires, token }) {
            await client.create({
                _type: "verification-request",
                identifier,
                token: await hashToken(token),
                expires: new Date(Date.now() + provider.maxAge * 1000),
            });

            await provider.sendVerificationRequest({
                identifier,
                token,
                url,
                baseUrl: appOptions.baseUrl,
                provider,
            });
        },
        async getVerificationRequest(identifier, token) {
            const verificationRequest = await client.fetch(
                getVerificationRequestQuery,
                {
                    identifier,
                }
            );

            if (!verificationRequest) return null;

            const checkToken = await argon2.verify(
                verificationRequest.token,
                `${token}${secret}`
            );

            if (!checkToken) return null;

            if (verificationRequest.expires < new Date()) {
                await client.delete(verificationRequest._id);

                return null;
            }

            return {
                id: verificationRequest._id,
                ...verificationRequest,
            };
        },
    };
}
