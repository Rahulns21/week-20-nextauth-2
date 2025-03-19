import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username"},
                password: { label: "Password", type: "password", placeholder: "password" }
            },

            async authorize(credentials, req) {
                return {
                    name: "rahul",
                    id: "1",
                    email: "rahul@gmail.com"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;