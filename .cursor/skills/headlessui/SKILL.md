---
name: headlessui
description: Guidance for Headless UI and Heroicons usage in this project.
---

# Headless UI and Heroicons skill

Use this skill when adding interactive primitives or iconography.

## Current setup

- `@headlessui/react`
- `@heroicons/react`

## Project conventions

- Prefer Headless UI components for accessibility-critical interactions.
- Keep icon usage consistent in size and color with existing Tailwind tokens.
- Use semantic markup first, then decorate with icons.

## Practical guidance

- For decorative icons, set `aria-hidden="true"`.
- For meaningful icons, provide accessible labels or nearby text context.
- Keep interaction patterns keyboard-friendly by default.

## Avoid

- Rebuilding accessible primitives manually if Headless UI already covers the need.
- Large icon sets or custom wrappers unless repetition justifies them.
