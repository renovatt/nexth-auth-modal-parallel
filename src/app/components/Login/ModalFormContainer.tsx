import { ReactNode } from 'react'

type ModalFormContainerProps = {
  children: ReactNode
}

const ModalFormContainer = ({ children }: ModalFormContainerProps) => {
  return (
    <section className="m-0 flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-300 md:ml-2 md:w-1/2 md:justify-around">
      {children}
    </section>
  )
}

export default ModalFormContainer
