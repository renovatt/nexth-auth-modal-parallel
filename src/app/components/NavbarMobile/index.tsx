import RouterLinks from '../RouterLinks'
import { NavbarMobileTypeProps } from '@/@types'
import { IoMdClose } from 'react-icons/io'

const NavbarMobile = ({ modal, closeModal }: NavbarMobileTypeProps) => {
  return (
    <>
      {modal && (
        <nav
          data-testid="navbar-mobile"
          className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-md transition-all ease-in ${
            modal ? 'flex animate-mobile' : ''
          }`}
        >
          <ul className="flex w-full transform flex-col items-center justify-center gap-8 overflow-hidden transition-all">
            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
              <RouterLinks href="/" text="Início" onClick={closeModal} />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
              <RouterLinks
                href="/views/about"
                text="Sobre"
                onClick={closeModal}
              />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
              <RouterLinks
                href="/views/shop"
                text="Loja"
                onClick={closeModal}
              />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
              <RouterLinks
                href="/views/contact"
                text="Contato"
                onClick={closeModal}
              />
            </li>
          </ul>

          <IoMdClose
            data-testid="xmark-icon"
            className="hover:text-textPrimary absolute right-8 top-8 h-8 w-8 cursor-pointer text-white transition-all ease-in"
            onClick={closeModal}
          />
        </nav>
      )}
    </>
  )
}

export default NavbarMobile
