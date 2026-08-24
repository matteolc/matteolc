---
name: typescript
description: TypeScript guardrails for this repository. Use for type-safe edits and refactors.
---

# TypeScript skill

Use this skill whenever touching `.ts` / `.tsx` files.

## Current setup

- TypeScript compiler via `npm run typecheck`
- ESLint with TypeScript rules
- React + Remix TypeScript codebase

## Project conventions

- Prefer explicit prop typing for components.
- Keep union handling exhaustive where applicable.
- Use `import type` when importing types only.
- Keep string literal unions local unless reuse is clear.

## Practical guidance

- Favor inference for local variables, explicit types for public component props.
- Avoid `any`; if unavoidable, constrain with `unknown` + narrowing.
- Keep utility types simple; avoid deep type-level programming for this project.

## Validation

- Run:
  - `npm run lint`
  - `npm run typecheck`

## Avoid

- Complex generic abstractions unless they clearly reduce repetition.
