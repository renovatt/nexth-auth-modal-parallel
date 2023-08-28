import Image from 'next/image'
import profile from '@/assets/about.png'

async function wait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 3000)
  })
}

export default async function Preview() {
  await wait()
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-2">
      <figure className="h-40 w-40">
        <Image
          src={profile}
          alt="profile"
          loading="lazy"
          className="h-full w-full rounded-full bg-blue-950 object-cover"
        />
      </figure>
      <p className="rounded-lg bg-white p-2 px-14 text-center text-sm font-semibold text-zinc-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde nihil
        explicabo modi ducimus? Accusantium eos, doloribus dicta voluptate quis
        culpa asperiores. Rerum tenetur vero in amet architecto perferendis
        libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde
        nihil explicabo modi ducimus? Accusantium eos, doloribus dicta voluptate
        quis culpa asperiores. Rerum tenetur vero in amet architecto perferendis
        libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde
        nihil explicabo modi ducimus? Accusantium eos, doloribus dicta voluptate
        quis culpa asperiores. Rerum tenetur vero in amet architecto perferendis
        libero.
      </p>
    </section>
  )
}
