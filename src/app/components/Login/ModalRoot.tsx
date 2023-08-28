'use client'

import { ReactNode, useCallback } from 'react'
import { useRouter } from 'next/navigation'

type ProjectRootProps = {
  children: ReactNode
}

const ProjectRoot = ({ children }: ProjectRootProps) => {
  const router = useRouter()

  const backPage = useCallback(() => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/')
    }
  }, [router])

  function handleCloseModal(
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ) {
    if (event.target === event.currentTarget) {
      backPage()
    }
  }

  return (
    <section className="fixed inset-0 z-50 overflow-y-auto">
      <section
        onClick={(e) => handleCloseModal(e)}
        className="flex min-h-full items-center justify-center py-6 backdrop-blur-sm"
      >
        <section
          onClick={(e) => handleCloseModal(e)}
          className="relative m-auto flex h-[90%] w-[90%] max-w-6xl flex-col items-center justify-between overflow-y-auto overflow-x-hidden rounded-lg p-4"
        >
          {children}
        </section>
      </section>
    </section>
  )
}

export default ProjectRoot
