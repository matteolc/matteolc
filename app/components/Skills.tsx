import { SkillCategory, skills } from '~/data/skills'
import { SkillCard } from './cards/SkillCard'
import { SkillBadge } from './badges/SkillBadge'

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
      [SkillCategory.testing]: [],
      [SkillCategory.projectManagement]: [],
      [SkillCategory.emergingTechnologies]: [],
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
      <h3 className="mb-2 text-base font-thin leading-6 text-gray-900/80">
        Soft-skills
      </h3>
      <ul className="mb-8 flex flex-wrap gap-x-2 gap-y-1">
        {[
          'Leadership',
          'Communication',
          'Problem-solving',
          'Mentorship',
        ].map((skill, index) => (
          <li key={index}>
            <SkillBadge skill={skill} />
          </li>
        ))}
      </ul>
      <h3 className="mb-2 text-base font-thin leading-6 text-gray-900/80">
        Interests
      </h3>
      <ul className="mb-8 flex flex-wrap gap-x-2 gap-y-1">
        {[
          'Musicianship',
          'Culinary Arts',
          'Motorsport Enthusiast',
          'Horticulture',
          'Creative Building',
          'Family Engagement',
          'Nature Enthusiast',
        ].map((skill, index) => (
          <li key={index}>
            <SkillBadge skill={skill} />
          </li>
        ))}
      </ul>
      <h3 className="mb-2 text-base font-thin leading-6 text-gray-900/80">
        Volunteer work
      </h3>
      <div className="flex flex-row gap-6">
        <div>
          <svg
            className="h-8 w-8 text-blue-600"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="WaterIcon"
            fill="currentColor"
          >
            <path d="M21.98 14H22h-.02zM5.35 13c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1v-2c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1zm13.32 2c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.1 1-3.34 1-1.24 0-1.38-1-3.33-1-1.95 0-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1 1.24 0 1.38 1 3.33 1 1.95 0 2.1-1 3.34-1 1.19 0 1.42 1 3.33 1 1.94 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1zM5.35 9c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1V8c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1C3.38 7 3.24 8 2 8v2c1.9 0 2.17-1 3.35-1z"></path>
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Archelon</h4>
          <p className="text-sm text-gray-500">
            The Sea Turtle protection society of Greece (1999-2005)
          </p>
        </div>
      </div>
    </div>
  )
}

export { Skills }
