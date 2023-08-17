'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

type NextAuthProviderProps = {
  children: ReactNode
}
const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider
