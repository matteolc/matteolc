import { projects } from '~/data/projects'
import { PageHeader } from './PageHeader'

const live = projects.filter(p => p.status === 'live').length

const Services = () => (
  <section aria-labelledby="services" id="p400" className="py-20 md:py-28">
    <PageHeader
      id="services"
      page={400}
      title="Services"
      meta={`work · ${live} live · ${projects.length - live} archived`}
    />

    <ul className="greenbar mt-12 border-t border-rule">
      {projects.map(project => (
        <li key={project.name} className="border-b border-rule">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group -mx-3 grid grid-cols-[7ch_minmax(0,1fr)] items-baseline gap-x-6 gap-y-1 px-3 py-5 transition-colors hover:bg-panel md:grid-cols-[7ch_minmax(0,22rem)_minmax(0,1fr)_auto]"
          >
            <span
              className={`flex items-center gap-2 font-mono text-[0.65rem] uppercase ${
                project.status === 'live' ? 'text-ok' : 'text-dim'
              }`}
            >
              <span
                aria-hidden="true"
                className={`size-1.5 ${project.status === 'live' ? 'bg-ok' : 'bg-rule'}`}
              />
              {project.status}
            </span>
            <span className="font-mono text-base font-bold transition-colors group-hover:text-warn sm:text-lg">
              {project.name}
            </span>
            <span className="col-start-2 text-dim md:col-start-auto">
              {project.summary}
            </span>
            <span className="col-start-2 font-mono text-[0.65rem] text-dim md:col-start-auto">
              {new URL(project.href).host}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </section>
)

export { Services }
