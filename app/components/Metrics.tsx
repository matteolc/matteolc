import { SkillCategory, skills } from '~/data/skills'
import { PageHeader } from './PageHeader'

const YEAR = new Date().getFullYear()
const MAX_LEVEL = 5

const groups = Object.values(SkillCategory)
  .map(category => ({
    category,
    items: skills.items.filter(s => s.category === category),
  }))
  .filter(group => group.items.length)

const years = (since: string) => {
  if (!since) return '—'
  const n = YEAR - Number(since)
  return n < 1 ? '<1' : String(n)
}

const Metrics = () => (
  <section aria-labelledby="metrics" id="p300" className="py-20 md:py-28">
    <PageHeader
      id="metrics"
      page={300}
      title="Metrics"
      meta={`stack · ${skills.items.length} series · level of ${MAX_LEVEL}`}
    />

    <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
      {groups.map(({ category, items }) => (
        <table key={category} className="w-full border-collapse self-start">
          <caption className="border-b-2 border-ink px-3 pb-2 text-left font-mono text-xs font-bold uppercase">
            {category}{' '}
            <span className="font-normal text-dim">{items.length}</span>
          </caption>
          <thead className="font-mono text-[0.6rem] uppercase text-dim">
            <tr className="border-b border-rule">
              <th scope="col" className="py-2 pl-3 text-left font-normal">
                series
              </th>
              <th scope="col" className="py-2 text-right font-normal">
                since
              </th>
              <th scope="col" className="py-2 pl-3 text-right font-normal">
                yrs
              </th>
              <th scope="col" className="py-2 pr-3 pl-4 text-right font-normal">
                level
              </th>
            </tr>
          </thead>
          <tbody className="greenbar">
            {items.map(({ skill, since, level }) => (
              <tr
                key={skill}
                className="border-b border-rule/60 transition-colors hover:bg-panel"
              >
                <th
                  scope="row"
                  className="py-2 pr-2 pl-3 text-left text-sm font-medium"
                >
                  {skill}
                </th>
                <td className="py-2 text-right font-mono text-[0.7rem] text-dim">
                  {since || '—'}
                </td>
                <td className="py-2 pl-3 text-right font-mono text-[0.7rem]">
                  {years(since)}
                </td>
                <td className="py-2 pr-3 pl-4">
                  <span className="flex justify-end gap-0.5">
                    {Array.from({ length: MAX_LEVEL }, (_, i) => (
                      <span
                        // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length meter cells
                        key={i}
                        aria-hidden="true"
                        className={`h-2.5 w-2 ${i < level ? 'bg-ok' : 'bg-rule'}`}
                      />
                    ))}
                    <span className="sr-only">
                      level {level} of {MAX_LEVEL}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  </section>
)

export { Metrics }
