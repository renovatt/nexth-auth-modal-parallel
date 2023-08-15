'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../Navbar'
import logo from '@/assets/logo.png'
import NavbarMobile from '../NavbarMobile'
import { useToggle } from '@/hooks/useToggle'

const Header = () => {
  const { modal, openModal, closeModal } = useToggle()

  return (
    <header className="flex h-20 w-full items-center justify-between px-16 transition-all">
      <Link
        href="/"
        className="flex items-center justify-center"
        data-testid="logo-link"
      >
        <figure className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
          <Image
            src={logo}
            alt="logo"
            className="h-full w-full object-cover p-1"
          />
        </figure>

        <h2 className="p-2 text-white">Capsule</h2>
      </Link>

      <Navbar openModal={openModal} />
      <NavbarMobile modal={modal} closeModal={closeModal} />
    </header>
  )
}

export default Header
