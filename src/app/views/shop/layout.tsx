export default function ShopLayout({
  children,
  books,
  products,
}: {
  children: React.ReactNode
  books: React.ReactNode
  products: React.ReactNode
}) {
  return (
    <section className="container flex w-[90%] flex-col items-start justify-center p-2">
      {children}
      <article className="flex h-full w-full flex-col items-center justify-between rounded-lg bg-white p-2 md:h-96 md:flex-row">
        <aside className="m-1 flex h-80 w-1/2 items-start justify-center overflow-y-auto rounded-lg bg-red-600 md:items-center">
          {books}
        </aside>
        <aside className="m-1 flex h-80 w-1/2 items-center justify-center rounded-lg bg-primary-700">
          {products}
        </aside>
      </article>
    </section>
  )
}
