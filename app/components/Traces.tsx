import { workExperience } from '~/data/work-experience'
import { formatSpan, toYear } from '~/lib/time'
import { PageHeader } from './PageHeader'

const START = 2003
const END = toYear('Present')
const TICKS = [2005, 2010, 2015, 2020, 2025]
const pct = (year: number) => ((year - START) / (END - START)) * 100

const spans = workExperience.experiences.map(e => {
  const from = toYear(e.from)
  const to = toYear(e.to)
  return {
    ...e,
    left: pct(from),
    width: pct(to) - pct(from),
    length: to - from,
  }
})

const Gridlines = () => (
  <>
    {TICKS.map(year => (
      <span
        key={year}
        aria-hidden="true"
        className="absolute inset-y-0 w-px bg-rule/60"
        style={{ left: `${pct(year)}%` }}
      />
    ))}
  </>
)

const Traces = () => (
  <section aria-labelledby="traces" id="p200" className="py-20 md:py-28">
    <PageHeader
      id="traces"
      page={200}
      title="Traces"
      meta={`experience · ${spans.length} spans · ${START} → now`}
    />

    <div className="mt-10 font-mono text-[0.65rem] text-dim md:grid md:grid-cols-[19rem_minmax(0,1fr)] md:gap-x-8">
      <span className="hidden md:block">service / operation</span>
      <div aria-hidden="true" className="relative h-5">
        {TICKS.map(year => (
          <span
            key={year}
            className="absolute -translate-x-1/2"
            style={{ left: `${pct(year)}%` }}
          >
            {year}
          </span>
        ))}
      </div>
    </div>

    <ol className="greenbar mt-2 border-t border-rule">
      {spans.map(span => (
        <li key={`${span.company}-${span.from}`}>
          <details className="group border-b border-rule">
            <summary className="-mx-3 grid cursor-pointer list-none gap-x-8 gap-y-3 px-3 py-4 transition-colors hover:bg-panel md:grid-cols-[19rem_minmax(0,1fr)] md:items-center [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>
                  <span className="block font-semibold">{span.company}</span>
                  <span className="block text-sm text-dim">
                    {span.position}
                  </span>
                  <span className="mt-1 block font-mono text-[0.65rem] uppercase text-dim">
                    {span.from} – {span.to} ·{' '}
                    <span className="text-ink">{formatSpan(span.length)}</span>
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-dim group-hover:text-warn"
                >
                  <span className="group-open:hidden">[+]</span>
                  <span className="hidden group-open:inline">[-]</span>
                </span>
              </span>
              <span aria-hidden="true" className="relative block h-7">
                <Gridlines />
                <span
                  className="absolute -inset-y-2 border-x border-warn bg-warn/10 opacity-0 transition-opacity group-hover:opacity-100 group-has-[summary:focus-visible]:opacity-100"
                  style={{ left: `${span.left}%`, width: `${span.width}%` }}
                />
                <span
                  className={`span-draw absolute top-1/2 h-3 -translate-y-1/2 transition-colors group-hover:bg-warn group-has-[summary:focus-visible]:bg-warn ${
                    span.current ? 'bg-ok' : 'bg-info'
                  }`}
                  style={{
                    left: `${span.left}%`,
                    width: `max(${span.width}%, 0.5rem)`,
                  }}
                />
              </span>
            </summary>

            <div className="grid gap-5 pt-1 pb-8 md:pl-[calc(19rem+2rem)]">
              {span.description && (
                <p className="max-w-[68ch] text-dim">{span.description}</p>
              )}
              <ul className="max-w-[68ch] space-y-1.5">
                {span.items.map(item => (
                  <li
                    key={item}
                    className="grid grid-cols-[1.5ch_minmax(0,1fr)] gap-2"
                  >
                    <span aria-hidden="true" className="font-mono text-warn">
                      -
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1.5 font-mono text-[0.65rem] uppercase">
                {span.skills.map(skill => (
                  <li
                    key={skill}
                    className="border border-rule px-2 py-1 text-dim"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              {span.href && (
                <a
                  href={span.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit font-mono text-xs text-info underline hover:text-warn"
                >
                  {new URL(span.href).host.replace('www.', '')}
                </a>
              )}
            </div>
          </details>
        </li>
      ))}
    </ol>
  </section>
)

export { Traces }
