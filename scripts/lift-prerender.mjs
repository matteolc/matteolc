// Run by `npm run build`. Prerendering writes pages under the configured
// basename (build/client/matteolc/index.html), but GitHub Pages already serves
// build/client at /matteolc/, so lift them back to the published root.
import { existsSync, readdirSync, renameSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../build/client/', import.meta.url))
const nested = join(root, 'matteolc')

if (!existsSync(nested)) {
  throw new Error(`No prerendered output at ${nested}`)
}

for (const entry of readdirSync(nested)) {
  renameSync(join(nested, entry), join(root, entry))
}

rmSync(nested, { recursive: true })
