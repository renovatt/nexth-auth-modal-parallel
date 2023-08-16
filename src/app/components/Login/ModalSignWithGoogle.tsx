import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

const ModalSignWithGoogle = () => {
  return (
    <Link
      href={'#'}
      className="mb-4 flex items-center justify-center text-xs hover:text-primary-700"
    >
      <FcGoogle className="m-2" /> Fazer login com o Google
    </Link>
  )
}

export default ModalSignWithGoogle
