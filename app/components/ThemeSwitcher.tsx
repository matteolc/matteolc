import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useSyncExternalStore } from 'react'

const THEME_KEY = 'matteolc-theme'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

type Theme = 'light' | 'dark'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function readCookieTheme(): Theme | null {
  const match = document.cookie.match(
    /(?:^|; )matteolc-theme=(light|dark)(?:;|$)/,
  )
  return match?.[1] === 'light' || match?.[1] === 'dark' ? match[1] : null
}

function writeThemeCookie(theme: Theme) {
  document.cookie = `${THEME_KEY}=${theme}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

function readStoredTheme(): Theme {
  const fromCookie = readCookieTheme()
  if (fromCookie) return fromCookie

  const stored = window.localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') {
    writeThemeCookie(stored)
    return stored
  }

  return getSystemTheme()
}

/** Prefer FOUC-applied data-theme so React matches what's on <html>. */
function readTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const applied = document.documentElement.dataset.theme
  if (applied === 'light' || applied === 'dark') return applied
  return readStoredTheme()
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  writeThemeCookie(theme)
  window.localStorage.setItem(THEME_KEY, theme)
  window.dispatchEvent(new Event('matteolc-theme'))
}

function subscribe(onStoreChange: () => void) {
  // Hydration can leave data-theme out of sync with the stored preference.
  const stored = readStoredTheme()
  const root = document.documentElement
  if (root.dataset.theme !== stored) {
    root.dataset.theme = stored
    root.style.colorScheme = stored
  }

  window.addEventListener('matteolc-theme', onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    window.removeEventListener('matteolc-theme', onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}

const ThemeSwitcher = () => {
  const theme = useSyncExternalStore(
    subscribe,
    readTheme,
    () => 'light' as Theme,
  )
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => {
        // Toggle from the applied DOM theme, not React state — avoids a no-op
        // first click when getServerSnapshot / store lags behind FOUC.
        const current =
          document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
        applyTheme(current === 'dark' ? 'light' : 'dark')
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm transition hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {isDark ? (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <SunIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  )
}

export { ThemeSwitcher }
