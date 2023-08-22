import { User } from '@/@types'
import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export const callbacks = {
  async jwt({ token, user }: { token: JWT; user: any }) {
    return { ...token, ...user }
  },
  async session({ session, token }: { session: Session; token: JWT }) {
    session.user = token as User
    console.log(session.user)
    return session
  },
}