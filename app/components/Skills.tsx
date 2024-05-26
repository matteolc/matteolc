import { SkillCategory, skills } from '~/data/skills'
import { SkillCard } from './cards/SkillCard'

const Skills = () => {
  const skillsByCategory = skills.items.reduce(
    (acc: Record<SkillCategory, (typeof item)[]>, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {
      [SkillCategory.programming]: [],
      [SkillCategory.frameworks]: [],
      [SkillCategory.operations]: [],
      [SkillCategory.databases]: [],
    },
  )
  return (
    <div className="px-7 py-6">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="pb-8">
          <h3 className="text-base font-thin leading-6 text-gray-900/80">
            {category}
          </h3>
          <ul>
            {skills.items
              .filter(item => item.category === category)
              .map((item, index) => (
                <li key={index} className="my-2">
                  <SkillCard {...item} />
                </li>
              ))}
          </ul>
        </div>
      ))}
      <h3 className="text-base font-thin leading-6 text-gray-900/80">
        Soft-skills
      </h3>
      <h3 className="text-base font-thin leading-6 text-gray-900/80">
        Interests
      </h3>
      <h3 className="text-base font-thin leading-6 text-gray-900/80">
        Volunteer work
      </h3>
    </div>
  )
}

export { Skills }
