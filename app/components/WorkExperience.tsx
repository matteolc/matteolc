import { workExperience } from '~/data/work-experience'
import { WorkExperienceCard } from './cards/WorkExperienceCard'

const WorkExperience = () => {
  return (
    <div className="p-6">
      <div className="pb-5">
        <h3 className="text-base font-thin leading-6 text-gray-900/80">
          {workExperience.title}
        </h3>
      </div>
      {workExperience.experiences.map((experience, index) => (
        <WorkExperienceCard key={index} {...experience} />
      ))}
    </div>
  )
}

export { WorkExperience }
