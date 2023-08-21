import prisma from '@/lib'
import NextAuth from 'next-auth/next'
import { BadRequesError } from '@/errors'
import { credencialsLoginUser } from '@/services'
import GoogleProvider from 'next-auth/providers/google'
// import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: {
    //       label: 'Email',
    //       type: 'email',
    //       placeholder: 'email@gmail.com',
    //     },
    //     password: {
    //       label: 'Password',
    //       type: 'password',
    //       placeholder: '******',
    //     },
    //   },
    //   async authorize(credentials, req) {
    //     const { response: user, error } = await credencialsLoginUser(
    //       credentials,
    //     )

    //     if (user?.result) {
    //       return user?.result
    //     } else {
    //       return error ?? null
    //     }
    //   },
    // }),
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    //   profile(profile) {
    //     return {
    //       id: profile.id.toString(),
    //       name: profile.name || profile.login,
    //       username: profile.login,
    //       email: profile.email,
    //       image: profile.avatar_url,
    //     }
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async jwt({ token, user }) {
    //   return { ...token, ...user }
    // },
    // async session({ session, token }) {
    //   session.user = token as any
    //   return session
    // },
  },
  pages: {
    // signIn: '/views/login',
    signIn: '',
  },
})

export { handler as GET, handler as POST }
