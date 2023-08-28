/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from '@/lib/prisma'
import * as bcrypt from 'bcrypt'
import { RegisterSchemaProps } from '@/@types'
import { BadRequesError } from '@/errors'

export async function createUser(body: RegisterSchemaProps) {
  const { username, email, password } = body

  if (!username) throw new BadRequesError('Nome de usuário inválido')
  if (!email) throw new BadRequesError('Este não é um e-mail válido.')

  const isExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (isExists) throw new BadRequesError('Usuário já existe')

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  })

  const { password: _hashedPassword, ...result } = user

  return { result, message: 'Usuário criado com sucesso!' }
}
