import { education } from '~/data/education'
import { Actions } from './Actions'
import { Cursor } from './Hero'
import { PageHeader } from './PageHeader'

const Logs = () => (
  <>
    <section aria-labelledby="logs" id="p500" className="py-20 md:py-28">
      <PageHeader
        id="logs"
        page={500}
        title="Logs"
        meta={`education · ${education.experiences.length} entries`}
      />
      <ol className="greenbar mt-12 border-t border-rule">
        {education.experiences.map(entry => (
          <li
            key={entry.company}
            className="grid gap-x-6 gap-y-1 border-b border-rule py-5 md:grid-cols-[11ch_5ch_minmax(0,1fr)]"
          >
            <time className="font-mono text-xs text-dim">
              {entry.from}–{entry.to}
            </time>
            <span className="font-mono text-xs text-info">INFO</span>
            <span>
              <span className="block font-semibold">{entry.position}</span>
              <span className="block text-dim">
                {entry.company}, {entry.location}
              </span>
              {entry.description && (
                <span className="mt-2 block max-w-[68ch]">
                  {entry.description}
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>

    <footer className="border-t-2 border-ink pt-8 pb-16">
      <p className="wide font-mono text-[clamp(2rem,6vw,4.5rem)] leading-none font-extrabold tracking-tight">
        Open a channel
        <Cursor />
      </p>
      <div className="mt-10">
        <Actions />
      </div>
      <p className="mt-16 flex flex-wrap justify-between gap-4 font-mono text-[0.65rem] uppercase text-dim">
        <span>© {new Date().getFullYear()} Matteo La Cognata</span>
        <span>keys 1–5 jump between pages</span>
      </p>
    </footer>
  </>
)

export { Logs }
