import { ReactNode } from 'react'

type ProjectThumbnailContainerProps = {
  children: ReactNode
}

const ModalThumbContainer = ({ children }: ProjectThumbnailContainerProps) => {
  return (
    <section className="hidden h-full w-1/2 flex-col items-center justify-center overflow-hidden md:flex md:justify-around">
      {children}
    </section>
  )
}

export default ModalThumbContainer
