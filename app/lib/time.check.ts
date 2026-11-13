// Run: node app/lib/time.check.ts
import { formatSpan, toYear } from './time.ts'

const eq = (actual: unknown, expected: unknown) => {
  if (actual !== expected) throw new Error(`${actual} !== ${expected}`)
}

const now = new Date(2026, 10, 13)
eq(toYear('Oct 2024'), 2024.75)
eq(toYear('2018'), 2018)
eq(toYear('Present', now), 2026 + 10 / 12)
eq(formatSpan(toYear('Jun 2024') - toYear('Sep 2022')), '1y 9m')
eq(formatSpan(3), '3y')
eq(formatSpan(0.01), '1m')
console.log('time ok')
