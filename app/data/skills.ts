enum SkillCategory {
  programming = 'Programming',
  frameworks = 'Frameworks',
  operations = 'Operations',
  databases = 'Databases',
  projectManagement = 'Project Management',
  testing = 'Testing',
  emergingTechnologies = 'Emerging Technologies',
}

const skills = {
  title: 'Skills',
  items: [
    {
      skill: 'Ruby',
      since: '2012',
      level: 4,
      category: SkillCategory.programming,
    },
    {
      skill: 'Javascript',
      since: '2012',
      level: 4,
      category: SkillCategory.programming,
    },
    {
      skill: 'Typescript',
      since: '2018',
      level: 4,
      category: SkillCategory.programming,
    },
    {
      skill: 'Angular',
      since: '2012',
      level: 3,
      category: SkillCategory.programming,
    },
    {
      skill: 'React',
      since: '2012',
      level: 4,
      category: SkillCategory.frameworks,
    },
    {
      skill: 'Rails',
      since: '2012',
      level: 4,
      category: SkillCategory.frameworks,
    },
    {
      skill: 'Remix.run',
      since: '2022',
      level: 3,
      category: SkillCategory.frameworks,
    },
    {
      skill: 'Docker',
      since: '2016',
      level: 4,
      category: SkillCategory.operations,
    },
    {
      skill: 'Git/CI-CD',
      since: '2015',
      level: 4,
      category: SkillCategory.operations,
    },
    {
      skill: 'Heroku',
      since: '2020',
      level: 4,
      category: SkillCategory.operations,
    },
    {
      skill: 'PostgreSQL',
      since: '2012',
      level: 4,
      category: SkillCategory.databases,
    },
    {
      skill: 'TimescaleDB',
      since: '2021',
      level: 3,
      category: SkillCategory.databases,
    },
    {
      skill: 'Redis',
      since: '2012',
      level: 4,
      category: SkillCategory.databases,
    },
    {
      skill: 'Elasticsearch',
      since: '2019',
      level: 3,
      category: SkillCategory.databases,
    },
    {
      skill: 'MSSQL',
      since: '2006-2009',
      level: 4,
      category: SkillCategory.databases,
    },
    {
      skill: 'Scrum',
      since: '2022',
      level: 4,
      category: SkillCategory.projectManagement,
    },
    {
      skill: 'Kanban',
      since: '2022',
      level: 4,
      category: SkillCategory.projectManagement,
    },
    {
      skill: 'Jest',
      since: '2022',
      level: 3,
      category: SkillCategory.testing,
    },
    {
      skill: 'Cypress',
      since: '2022',
      level: 3,
      category: SkillCategory.testing,
    },
    {
      skill: 'Minitest & RSpec (Ruby)',
      since: '2012',
      level: 4,
      category: SkillCategory.testing,
    },
    {
      skill: 'Machine Learning',
      since: '2023',
      level: 1,
      category: SkillCategory.emergingTechnologies,
    },
  ],
}

export { skills, SkillCategory }
