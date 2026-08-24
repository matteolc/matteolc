import { heading } from '~/data/heading'
import { SkillBadge } from './badges/SkillBadge'
import { ThemeSwitcher } from './ThemeSwitcher'

const Heading = () => {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-low p-5 shadow-sm md:p-7">
      <h2 className="sr-only" id="profile-overview-title">
        {heading.title}
      </h2>
      <div className="md:flex md:items-start md:justify-between md:gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-3xl font-bold leading-tight text-on-surface sm:text-4xl">
                {heading.name}
              </h3>
              <p className="mt-1 text-base text-on-surface-variant sm:text-lg">
                {heading.role}
              </p>
            </div>
            <ThemeSwitcher />
          </div>
          <p className="mt-5 max-w-4xl text-on-surface">
            {heading.description}
          </p>
        </div>
        <div className="mt-5 grid shrink-0 grid-cols-2 gap-2 md:mt-0">
          {[
            { type: 'pdf', text: 'PDF' },
            { type: 'txt', text: 'TXT' },
          ].map(file => (
            <a
              key={file.type}
              href={`/matteolc/Matteo_La_Cognata_Resume.${file.type}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface shadow-sm transition hover:bg-surface-container"
            >
              {file.text}
            </a>
          ))}
        </div>
      </div>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {heading.skills.map(skill => (
          <li key={skill}>
            <SkillBadge skill={skill} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export { Heading }
