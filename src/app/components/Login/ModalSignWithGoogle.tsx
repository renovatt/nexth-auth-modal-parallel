'use client'

import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { toast } from 'react-toastify'

const ModalSignWithGoogle = () => {
  const router = useRouter()

  const signInGoogle = useCallback(() => {
    signIn('google', {
      callbackUrl: '',
      redirect: false,
    })
    toast.success('Bem vindo!')
    router.back()
  }, [router])
  return (
    <button
      onClick={signInGoogle}
      className="mb-4 flex items-center justify-center text-xs hover:text-primary-700"
    >
      <FcGoogle className="m-2" /> Fazer login com o Google
    </button>
  )
}

export default ModalSignWithGoogle
