/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CredentialsProps,
  RegisterSchemaProps,
  LoginSchemaProps,
} from '@/@types'

const url = process.env.NEXT_PUBLIC_URL ?? ''

export const credencialsLoginUser = async (data: CredentialsProps) => {
  try {
    const res = await fetch(`${url}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const json = await res.json()

    if (res.ok) {
      return { response: json }
    } else {
      throw new Error(json.error)
    }
  } catch (error: any) {
    return { error: error.message }
  }
}

export const loginUser = async (data: LoginSchemaProps) => {
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const json = await res.json()

    if (res.ok) {
      return { response: json }
    } else {
      throw new Error(json.error)
    }
  } catch (error: any) {
    return { error: error.message }
  }
}

export const registerUser = async (data: RegisterSchemaProps) => {
  try {
    const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const json = await res.json()

    if (res.ok) {
      return { response: json }
    } else {
      throw new Error(json.error)
    }
  } catch (error: any) {
    return { error: error.message }
  }
}
