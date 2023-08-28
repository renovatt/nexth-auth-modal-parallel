async function wait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 2000)
  })
}

export default async function Aside() {
  await wait()

  const arr = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    text: 'Lorem ipsum dolor sit amet consectetur.',
  }))

  return (
    <section className="flex h-full w-full flex-col items-start justify-start overflow-y-auto">
      {arr.map((item) => (
        <ul key={item.id} className="overflow-hidden">
          <li className="m-1 h-10 rounded-lg bg-white p-2 text-start text-xs font-semibold">
            {item.text}
          </li>
        </ul>
      ))}
    </section>
  )
}
