---
name: react
description: React component patterns for this CV app. Use when creating or editing UI components.
---

# React skill

Use this skill for component-level changes.

## Current setup

- React 18
- TypeScript components in `app/components`
- Presentational structure is mostly stateless functional components

## Project conventions

- Prefer small, readable components with explicit props.
- Keep imports at the top of files (no inline imports).
- Avoid `dangerouslySetInnerHTML` unless absolutely required.
- Use stable keys in `map` output (never array index keys when avoidable).

## Practical guidance

- Reuse existing UI primitives:
  - `SkillBadge`
  - `YearBadge`
  - `SkillCard`
  - `WorkExperienceCard`
- Keep component props simple and serializable.
- If a string is reused in multiple places, move it into `app/data`.

## Avoid

- New global state for static CV content.
- Premature optimization or memoization.
