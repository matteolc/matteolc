import { heading } from '~/data/heading'
import { SkillBadge } from './badges/SkillBadge'

const Heading = () => {
  return (
    <div className="overflow-hidden bg-white sm:pl-24 md:pr-24  lg:pr-0">
      <div className="flex flex-col justify-between">
        <div className="p-6">
          <h2 className="sr-only" id="profile-overview-title">
            {heading.title}
          </h2>
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-7xl lg:mx-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-20 w-20 rounded-full"
                    src={heading.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-4xl leading-6">{heading.name}</h3>
                  <p className="text-lg text-gray-500">
                    {heading.role}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">

                <p className="mt-6">
                  <span
                    dangerouslySetInnerHTML={{ __html: heading.description }}
                  />
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 text-center text-md gap-2">
                  {heading.skills
                    .map((skill, index) => (
                      <li key={index} className="col-span-1 ">
                        <SkillBadge skill={skill} size={'large'} />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Heading }
