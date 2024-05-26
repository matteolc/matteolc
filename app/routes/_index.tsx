import type { MetaFunction } from '@remix-run/node'
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
    <>
      <Heading />
      <div className="grid grid-cols-1 gap-0 sm:pl-24 md:pr-24 lg:grid-cols-4 lg:gap-4 lg:pr-0">
        <Skills />
        <div className="col-span-3 ">
          <WorkExperience />
          <Education />
        </div>
      </div>
    </>
  )
}
