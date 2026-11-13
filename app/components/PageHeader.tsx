const PageHeader = ({
  id,
  page,
  title,
  meta,
}: {
  id: string
  page: number
  title: string
  meta: string
}) => (
  <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t-2 border-ink pt-4 font-mono">
    <h2
      id={id}
      className="wide flex items-baseline gap-[0.5em] text-3xl font-extrabold uppercase tracking-tight sm:text-5xl"
    >
      <span className="text-warn">{page}</span>
      {title}
    </h2>
    <p className="text-xs uppercase text-dim">{meta}</p>
  </header>
)

export { PageHeader }
