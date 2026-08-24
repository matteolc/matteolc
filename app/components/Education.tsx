import { education } from '~/data/education'
import { WorkExperienceCard } from './cards/WorkExperienceCard'

const Education = () => {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      <div className="pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
          {education.title}
        </h3>
      </div>
      {education.experiences.map(experience => (
        <WorkExperienceCard
          key={`${experience.company}-${experience.position}-${experience.from}`}
          {...experience}
        />
      ))}
    </section>
  )
}

export { Education }
