import { cn } from '~/lib/cn'

const SkillLevel = ({ level }: { level: number }) => {
  return (
    <div className="grid max-w-24 grid-cols-5 gap-2">
      {[0, 1, 2, 3, 4].map(rating => (
        <div
          key={rating}
          className={cn(
            level > rating ? 'bg-black' : 'bg-gray-200',
            'h-4 w-4 rounded-full',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

const SkillCard = ({
  skill,
  since,
  level,
}: {
  skill: string
  since: string
  level: number
}) => {
  return (
    <div className="flew-row flex justify-between">
      <div className="flex flex-col justify-between">
        <span>{skill}</span>
        <span className="text-sm font-light text-gray-400">Since {since}</span>
      </div>
      <div className="mt-2">
        <SkillLevel level={level} />
      </div>
    </div>
  )
}

export { SkillCard }
