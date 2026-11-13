import { education } from '~/data/education'
import { heading } from '~/data/heading'
import { workExperience } from '~/data/work-experience'
import { toYear } from '~/lib/time'
import { Actions } from './Actions'

const short = (company: string) =>
  company.length > 22 ? company.split(',')[0] : company

const bootLog = [
  ...education.experiences.map(e => ({
    from: e.from,
    level: 'INFO',
    message: short(e.company),
  })),
  ...workExperience.experiences.map(e => ({
    from: e.from,
    level: e.current ? 'OK' : 'INFO',
    message: short(e.company),
  })),
].sort((a, b) => toYear(a.from) - toYear(b.from))

const current = workExperience.experiences.find(e => e.current)

const Cursor = () => (
  <span
    aria-hidden="true"
    className="ml-[0.1em] inline-block h-[0.78em] w-[0.5em] translate-y-[0.04em] bg-warn animate-blink"
  />
)

const Hero = () => (
  <section
    id="p100"
    aria-labelledby="name"
    className="grid gap-12 pt-14 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-end lg:gap-16 lg:pt-24 lg:pb-32"
  >
    <div>
      <h1
        id="name"
        className="wide font-mono text-[clamp(2.4rem,8.4vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.02em] animate-signal-lock"
      >
        Matteo
        <br />
        La Cognata
        <Cursor />
      </h1>
      <p className="mt-10 font-mono text-xs uppercase leading-relaxed text-dim sm:text-sm">
        <span className="text-ok">running</span> {heading.role}{' '}
        {current && (
          <span className="whitespace-nowrap text-ink">
            @ {current.company}
          </span>
        )}
        <br />
        {heading.qualification}
      </p>
      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed">
        {heading.description}
      </p>
      <div className="mt-10">
        <Actions />
      </div>
    </div>

    <figure className="border border-rule bg-panel font-mono text-[0.7rem] leading-relaxed">
      <figcaption className="flex items-center justify-between border-b border-rule px-4 py-2 text-dim">
        <span>tail -f career.log</span>
        <span className="flex items-center gap-2 uppercase text-ok">
          <span
            aria-hidden="true"
            className="size-1.5 bg-ok animate-heartbeat"
          />
          live
        </span>
      </figcaption>
      <ol className="space-y-1.5 px-4 py-4">
        {bootLog.map((line, index) => (
          <li
            key={`${line.from}-${line.message}`}
            className="grid grid-cols-[5ch_5ch_minmax(0,1fr)] gap-x-2 animate-type-in"
            style={{ animationDelay: `${500 + index * 110}ms` }}
          >
            <time className="text-dim">{line.from.split(' ').at(-1)}</time>
            <span className={line.level === 'OK' ? 'text-ok' : 'text-info'}>
              {line.level}
            </span>
            <span className="truncate">{line.message}</span>
          </li>
        ))}
        <li
          className="grid grid-cols-[5ch_5ch_minmax(0,1fr)] gap-x-2 animate-type-in"
          style={{ animationDelay: `${500 + bootLog.length * 110}ms` }}
        >
          <span className="text-dim">now</span>
          <span className="text-ok">OK</span>
          <span>
            healthy, accepting connections
            <Cursor />
          </span>
        </li>
      </ol>
    </figure>
  </section>
)

export { Cursor, Hero }
