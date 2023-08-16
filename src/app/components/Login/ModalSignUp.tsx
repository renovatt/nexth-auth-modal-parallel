import Link from 'next/link'

const ModalSignUp = () => {
  return (
    <section className="flex items-center justify-center">
      <h3 className="text-xs">Não tem uma conta?</h3>
      <Link
        href={'/views/register'}
        className="p-1 text-xs font-semibold text-primary-700"
      >
        Faça seu cadastro
      </Link>
    </section>
  )
}

export default ModalSignUp
