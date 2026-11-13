// Run: node scripts/resume-pdf.ts  (prints scripts/resume.html to public/*.pdf)
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const CHROME = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find(existsSync)

if (!CHROME) {
  console.error('No Chrome or Chromium found; install one to print the PDF.')
  process.exit(1)
}

const source = new URL('./resume.html', import.meta.url)
const target = new URL(
  '../public/Matteo_La_Cognata_Resume.pdf',
  import.meta.url,
)

execFileSync(CHROME, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${target.pathname}`,
  source.href,
])

console.log('wrote public/Matteo_La_Cognata_Resume.pdf')
