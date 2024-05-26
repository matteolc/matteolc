import { SkillBadge } from '../badges/SkillBadge'
import { YearBadge } from '../badges/YearBadge'

const WorkExperienceCard = ({
  company,
  position,
  from,
  to,
  current,
  description,
  items,
  skills,
}: {
  company: string
  position: string
  from: string
  to: string
  current?: boolean
  description?: string
  items?: string[]
  skills?: string[]
}) => {
  return (
    <div className="mb-12">
      <YearBadge from={from} to={to} current={current ?? false} />
      <div className="flex justify-between pt-4">
        <div>
          <h4 className="py-2 text-3xl font-semibold leading-6 text-gray-900">
            {position}
          </h4>
          <p className="mt-1 text-lg text-gray-500">{company}</p>
        </div>
      </div>
      {description && (
        <p className="text-md my-2 max-w-4xl text-gray-500">{description}</p>
      )}
      {items && (
        <ul className="mb-4 mt-2 list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-md my-[1px]">
              {item}
            </li>
          ))}
        </ul>
      )}
      {skills && (
        <div className="max-w-md">
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {skills.map((skill, index) => (
              <li key={index}>
                <SkillBadge skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { WorkExperienceCard }
