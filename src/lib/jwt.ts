import jwt, { JwtPayload } from 'jsonwebtoken'

interface SignOption {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: '1h',
}

export function signJwtAcessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION,
) {
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY
  const token = jwt.sign(payload, secretKey ?? '', options)
  return token
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY
    const decode = jwt.verify(token, secretKey ?? '')
    return decode as JwtPayload
  } catch (error) {
    return null
  }
}
