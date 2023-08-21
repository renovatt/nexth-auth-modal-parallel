import Link from 'next/link'

const ModalSignIn = () => {
  return (
    <section className="flex items-center justify-center">
      <h3 className="text-xs">Já tem uma conta?</h3>
      <Link
        href={'/views/login'}
        className="p-1 text-xs font-semibold text-primary-700"
      >
        Fazer login
      </Link>
    </section>
  )
}

export default ModalSignIn
