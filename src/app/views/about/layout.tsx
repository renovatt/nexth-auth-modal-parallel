export default function AboutLayout({
  children,
  aside,
  preview,
}: {
  children: React.ReactNode
  aside: React.ReactNode
  preview: React.ReactNode
}) {
  return (
    <section className="container flex w-[90%] flex-col items-start justify-center p-2">
      {children}
      <article className="flex h-full w-full items-center justify-between rounded-lg bg-white p-2 md:h-[80vh]">
        <aside className="m-1 flex h-full w-full items-start justify-center rounded-lg bg-primary-700 md:items-center">
          {preview}
        </aside>
        <aside className="m-1 flex h-full w-60 items-center justify-center rounded-lg bg-red-600">
          {aside}
        </aside>
      </article>
    </section>
  )
}
