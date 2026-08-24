---
name: tailwind
description: Tailwind usage guidelines for this CV app. Use when styling, layout, spacing, and typography changes are requested.
---

# Tailwind skill

Use this skill when editing styles in this repository.

## Current setup

- Tailwind CSS v4 with `@tailwindcss/vite`
- CSS-first config in `app/tailwind.css` (`@import`, `@plugin`, `@theme`)
- Theme tokens from `@palettebro/tailwind` + `@palettebro/generator`
- Dark mode via `data-theme="light|dark"` on `<html>` (Palettebro plugin registers the `dark` variant)
- Plugins in use:
  - `@palettebro/tailwind`
  - `tailwindcss-animate`
- No `tailwind.config.ts` / PostCSS Tailwind pipeline

## Project conventions

- Prefer semantic palettebro tokens (`bg-background`, `text-on-surface`, `border-outline-variant`) over hardcoded `gray-*` / `slate-*`.
- Prefer utility classes directly in components.
- Reuse existing spacing and layout patterns before adding new ones.
- Keep visual changes incremental and readable (small diffs over large redesigns).
- Use responsive prefixes (`sm:`, `md:`, `lg:`) only where needed.
- Class order is not auto-sorted (Biome does not sort Tailwind classes); keep strings readable.

## Practical guidance

- For section shells, prefer this pattern:
  - `rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm`
- For section titles, prefer:
  - `text-sm font-semibold uppercase tracking-wide text-on-surface-variant`
- For skill/tag pills, reuse existing badge components instead of duplicating class strings.
- Theme switcher lives in `ThemeSwitcher` and stores preference in `localStorage` (`matteolc-theme`).
- Change palette seeds in `app/tailwind.css` under `@plugin '@palettebro/tailwind'`.

## Avoid

- Reintroducing a JS Tailwind config unless a plugin cannot load via `@plugin`.
- New CSS files for one-off tweaks that utilities can handle.
- Inline styles unless there is no Tailwind equivalent.
