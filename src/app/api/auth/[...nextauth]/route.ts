import NextAuth from 'next-auth/next'
import { providers } from '@/utils/next-auth/providers'
import { callbacks } from '@/utils/next-auth/callbacks'

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  providers,
  callbacks,
  pages: {
    signIn: '',
  },
})

export { handler as GET, handler as POST }
