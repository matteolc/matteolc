import { cn } from '~/lib/cn'

const SkillLevel = ({ level }: { level: number }) => {
  return (
    <div className="grid max-w-24 grid-cols-5 gap-2">
      {[0, 1, 2, 3, 4].map(rating => (
        <div
          key={rating}
          className={cn(
            level > rating ? 'bg-primary' : 'bg-surface-container-high',
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
    <div className="flex flex-row items-start justify-between gap-3 rounded-lg px-2 py-1">
      <div className="flex flex-col justify-between">
        <span className="font-medium text-on-surface">{skill}</span>
        {since ? (
          <span className="text-sm text-on-surface-variant">Since {since}</span>
        ) : null}
      </div>
      <div className="mt-1">
        <SkillLevel level={level} />
      </div>
    </div>
  )
}

export { SkillCard }
