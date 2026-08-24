import { cn } from '~/lib/cn'

const SkillBadge = ({
  skill,
  size = 'regular',
}: {
  skill: string
  size?: 'regular' | 'large'
}) => {
  return (
    <span
      className={cn(
        size === 'regular' ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm',
        'inline-flex items-center rounded-full bg-surface-container font-medium text-on-surface-variant ring-1 ring-inset ring-outline-variant',
      )}
    >
      {skill}
    </span>
  )
}

export { SkillBadge }
