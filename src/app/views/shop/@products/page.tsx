async function wait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 7000)
  })
}

export default async function Products() {
  await wait()
  return (
    <div>
      <h2 className="text-base font-semibold text-white md:text-3xl">
        Descrição
      </h2>
    </div>
  )
}
