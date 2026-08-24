---
name: biome
description: Biome lint/format conventions for this CV app. Use when fixing lint errors or adding new TypeScript/React files.
---

# Biome skill

Use this skill when lint fails or when adding code that must pass CI.

## Current setup

- Biome 2.x (`@biomejs/biome`)
- Config: `biome.json`
- Recommended rules + React domain
- Biome is the sole formatter: single quotes, no semicolons, trailing commas

## Project conventions

- Imports at the top of the file only (no inline imports).
- Use `import type` for type-only imports.
- Use stable keys in `.map()` — prefer unique string ids, not array indices.
- Avoid `dangerouslySetInnerHTML` unless there is no safe alternative.
- Remix routes may use default exports (`noDefaultExport` is off).

## Validation

```bash
npm run lint
npm run lint:fix   # auto-fix safe issues
npm run format       # format only
```

## Avoid

- Disabling rules with `biome-ignore` unless there is a documented reason.
- Adding `biome-ignore` for entire files.
