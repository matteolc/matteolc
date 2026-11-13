import { useEffect, useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

const PAGES = [
  { id: 'p100', page: 100, label: 'status' },
  { id: 'p200', page: 200, label: 'traces' },
  { id: 'p300', page: 300, label: 'metrics' },
  { id: 'p400', page: 400, label: 'services' },
  { id: 'p500', page: 500, label: 'logs' },
]

const SINCE = 2003

const milanClock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Rome',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const useClock = () => {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])
  return now
}

const useActivePage = () => {
  const [active, setActive] = useState(PAGES[0].id)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    for (const { id } of PAGES) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])
  return active
}

const usePageKeys = () => {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement
      if (target.closest('input, textarea, select, [contenteditable]')) return
      const page = PAGES[Number(event.key) - 1]
      if (!page) return
      document.getElementById(page.id)?.scrollIntoView()
      history.replaceState(null, '', `#${page.id}`)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}

const StatusBar = () => {
  const now = useClock()
  const active = useActivePage()
  usePageKeys()
  const uptime = (now?.getFullYear() ?? 2026) - SINCE

  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-ground font-mono text-[0.7rem]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-5 gap-y-1 px-5 py-2 sm:px-10 xl:px-16">
        <a href="#p100" className="flex items-center gap-2 font-bold">
          <span aria-hidden="true" className="size-2 bg-ok animate-heartbeat" />
          matteolc.prod
        </a>
        <span className="text-dim">
          UP <span className="text-ink">{uptime}Y</span>
          <span className="hidden sm:inline"> · since {SINCE}</span>
        </span>
        <span className="hidden text-dim sm:inline">
          MIL{' '}
          <time className="text-ink" suppressHydrationWarning>
            {now ? milanClock.format(now) : '--:--:--'}
          </time>
        </span>
        <nav
          aria-label="Pages"
          className="order-last -mx-2 w-full md:order-none md:mx-0 md:ml-auto md:w-auto"
        >
          <ol className="flex">
            {PAGES.map(({ id, page, label }, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-keyshortcuts={String(index + 1)}
                  aria-current={active === id ? 'location' : undefined}
                  className="group flex gap-1.5 whitespace-nowrap px-2 py-1 uppercase transition-colors hover:text-warn aria-[current=location]:bg-warn aria-[current=location]:text-ground"
                >
                  <span className="text-warn group-aria-[current=location]:text-ground">
                    {page}
                  </span>
                  <span className="sr-only sm:not-sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <span className="ml-auto md:ml-0">
          <ThemeSwitcher />
        </span>
      </div>
    </header>
  )
}

export { PAGES, StatusBar }
