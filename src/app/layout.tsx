import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Capsule | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  login,
}: {
  children: React.ReactNode
  login: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {login}
        <Header />
        {children}
      </body>
    </html>
  )
}
