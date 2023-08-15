import RouterLinks from '../RouterLinks'
import { NavbarTypeProps } from '@/@types'
import Link from 'next/link'
import { CgMenuRightAlt } from 'react-icons/cg'

const Navbar = ({ openModal }: NavbarTypeProps) => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li className="m-2 p-2">
          <RouterLinks href="/" text="Início" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#about-us" text="Sobre" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#shop" text="Loja" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#contacg" text="Contato" />
        </li>
      </ul>

      <Link
        href="#login"
        className="bg-primary-700 hover:border-primary-700 hover:text-primary-700 mx-8 flex h-10 w-20 items-center justify-center rounded-full text-base text-white transition-all hover:border hover:bg-transparent md:m-0 md:ml-8"
      >
        Login
      </Link>

      <CgMenuRightAlt
        data-testid="svg-close-modal"
        className="h-6 w-6 cursor-pointer text-white md:hidden"
        onClick={openModal}
      />
    </nav>
  )
}

export default Navbar
