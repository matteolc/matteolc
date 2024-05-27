import { heading } from '~/data/heading'

const Heading = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="sr-only" id="profile-overview-title">
            {heading.title}
          </h2>
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img
                    className="mx-auto h-20 w-20 rounded-full"
                    src={heading.imageUrl}
                    alt=""
                  />
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-2xl font-bold text-gray-900 sm:text-4xl">
                    {heading.name}
                  </p>
                  <p className="text-lg font-medium text-gray-600 sm:text-2xl">
                    {heading.role}
                  </p>

                  <p className="mt-6 flex max-w-xl justify-center md:max-w-2xl lg:max-w-max">
                    {heading.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Heading }
