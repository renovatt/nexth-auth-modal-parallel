import * as bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { signJwtAcessToken } from '@/lib/jwt'
import { LoginSchemaProps } from '@/@types'
import { BadRequesError, InternalError, NotFoundError } from '@/errors'

export async function POST(request: Request) {
  try {
    const body: LoginSchemaProps = await request.json()

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })

    if (!user) throw new NotFoundError('Usuário não encontrado.')

    const passwordMatch = await bcrypt.compare(body.password, user.password)
    if (!passwordMatch) throw new BadRequesError('Senha está incorreta.')

    if (user && passwordMatch) {
      const { password, ...userWithouPass } = user
      const accessToken = signJwtAcessToken(userWithouPass)

      const result = { ...userWithouPass, accessToken }

      return new Response(JSON.stringify({ result, message: 'Bem vindo, ' }))
    }
  } catch (error: any) {
    if (!error.statusCode) error = new InternalError('Internal server error')

    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: error.statusCode,
      },
    )
  }
}
