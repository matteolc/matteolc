---
name: remix-content
description: CV wording and content conventions. Use when editing copy in app/data or public resume files.
---

# Remix content skill

Use this skill when updating CV text, summaries, experience bullets, or skills lists.

## Where content lives

- `app/data/heading.ts` — name, role, summary, headline skills
- `app/data/work-experience.ts` — roles and bullet points
- `app/data/education.ts` — education entries
- `app/data/skills.ts` — technical skills with levels
- `public/Matteo_La_Cognata_Resume.md` and `.txt` — downloadable exports (keep in sync when asked)

## Tone and style

- Write in clear, professional English.
- Lead bullets with strong verbs (Built, Shipped, Mentored, Designed).
- Prefer concrete outcomes over vague claims; avoid filler like "highly experienced and detail-oriented."
- Keep bullets one line where possible; trim repetition across roles.
- Use consistent title casing (e.g. Senior Software Engineer).

## Practical guidance

- Summary: 2–3 sentences — current role/location, focus areas, languages only when relevant (Italian mother tongue; professional English). Do not list other languages unless asked.
- Experience: 4–6 bullets for recent roles; fewer for older roles.
- Do not invent metrics or employers; only refine wording of existing facts.

## Avoid

- Buzzword stacking and every bullet starting with "Increased" or "Enhanced."
- HTML in plain-text description fields (render as React text, not `dangerouslySetInnerHTML`).
