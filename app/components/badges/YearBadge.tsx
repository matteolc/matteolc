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
    <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 font-display text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
      {from} - {current ? 'Present' : to}
    </span>
  )
}

export { YearBadge }
