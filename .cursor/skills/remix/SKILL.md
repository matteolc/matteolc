---
name: remix
description: Remix conventions for routes, layout, metadata, and rendering in this app.
---

# Remix skill

Use this skill for route, layout, rendering, and app-shell updates.

## Current setup

- Remix v2 on Vite
- Main route file: `app/routes/_index.tsx`
- Root app shell: `app/root.tsx`
- Meta is set via route-level `meta` exports.

## Project conventions

- Keep route modules small and focused.
- Prefer simple component composition over introducing extra abstractions.
- Keep `meta` and document structure explicit in route/root files.
- Use `Outlet`-based composition from `app/root.tsx`.

## Practical guidance

- New content sections should be components under `app/components`.
- Data content should live in `app/data/*` and be imported by components.
- Keep build compatibility with:
  - `npm run build`
  - `npm run lint`

## Avoid

- Mixing data definitions inside large JSX blocks when `app/data` already fits.
- Introducing loaders/actions unless the feature actually needs server interaction.
