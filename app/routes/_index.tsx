import type { MetaFunction } from 'react-router'
import { Education } from '~/components/Education'
import { Heading } from '~/components/Heading'
import { Skills } from '~/components/Skills'
import { WorkExperience } from '~/components/WorkExperience'

export const meta: MetaFunction = () => {
  return [
    { title: 'Ing. Matteo La Cognata' },
    { name: 'description', content: 'Curriculum vitae' },
  ]
}

export default function Index() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:gap-8">
        <Heading />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
          <Skills />
          <div className="flex flex-col gap-6 lg:col-span-3 lg:gap-8">
            <WorkExperience />
            <Education />
          </div>
        </div>
      </div>
    </main>
  )
}
