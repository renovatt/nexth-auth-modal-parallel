async function wait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 5000)
  })
}

export default async function Books() {
  await wait()

  const arr = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    text: 'item',
  }))
  return (
    <section>
      <article className="flex flex-wrap items-start justify-center">
        {arr.map((item) => (
          <aside
            key={item.id}
            className="m-1 flex h-20 w-20 items-center justify-center rounded-lg bg-white
        "
          >
            <span className="text-base font-semibold">{item.text}</span>
          </aside>
        ))}
      </article>
    </section>
  )
}
