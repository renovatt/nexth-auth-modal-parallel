'use client'

import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

const ModalSignWithGoogle = () => {
  return (
    <button
      onClick={() => signIn()}
      className="mb-4 flex items-center justify-center text-xs hover:text-primary-700"
    >
      <FcGoogle className="m-2" /> Fazer login com o Google
    </button>
  )
}

export default ModalSignWithGoogle
