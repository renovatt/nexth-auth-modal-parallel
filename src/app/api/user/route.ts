import { NextResponse } from 'next/server'
import { ApiError, InternalError } from '@/errors'
import { RegisterSchemaProps } from '@/@types'
import { createUser } from '@/controllers/createUser'

export async function POST(request: Request) {
  try {
    const body: RegisterSchemaProps = await request.json()
    const response = await createUser(body)
    return NextResponse.json(response)
  } catch (error) {
    if (error instanceof ApiError) {
      return new Response(
        JSON.stringify({
          error: error.message,
        }),
        {
          status: error.statusCode,
        },
      )
    }

    const internalError = new InternalError('Erro interno.')
    return new Response(
      JSON.stringify({
        error: internalError.message,
      }),
      {
        status: internalError.statusCode,
      },
    )
  }
}
