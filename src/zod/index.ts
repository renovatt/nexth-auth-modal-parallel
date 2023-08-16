import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email('Precisa ser um email válido.')
    .nonempty('Email obrigatório.'),

  password: z.string().nonempty('Senha é obrigatória.'),
})

export const registerSchema = z.object({
  name: z
    .string()
    .max(44, 'O nome é muito grande.')
    .nonempty('Nome é obrigatório.'),

  email: z
    .string()
    .email('Precisa ser um email válido.')
    .nonempty('Email obrigatório.'),

  password: z.string().nonempty('Senha é obrigatória.'),
})
