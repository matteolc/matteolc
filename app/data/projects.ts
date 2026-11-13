const projects = [
  {
    name: 'palettebro',
    href: 'https://palettebro.com',
    status: 'live',
    summary: 'Color palette tool for the web',
  },
  {
    name: 'palettebro-packages',
    href: 'https://github.com/matteolc/palettebro-packages',
    status: 'live',
    summary: '@palettebro/generator and @palettebro/tailwind on npm',
  },
  {
    name: 'nextjs-rag',
    href: 'https://github.com/matteolc/nextjs-rag',
    status: 'live',
    summary: 'Next.js RAG demo with PostgreSQL',
  },
  {
    name: 'react-router-rag',
    href: 'https://github.com/matteolc/react-router-rag',
    status: 'live',
    summary: 'Document ingest, embeddings, semantic search',
  },
  {
    name: 'rails-api-template',
    href: 'https://github.com/matteolc/rails-api-template',
    status: 'archived',
    summary: 'Rails 5 JSON API starter with JWT, Rolify, and Pundit',
  },
  {
    name: 'GTFS-Helpers',
    href: 'https://github.com/matteolc/GTFS-Helpers',
    status: 'archived',
    summary: 'Import GTFS transit feeds into MySQL or SQLite',
  },
  {
    name: 'air-quality-dashboard',
    href: 'https://github.com/matteolc/air-quality-dashboard',
    status: 'archived',
    summary: 'Real-time and historical air quality UI for BME688 sensors',
  },
  {
    name: 'modesl-wrapper',
    href: 'https://github.com/matteolc/modesl-wrapper',
    status: 'archived',
    summary: 'Typed FreeSWITCH ESL helper around modesl',
  },
] as const

const links = {
  github: 'https://github.com/matteolc',
  linkedin: 'https://www.linkedin.com/in/matteolc',
}

export { links, projects }
