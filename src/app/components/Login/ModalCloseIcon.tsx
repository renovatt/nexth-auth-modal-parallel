'use client'

import { useCallback } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

const ModalCloseIcon = () => {
  const router = useRouter()

  const backPage = useCallback(() => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/')
    }
  }, [router])

  return (
    <RiCloseFill
      onClick={backPage}
      className="absolute right-4 top-4 h-6 w-6 cursor-pointer rounded-full bg-primary-700 text-white transition-all ease-in hover:bg-white hover:text-primary-700"
    />
  )
}

export default ModalCloseIcon
