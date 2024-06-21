import { cn } from "~/lib/cn"

const SkillBadge = ({ skill, size = 'regular' }: { skill: string, size?: 'regular' | 'large' }) => {
  return (
    <span className={cn(size === 'regular' ? 'text-xs px-2 py-1' : 'text-sm px-3 py-2', "inline-flex items-center rounded-full bg-gray-50 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10")}>
      {skill}
    </span>
  )
}

export { SkillBadge }
