import { ReactNode } from 'react'

type ProjectRootProps = {
  children: ReactNode
}

const ModalContent = ({ children }: ProjectRootProps) => {
  return (
    <section className="relative flex h-auto w-full animate-zoom flex-col items-center justify-between overflow-hidden rounded-lg bg-white p-2 md:flex-row">
      {children}
    </section>
  )
}

export default ModalContent
