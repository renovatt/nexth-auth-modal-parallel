import prisma from '@/lib'
// import * as bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import { RegisterSchemaProps } from '@/@types'
import { BadRequesError, InternalError } from '@/errors'
// import { verifyEmail, verifyValidPassword } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body: RegisterSchemaProps = await request.json()

    const { username, email } = body

    // const isValidePassword = verifyValidPassword(userPassword)

    if (!username) throw new BadRequesError('Nome de usuário inválido')
    if (!email) throw new BadRequesError('Este não é um e-mail válido.')

    // if (isValidePassword.length)
    //   throw new BadRequesError(isValidePassword.join(' '))

    const isExists = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })

    if (isExists) throw new BadRequesError('Usuário já existe')

    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
        // password: await bcrypt.hash(body.password, 10),
      },
    })

    const { password, ...result } = user

    return NextResponse.json({ result, message: 'Usuário criado com sucesso!' })
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
