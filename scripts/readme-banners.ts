// Run: node scripts/readme-banners.ts  (writes assets/*.svg for README.md)
import { readFileSync, writeFileSync } from 'node:fs'
import { education } from '../app/data/education.ts'
import { heading } from '../app/data/heading.ts'
import { workExperience } from '../app/data/work-experience.ts'
import { formatSpan, toYear } from '../app/lib/time.ts'

// Martian Mono advance width per em at wdth 112.5, measured in Chrome.
const ADVANCE = 0.75

const font = readFileSync(
  new URL('./martian-mono-subset.woff2', import.meta.url),
).toString('base64')

const THEMES = {
  dark: {
    ground: 'oklch(0.165 0.014 190)',
    panel: 'oklch(0.2 0.016 190)',
    rule: 'oklch(0.33 0.02 190)',
    ink: 'oklch(0.94 0.012 170)',
    dim: 'oklch(0.74 0.018 180)',
    ok: 'oklch(0.85 0.15 158)',
    info: 'oklch(0.8 0.11 222)',
    warn: 'oklch(0.84 0.15 78)',
    band: 'none',
  },
  light: {
    ground: 'oklch(0.985 0.005 150)',
    panel: 'oklch(0.92 0.045 155)',
    rule: 'oklch(0.8 0.035 158)',
    ink: 'oklch(0.23 0.025 185)',
    dim: 'oklch(0.43 0.03 180)',
    ok: 'oklch(0.47 0.12 158)',
    info: 'oklch(0.47 0.12 238)',
    warn: 'oklch(0.52 0.13 62)',
    band: 'oklch(0.945 0.035 155)',
  },
}

type Theme = (typeof THEMES)['dark']

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const style = (t: Theme) => `<style>
@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 800;font-stretch:75% 112.5%}
text{font-family:M,ui-monospace,monospace;fill:${t.ink}}
.dim{fill:${t.dim}}.ok{fill:${t.ok}}.info{fill:${t.info}}.warn{fill:${t.warn}}
.wide{font-stretch:112.5%;font-weight:800}
.lock{animation:lock 1.6s cubic-bezier(.16,1,.3,1) both}
.in{animation:in .45s cubic-bezier(.16,1,.3,1) both}
.draw{transform-box:fill-box;transform-origin:left;animation:draw .9s cubic-bezier(.16,1,.3,1) both}
.blink{animation:blink 1.1s steps(1) infinite}
.beat{animation:beat 2.4s ease-in-out infinite}
@keyframes lock{0%{font-weight:100;font-stretch:75%}45%{font-weight:320;font-stretch:92%}72%{font-weight:760;font-stretch:112.5%}84%{font-weight:640;font-stretch:106%}100%{font-weight:800;font-stretch:112.5%}}
@keyframes in{from{opacity:0;transform:translateX(-6px)}}
@keyframes draw{from{transform:scaleX(0)}}
@keyframes blink{50%{opacity:0}}
@keyframes beat{50%{opacity:.45}}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}
</style>`

const paper = (t: Theme, w: number, h: number) =>
  `<rect width="${w}" height="${h}" fill="${t.ground}"/>${
    t.band === 'none'
      ? ''
      : Array.from(
          { length: Math.ceil(h / 144) },
          (_, i) =>
            `<rect y="${i * 144}" width="${w}" height="72" fill="${t.band}"/>`,
        ).join('')
  }`

const bootLog = [
  ...education.experiences.map(e => ({
    from: e.from,
    level: 'INFO',
    who: e.company,
  })),
  ...workExperience.experiences.map(e => ({
    from: e.from,
    level: e.current ? 'OK' : 'INFO',
    who: e.company.length > 22 ? e.company.split(',')[0] : e.company,
  })),
].sort((a, b) => toYear(a.from) - toYear(b.from))

const banner = (t: Theme) => {
  const W = 1280
  const H = 520
  const nameSize = 100
  const current = workExperience.experiences.find(e => e.current)
  const cursorX = 52 + 'La Cognata'.length * (nameSize * ADVANCE - 2) + 12
  const px = 872
  const lines = [
    ...bootLog.map(l => ({ ...l, year: l.from.split(' ').at(-1) ?? '' })),
    { year: 'now', level: 'OK', who: 'healthy' },
  ]
  const log = lines
    .map(
      (l, i) =>
        `<g class="in" style="animation-delay:${500 + i * 110}ms"><text x="${px + 20}" y="${150 + i * 22}" font-size="12" class="dim">${l.year}</text><text x="${px + 70}" y="${150 + i * 22}" font-size="12" class="${l.level === 'OK' ? 'ok' : 'info'}">${l.level}</text><text x="${px + 120}" y="${150 + i * 22}" font-size="12">${esc(l.who)}</text></g>`,
    )
    .join('')
  const pages = [
    '100 STATUS',
    '200 TRACES',
    '300 METRICS',
    '400 SERVICES',
    '500 LOGS',
  ]
  let navX = W - 56 - pages.join('   ').length * 12 * 0.66
  const nav = pages
    .map(p => {
      const [n, label] = p.split(' ')
      const x = navX
      navX += (p.length + 3) * 12 * 0.66
      return `<text x="${x}" y="38" font-size="12"><tspan class="warn">${n}</tspan> ${label}</text>`
    })
    .join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Matteo La Cognata, ${esc(heading.role)}">
${style(t)}
${paper(t, W, H)}
<rect x="56" y="29" width="10" height="10" fill="${t.ok}" class="beat"/>
<text x="76" y="38" font-size="13" font-weight="700">matteolc.prod</text>
<text x="210" y="38" font-size="13" class="dim">UP <tspan fill="${t.ink}">${new Date().getFullYear() - 2003}Y</tspan> · since 2003</text>
${nav}
<line x1="0" x2="${W}" y1="60" y2="60" stroke="${t.rule}"/>
<text x="52" y="200" font-size="${nameSize}" class="wide lock" letter-spacing="-2">Matteo</text>
<text x="52" y="300" font-size="${nameSize}" class="wide lock" letter-spacing="-2">La Cognata</text>
<rect x="${cursorX}" y="226" width="${nameSize * 0.5}" height="${nameSize * 0.76}" fill="${t.warn}" class="blink"/>
<text x="56" y="372" font-size="16" class="dim"><tspan class="ok">RUNNING</tspan> ${esc(heading.role.toUpperCase())} <tspan fill="${t.ink}">@ ${esc((current?.company ?? '').toUpperCase())}</tspan></text>
<text x="56" y="400" font-size="14" class="dim">${esc(heading.qualification.toUpperCase())}</text>
<text x="56" y="458" font-size="14" class="dim">TypeScript · React · Node.js · PostgreSQL · Design systems</text>
<rect x="${px}" y="96" width="352" height="${52 + lines.length * 22}" fill="${t.panel}" stroke="${t.rule}"/>
<line x1="${px}" x2="${px + 352}" y1="128" y2="128" stroke="${t.rule}"/>
<text x="${px + 20}" y="117" font-size="12" class="dim">tail -f career.log</text>
<rect x="${px + 290}" y="108" width="7" height="7" fill="${t.ok}" class="beat"/>
<text x="${px + 304}" y="117" font-size="12" class="ok">LIVE</text>
${log}
</svg>`
}

const traces = (t: Theme) => {
  const W = 1280
  const START = 2003
  const END = toYear('Present')
  const x0 = 430
  const x1 = 1224
  const x = (y: number) => x0 + ((y - START) / (END - START)) * (x1 - x0)
  const rowH = 48
  const top = 150
  const spans = workExperience.experiences
  const H = top + spans.length * rowH + 40
  const ticks = [2005, 2010, 2015, 2020, 2025]
  const grid = ticks
    .map(
      y =>
        `<line x1="${x(y)}" x2="${x(y)}" y1="${top - 12}" y2="${H - 40}" stroke="${t.rule}" stroke-dasharray="2 4"/><text x="${x(y)}" y="${top - 22}" font-size="11" class="dim" text-anchor="middle">${y}</text>`,
    )
    .join('')
  const rows = spans
    .map((s, i) => {
      const from = toYear(s.from)
      const to = toYear(s.to)
      const y = top + i * rowH
      return `<g class="in" style="animation-delay:${i * 90}ms">
<line x1="56" x2="${W - 56}" y1="${y + rowH - 4}" y2="${y + rowH - 4}" stroke="${t.rule}" stroke-opacity=".5"/>
<text x="56" y="${y + 18}" font-size="14" font-weight="700">${esc(s.company)}</text>
<text x="56" y="${y + 36}" font-size="11" class="dim">${esc(s.position)}</text>
<text x="${x0 - 24}" y="${y + 24}" font-size="11" class="dim" text-anchor="end">${formatSpan(to - from)}</text>
</g>
<rect x="${x(from)}" y="${y + 14}" width="${Math.max(6, x(to) - x(from))}" height="12" fill="${s.current ? t.ok : t.info}" class="draw" style="animation-delay:${300 + i * 90}ms"/>`
    })
    .join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Career trace waterfall, ${START} to now">
${style(t)}
${paper(t, W, H)}
<line x1="56" x2="${W - 56}" y1="24" y2="24" stroke="${t.ink}" stroke-width="2"/>
<text x="56" y="82" font-size="44" class="wide"><tspan class="warn">200</tspan> TRACES</text>
<text x="${W - 56}" y="80" font-size="12" class="dim" text-anchor="end">EXPERIENCE · ${spans.length} SPANS · ${START} → NOW</text>
${grid}
${rows}
</svg>`
}

for (const [name, theme] of Object.entries(THEMES)) {
  writeFileSync(
    new URL(`../assets/banner-${name}.svg`, import.meta.url),
    banner(theme),
  )
  writeFileSync(
    new URL(`../assets/traces-${name}.svg`, import.meta.url),
    traces(theme),
  )
}
console.log('wrote assets/banner-*.svg and assets/traces-*.svg')
