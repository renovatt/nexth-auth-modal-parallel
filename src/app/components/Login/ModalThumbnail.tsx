'use client'

import Image from 'next/image'
import { useState } from 'react'
import thumb from '@/assets/login.png'

const ModalThumbnail = () => {
  const [loadingImage, setLoadingImage] = useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
    setLoadingImage(false)
  }

  return (
    <figure
      className={`h-full max-h-[25rem] w-full rounded-lg transition-all ease-in md:h-96 ${
        loadingImage ? 'animate-pulse' : ''
      } bg-primary-900`}
    >
      <Image
        className="h-full w-full rounded-lg object-cover opacity-0"
        src={thumb}
        alt="login-thumb"
        onLoad={handleLoad}
        width={1000}
        height={1000}
        priority
        fetchPriority="high"
        decoding="async"
        data-nimg="1"
      />
    </figure>
  )
}

export default ModalThumbnail
