// Run: node scripts/og-image.ts  (writes public/og.png for link previews)
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { heading } from '../app/data/heading.ts'
import { workExperience } from '../app/data/work-experience.ts'

const CHROME = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find(existsSync)

if (!CHROME) {
  console.error('No Chrome or Chromium found; install one to draw the image.')
  process.exit(1)
}

const SINCE = 2003
const uptime = new Date().getFullYear() - SINCE
const current = workExperience.experiences.find(e => e.current)
const focus = heading.skills.slice(0, 4).join(' · ')

const font = (file: string) =>
  readFileSync(new URL(`../public/fonts/${file}`, import.meta.url)).toString(
    'base64',
  )

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      @font-face {
        font-family: 'Martian Mono';
        src: url(data:font/woff2;base64,${font('martian-mono.woff2')}) format('woff2');
        font-weight: 100 800;
        font-stretch: 75% 112.5%;
      }
      @font-face {
        font-family: 'Hanken Grotesk';
        src: url(data:font/woff2;base64,${font('hanken-grotesk.woff2')}) format('woff2');
        font-weight: 100 900;
      }

      :root {
        --ground: oklch(0.165 0.014 190);
        --rule: oklch(0.33 0.02 190);
        --ink: oklch(0.94 0.012 170);
        --dim: oklch(0.74 0.018 180);
        --ok: oklch(0.85 0.15 158);
        --warn: oklch(0.84 0.15 78);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        width: 1200px;
        height: 630px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 56px 64px;
        background: var(--ground);
        color: var(--ink);
        font-family: 'Martian Mono', monospace;
      }

      .bar {
        display: flex;
        align-items: center;
        gap: 20px;
        border-bottom: 1px solid var(--rule);
        padding-bottom: 20px;
        font-size: 19px;
        color: var(--dim);
      }

      .bar b {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--ink);
        font-weight: 700;
      }

      .dot {
        width: 12px;
        height: 12px;
        background: var(--ok);
      }

      h1 {
        margin: 0;
        font-size: 104px;
        font-weight: 800;
        font-stretch: 112.5%;
        letter-spacing: -0.02em;
        line-height: 0.95;
      }

      .cursor {
        display: inline-block;
        width: 0.5em;
        height: 0.78em;
        margin-left: 0.1em;
        background: var(--warn);
      }

      .role {
        margin: 32px 0 0;
        font-size: 26px;
        text-transform: uppercase;
        color: var(--dim);
      }

      .role .ok {
        color: var(--ok);
      }

      .role .ink {
        color: var(--ink);
      }

      .foot {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 32px;
        border-top: 1px solid var(--rule);
        padding-top: 20px;
        font-size: 19px;
        color: var(--dim);
      }

      .foot .focus {
        font-family: 'Hanken Grotesk', sans-serif;
        font-size: 22px;
        color: var(--ink);
      }
    </style>
  </head>
  <body>
    <div class="bar">
      <b><span class="dot"></span>matteolc.prod</b>
      <span>UP ${uptime}Y · SINCE ${SINCE}</span>
    </div>

    <div>
      <h1>Matteo<br />La Cognata<span class="cursor"></span></h1>
      <p class="role">
        <span class="ok">RUNNING</span> ${heading.role}
        <span class="ink">@ ${current?.company ?? ''}</span>
      </p>
    </div>

    <div class="foot">
      <span class="focus">${focus}</span>
      <span>matteolc.github.io/matteolc</span>
    </div>
  </body>
</html>
`

const page = join(mkdtempSync(join(tmpdir(), 'og-')), 'og.html')
writeFileSync(page, html)

const target = new URL('../public/og.png', import.meta.url)

execFileSync(CHROME, [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1200,630',
  `--screenshot=${target.pathname}`,
  `file://${page}`,
])

console.log('wrote public/og.png')
