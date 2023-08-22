import { z } from 'zod'
import { ReactNode } from 'react'
import { loginSchema, registerSchema } from '@/zod'

export type RouterLinksProps = {
  text: string
  href: string
  onClick?: () => void
}

export type NavbarTypeProps = {
  openModal: () => void
}

export type NavbarMobileTypeProps = {
  modal: boolean
  closeModal: () => void
}

export type ContainerTypeProps = {
  children: ReactNode
}

export type User = {
  id: string
  username: string
  name: string
  email: string
  image?: string
}

type CredentialKeys = 'email' | 'password'
export type LoginSchemaProps = z.infer<typeof loginSchema>
export type RegisterSchemaProps = z.infer<typeof registerSchema>
export type CredentialsProps = Record<CredentialKeys, string> | undefined
