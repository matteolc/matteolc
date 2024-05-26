import { education } from '~/data/education'
import { WorkExperienceCard } from './cards/WorkExperienceCard'

const Education = () => {
  return (
    <div className="p-6">
      <div className="pb-5">
        <h3 className="text-base font-thin leading-6 text-gray-900/80">
          {education.title}
        </h3>
      </div>
      {education.experiences.map((experience, index) => (
        <WorkExperienceCard key={index} {...experience} />
      ))}
    </div>
  )
}

export { Education }
