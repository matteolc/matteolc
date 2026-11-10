import { SkillBadge } from '../badges/SkillBadge'
import { YearBadge } from '../badges/YearBadge'

const WorkExperienceCard = ({
  company,
  href,
  position,
  from,
  to,
  current,
  description,
  items,
  skills,
}: {
  company: string
  href?: string
  position: string
  from: string
  to: string
  current?: boolean
  description?: string
  items?: string[]
  skills?: string[]
}) => {
  return (
    <article className="mb-10 border-b border-outline-variant pb-10 last:mb-0 last:border-b-0 last:pb-0">
      <YearBadge from={from} to={to} current={current ?? false} />
      <div className="flex justify-between pt-4">
        <div>
          <h4 className="py-1 text-2xl font-semibold leading-tight text-on-surface md:text-3xl">
            {position}
          </h4>
          {href ? (
            <a
              className="text-primary underline-offset-2 hover:underline"
              href={href}
            >
              {company}
            </a>
          ) : (
            <p className="mt-1 text-lg text-on-surface-variant">{company}</p>
          )}
        </div>
      </div>
      {description && (
        <p className="my-2 max-w-4xl text-on-surface-variant">{description}</p>
      )}
      {items && (
        <ul className="mb-4 mt-2 list-disc space-y-1 pl-5 text-on-surface">
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {skills && (
        <div>
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {skills.map(skill => (
              <li key={skill}>
                <SkillBadge skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export { WorkExperienceCard }
