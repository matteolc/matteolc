import { projects } from '~/data/projects'
import { PageHeader } from './PageHeader'

const liveProjects = projects.filter(p => p.status === 'live')
const archivedProjects = projects.filter(p => p.status !== 'live')

const Row = ({ project }: { project: (typeof projects)[number] }) => (
  <a
    href={project.href}
    target="_blank"
    rel="noreferrer"
    className="group grid grid-cols-[7ch_minmax(0,1fr)] items-baseline gap-x-6 gap-y-1 px-3 py-5 transition-colors hover:bg-panel md:grid-cols-[7ch_minmax(0,22rem)_minmax(0,1fr)_auto]"
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
)

const Services = () => (
  <section aria-labelledby="services" id="p400" className="py-20 md:py-28">
    <PageHeader
      id="services"
      page={400}
      title="Services"
      meta={`work · ${liveProjects.length} live · ${archivedProjects.length} archived`}
    />

    <ul className="greenbar mt-12 border-t border-rule">
      {liveProjects.map(project => (
        <li key={project.name} className="border-b border-rule">
          <Row project={project} />
        </li>
      ))}

      <li className="border-b border-rule">
        <details className="group">
          <summary className="grid cursor-pointer list-none grid-cols-[7ch_minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 px-3 py-5 transition-colors hover:bg-panel md:grid-cols-[7ch_minmax(0,22rem)_minmax(0,1fr)_auto] [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2 font-mono text-[0.65rem] uppercase text-dim">
              <span aria-hidden="true" className="size-1.5 bg-rule" />
              archived
            </span>
            <span className="font-mono text-base font-bold text-dim transition-colors group-hover:text-warn sm:text-lg">
              {archivedProjects.length} projects
            </span>
            <span className="col-start-2 col-end-4 row-start-2 text-dim md:col-start-3 md:col-end-4 md:row-start-1">
              {archivedProjects.map(p => p.name).join(', ')}
            </span>
            <span
              aria-hidden="true"
              className="col-start-3 row-start-1 justify-self-end font-mono text-xs text-dim group-hover:text-warn md:col-start-4"
            >
              <span className="group-open:hidden">[+]</span>
              <span className="hidden group-open:inline">[-]</span>
            </span>
          </summary>

          <ul>
            {archivedProjects.map(project => (
              <li key={project.name} className="border-t border-rule/60">
                <Row project={project} />
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  </section>
)

export { Services }
