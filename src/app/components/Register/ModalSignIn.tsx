import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const ModalSignIn = () => {
  const router = useRouter()

  const backPage = useCallback(() => {
    router.back()
  }, [router])

  return (
    <section className="flex items-center justify-center">
      <h3 className="text-xs">Já tem uma conta?</h3>
      <button
        onClick={backPage}
        className="p-1 text-xs font-semibold text-primary-700"
      >
        Fazer login
      </button>
    </section>
  )
}

export default ModalSignIn
