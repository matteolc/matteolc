const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/** 'Oct 2024' -> 2024.75, '2018' -> 2018, 'Present' -> now as a fractional year. */
const toYear = (value: string, now = new Date()) => {
  if (value === 'Present') return now.getFullYear() + now.getMonth() / 12
  const [first, second] = value.split(' ')
  return second ? Number(second) + MONTHS.indexOf(first) / 12 : Number(first)
}

const formatSpan = (years: number) => {
  const months = Math.max(1, Math.round(years * 12))
  const y = Math.floor(months / 12)
  const m = months % 12
  if (!y) return `${m}m`
  return m ? `${y}y ${m}m` : `${y}y`
}

export { formatSpan, toYear }
