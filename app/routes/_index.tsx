import type { MetaFunction } from 'react-router'
import { Hero } from '~/components/Hero'
import { Logs } from '~/components/Logs'
import { Metrics } from '~/components/Metrics'
import { Services } from '~/components/Services'
import { StatusBar } from '~/components/StatusBar'
import { Traces } from '~/components/Traces'

export const meta: MetaFunction = () => {
  return [
    { title: 'Matteo La Cognata · Senior Software Engineer' },
    {
      name: 'description',
      content:
        'Curriculum vitae of Matteo La Cognata, Senior Software Engineer at Nearform. In tech since 2003.',
    },
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
