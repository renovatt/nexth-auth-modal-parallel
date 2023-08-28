/* eslint-disable @typescript-eslint/no-unused-vars */
import { credencialsLoginUser } from '@/services'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const providers = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: {
        label: 'Email',
        type: 'email',
        placeholder: 'email@gmail.com',
      },
      password: {
        label: 'Password',
        type: 'password',
        placeholder: '******',
      },
    },
    async authorize(credentials, req) {
      const { response: user, error } = await credencialsLoginUser(credentials)

      if (user?.result) {
        return user?.result
      } else {
        return error ?? null
      }
    },
  }),
  GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? '',
  }),
]
