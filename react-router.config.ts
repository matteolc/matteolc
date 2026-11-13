import type { Config } from '@react-router/dev/config'

export default {
  ssr: false,
  basename: '/matteolc/',
  // Prerender the CV so the deployed HTML carries the title, description and
  // social metadata — crawlers do not run the hydration that `meta` depends on.
  prerender: ['/'],
} satisfies Config
