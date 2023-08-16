import banner from '@/assets/shop-banner.png'
import Image from 'next/image'

export default function Shop() {
  return (
    <section className="my-4 flex h-28 w-full items-center justify-between rounded-lg bg-white px-4">
      <h1 className="text-xl font-semibold text-primary-700">Shop</h1>
      <figure className="h-28 w-28">
        <Image
          src={banner}
          alt="banner"
          className="h-full w-full object-cover"
        />
      </figure>
    </section>
  )
}
