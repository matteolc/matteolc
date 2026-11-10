import { SkillCategory, skills } from '~/data/skills'
import { SkillBadge } from './badges/SkillBadge'
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
      [SkillCategory.testing]: [],
      [SkillCategory.projectManagement]: [],
      [SkillCategory.emergingTechnologies]: [],
    },
  )
  return (
    <aside className="self-start rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm lg:sticky lg:top-6">
      {Object.keys(skillsByCategory).map(category => (
        <div key={category} className="pb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
            {category}
          </h3>
          <ul>
            {skills.items
              .filter(item => item.category === category)
              .map(item => (
                <li key={item.skill} className="my-2">
                  <SkillCard {...item} />
                </li>
              ))}
          </ul>
        </div>
      ))}
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
        Soft-skills
      </h3>
      <ul className="mb-8 flex flex-wrap gap-x-2 gap-y-1">
        {[
          'Plain writing',
          'Stays with the bug',
          'Mentors by pairing',
          'Sees it through',
        ].map(skill => (
          <li key={skill}>
            <SkillBadge skill={skill} />
          </li>
        ))}
      </ul>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
        Interests
      </h3>
      <ul className="mb-8 flex flex-wrap gap-x-2 gap-y-1">
        {[
          'Music',
          'Cooking',
          'Motorsport',
          'Car modeling',
          'Gardening',
          'Electronics and microcontrollers',
        ].map(skill => (
          <li key={skill}>
            <SkillBadge skill={skill} />
          </li>
        ))}
      </ul>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
        Volunteer work
      </h3>
      <div className="flex flex-row gap-6">
        <div>
          <svg
            className="h-8 w-8 text-primary"
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
          <h4 className="text-lg font-semibold text-on-surface">Archelon</h4>
          <p className="text-sm text-on-surface-variant">
            The Sea Turtle protection society of Greece (1999-2005)
          </p>
        </div>
      </div>
    </aside>
  )
}

export { Skills }
