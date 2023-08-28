'use client'

import Input from '../Input'
import { useCallback, useState } from 'react'
import { registerSchema } from '@/zod'
import { FaSpinner } from 'react-icons/fa'
import ErrorFormMessage from '../ErrorFormMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { RegisterSchemaProps } from '@/@types'
import { registerUser } from '@/services'
import { toast } from 'react-toastify'

const ModalForm = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const methods = useForm<RegisterSchemaProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(registerSchema),
  })

  const backPage = useCallback(() => {
    router.back()
  }, [router])

  const handleMessage = async (data: RegisterSchemaProps) => {
    setLoading(true)

    try {
      const { response, error } = await registerUser(data)

      if (!response) {
        toast.error(error)
        setLoading(false)
        return
      }

      toast.success(response.message)
      methods.reset()
      backPage()
    } catch (error) {
      setLoading(false)
      toast.error('Algum erro desconhecido aconteceu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleMessage)}
        className="flex h-full w-full flex-col items-center justify-center gap-2 p-2 md:p-0"
      >
        <Input
          label="Nome"
          placeholder="Seu nome"
          name="username"
          type="text"
        />
        <ErrorFormMessage field="username" />

        <Input label="E-mail" placeholder="E-mail" name="email" type="email" />
        <ErrorFormMessage field="email" />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          name="password"
          type="password"
        />
        <ErrorFormMessage field="password" />

        <Input
          label="Confirme sua senha"
          placeholder="Digite sua senha"
          name="confirmPassword"
          type="password"
        />
        <ErrorFormMessage field="confirmPassword" />

        {loading ? (
          <button
            type="button"
            className="mt-4 flex h-20 max-h-10 w-full max-w-xs cursor-progress items-center justify-center rounded-full bg-primary-700 text-white shadow-sm outline-none transition-all ease-in"
            disabled
          >
            <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
            Cadastrando...
          </button>
        ) : (
          <input
            className="mt-4 h-20 max-h-10 w-full max-w-xs flex-1 cursor-pointer rounded-full border border-primary-700 bg-primary-700 text-white shadow-sm outline-none transition-all ease-in hover:bg-transparent hover:text-primary-700"
            placeholder="Seu nome"
            type="submit"
            value="Confirmar cadastro"
          />
        )}
      </form>
    </FormProvider>
  )
}

export default ModalForm
