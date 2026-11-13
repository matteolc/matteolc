import { links } from '~/data/projects'

const cv = (ext: string) =>
  `${import.meta.env.BASE_URL}Matteo_La_Cognata_Resume.${ext}`

const ACTIONS = [
  { verb: 'connect', label: 'LinkedIn', href: links.linkedin, primary: true },
  { verb: 'follow', label: 'GitHub', href: links.github },
  { verb: 'get', label: 'CV.pdf', href: cv('pdf') },
  { verb: 'get', label: 'CV.txt', href: cv('txt') },
]

const Actions = () => (
  <ul className="flex flex-wrap gap-2 font-mono text-sm">
    {ACTIONS.map(({ verb, label, href, primary }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={
            primary
              ? 'group flex items-baseline gap-2 bg-warn px-4 py-3 font-bold text-ground transition-colors hover:bg-ink'
              : 'group flex items-baseline gap-2 border border-rule px-4 py-3 font-bold transition-colors hover:border-warn hover:text-warn'
          }
        >
          <span
            className={
              primary ? 'font-normal opacity-70' : 'font-normal text-dim'
            }
          >
            {verb}
          </span>
          {label}
        </a>
      </li>
    ))}
  </ul>
)

export { Actions }
