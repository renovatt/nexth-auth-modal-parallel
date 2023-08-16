import { z } from 'zod'
import { loginSchema, registerSchema } from '@/zod'
import { ReactNode } from 'react'

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

export type LoginSchemaProps = z.infer<typeof loginSchema>
export type RegisterSchemaProps = z.infer<typeof registerSchema>
