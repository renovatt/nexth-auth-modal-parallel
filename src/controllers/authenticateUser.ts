/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { signJwtAcessToken } from '@/lib/jwt'
import { LoginSchemaProps } from '@/@types'
import { BadRequesError, NotFoundError } from '@/errors'

export async function authenticateUser(body: LoginSchemaProps) {
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })

  if (!user) throw new NotFoundError('Usuário não encontrado.')

  const passwordMatch = await bcrypt.compare(body.password, user.password)
  if (!passwordMatch) throw new BadRequesError('Senha está incorreta.')

  const { password: _hashedPassword, ...userWithoutPass } = user
  const accessToken = signJwtAcessToken(userWithoutPass)

  return { result: { ...userWithoutPass, accessToken }, message: 'Bem vindo,' }
}
