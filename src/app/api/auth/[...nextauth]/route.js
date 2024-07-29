import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    // Opsi lainnya bisa ditambahkan di sini
};

// Ekspor metode POST untuk otentikasi
export { NextAuth as POST };