import { ReactNode } from 'react'

type ProjectThumbnailContainerProps = {
  children: ReactNode
}

const ModalThumbContainer = ({ children }: ProjectThumbnailContainerProps) => {
  return (
    <section className=" hidden h-96 w-1/2 max-w-[900px] flex-col items-center justify-center overflow-hidden md:flex md:justify-around">
      {children}
    </section>
  )
}

export default ModalThumbContainer
