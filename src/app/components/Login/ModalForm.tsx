'use client'

import Input from '../Input'
import { useCallback, useState } from 'react'
import { loginSchema } from '@/zod'
import { FaSpinner } from 'react-icons/fa'
import ErrorFormMessage from '../ErrorFormMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { LoginSchemaProps } from '@/@types'
import { loginUser } from '@/services'
import { signIn } from 'next-auth/react'

const ModalForm = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const methods = useForm<LoginSchemaProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
  })

  const backPage = useCallback(() => {
    router.back()
  }, [router])

  const handleMessage = async (data: LoginSchemaProps) => {
    setLoading(true)

    try {
      const { response: user, error } = await loginUser(data)

      if (!user?.result) {
        console.log(error)
        // toast.error(error)
      }

      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '',
        redirect: false,
      })

      // toast.success(response.message)
      console.log('res: ', user?.result)

      methods.reset()
      setLoading(false)
      backPage()
    } catch (error) {
      console.log('Algum erro')
      // toast.error('Algum erro desconhecido aconteceu.')
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleMessage)}
        className="flex h-full w-full flex-col items-center justify-center gap-2 p-2 md:p-0"
      >
        <Input label="E-mail" placeholder="E-mail" name="email" type="email" />
        <ErrorFormMessage field="email" />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          name="password"
          type="password"
        />
        <ErrorFormMessage field="password" />

        {loading ? (
          <button
            type="button"
            className="mt-4 flex h-20 max-h-10 w-full max-w-xs cursor-progress items-center justify-center rounded-full bg-primary-700 text-white shadow-sm outline-none transition-all ease-in"
            disabled
          >
            <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
            Logando...
          </button>
        ) : (
          <input
            className="mt-4 h-20 max-h-10 w-full max-w-xs flex-1 cursor-pointer rounded-full border border-primary-700 bg-primary-700 text-white shadow-sm outline-none transition-all ease-in hover:bg-transparent hover:text-primary-700"
            placeholder="Seu nome"
            type="submit"
            value="Fazer login"
          />
        )}
      </form>
    </FormProvider>
  )
}

export default ModalForm
