import { ApiError, InternalError } from '@/errors'
import { LoginSchemaProps } from '@/@types'
import { authenticateUser } from '@/controllers/authenticateUser'

export async function POST(request: Request) {
  try {
    const body: LoginSchemaProps = await request.json()

    const response = await authenticateUser(body)

    return new Response(JSON.stringify(response))
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
