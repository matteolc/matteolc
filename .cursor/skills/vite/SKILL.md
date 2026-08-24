---
name: vite
description: Vite-specific guidance for development/build config and dependency-safe changes.
---

# Vite skill

Use this skill when changing build/dev behavior.

## Current setup

- Vite build pipeline through Remix (`remix vite:build`, `remix vite:dev`)
- Config entrypoint: `vite.config.ts`
- Tailwind via `@tailwindcss/vite` (not PostCSS)
- TS path support: `vite-tsconfig-paths`

## Project conventions

- Keep config changes minimal and explicit.
- Prefer official plugin usage over custom build logic.
- Maintain compatibility with current Node engine (`>=20`).

## Practical guidance

- Validate any config change with:
  - `npm run build`
  - `npm run dev` (if runtime behavior is affected)
- Avoid introducing plugin chains unless required by a feature.

## Avoid

- Workarounds that bypass Vite security defaults.
- Over-customizing server/build config for static CV use-cases.
