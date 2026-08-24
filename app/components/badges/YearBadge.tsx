const YearBadge = ({
  from,
  to,
  current,
}: {
  from: string
  to: string
  current: boolean
}) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-container px-2 py-1 font-display text-sm font-medium text-on-primary-container ring-1 ring-inset ring-outline-variant">
      {from} - {current ? 'Present' : to}
    </span>
  )
}

export { YearBadge }
