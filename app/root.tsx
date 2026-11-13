import type { LinksFunction } from 'react-router'
import './tailwind.css'
import { Links, Meta, Outlet, Scripts } from 'react-router'

export const links: LinksFunction = () =>
  ['martian-mono', 'hanken-grotesk'].map(font => ({
    rel: 'preload',
    href: `${import.meta.env.BASE_URL}fonts/${font}.woff2`,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  }))

const themeInitScript = `
(() => {
  try {
    const match = document.cookie.match(/(?:^|; )matteolc-theme=(light|dark)(?:;|$)/);
    let theme = match ? match[1] : null;
    if (!theme) {
      const stored = localStorage.getItem('matteolc-theme');
      if (stored === 'light' || stored === 'dark') {
        theme = stored;
        document.cookie = 'matteolc-theme=' + theme + '; path=/; max-age=31536000; SameSite=Lax';
      }
    }
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();
`

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static theme FOUC prevention script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function HydrateFallback() {
  return (
    <p className="p-6 font-mono text-sm text-dim">booting matteolc.prod…</p>
  )
}
