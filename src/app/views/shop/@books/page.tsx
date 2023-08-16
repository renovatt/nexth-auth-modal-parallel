async function wait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 5000)
  })
}

export default async function Books() {
  const res = await wait()
  return (
    <div>
      <h2 className="text-white">Books</h2>
    </div>
  )
}
