import type { MetaFunction } from 'react-router'
import { Hero } from '~/components/Hero'
import { Logs } from '~/components/Logs'
import { Metrics } from '~/components/Metrics'
import { Services } from '~/components/Services'
import { StatusBar } from '~/components/StatusBar'
import { Traces } from '~/components/Traces'

const SITE_URL = 'https://matteolc.github.io/matteolc/'
const TITLE = 'Matteo La Cognata · Senior Software Engineer'
const DESCRIPTION =
  'Curriculum vitae of Matteo La Cognata, Senior Software Engineer at Nearform. In tech since 2003.'

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: 'description', content: DESCRIPTION },
    { tagName: 'link', rel: 'canonical', href: SITE_URL },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESCRIPTION },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: SITE_URL },
    // Drawn from the CV data by `node scripts/og-image.ts`.
    { property: 'og:image', content: `${SITE_URL}og.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
      property: 'og:image:alt',
      content: `${TITLE}, in tech since 2003`,
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: TITLE },
    { name: 'twitter:description', content: DESCRIPTION },
    { name: 'twitter:image', content: `${SITE_URL}og.png` },
  ]
}

export default function Index() {
  return (
    <>
      <StatusBar />
      <main className="mx-auto max-w-[1400px] px-5 sm:px-10 xl:px-16">
        <Hero />
        <Traces />
        <Metrics />
        <Services />
        <Logs />
      </main>
    </>
  )
}
