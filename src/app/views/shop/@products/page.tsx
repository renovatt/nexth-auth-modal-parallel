async function wait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 3000)
  })
}

export default async function Products() {
  const res = await wait()
  return (
    <div>
      <h2 className="text-white">Products</h2>
    </div>
  )
}
