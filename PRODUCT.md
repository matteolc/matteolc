# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Recruiters and hiring managers deciding whether to contact Matteo.
- Engineers and peers arriving from his GitHub profile.

Both audiences matter equally. Most arrive from a link (GitHub, LinkedIn, a CV attachment) and give the page about a minute.

## Product Purpose

Personal CV site for Matteo La Cognata, Senior Software Engineer at Nearform, served at `matteolc.github.io/matteolc`. The same repo's `README.md` is his GitHub profile README. Success after one minute: the visitor contacts him (GitHub or LinkedIn), downloads the PDF CV, or explores his work (Palettebro, GitHub repos).

## Positioning

An engineer in tech since 2003 whose path runs from embedded HDL/FPGA and telecom (VoIP, SS7 softswitches) through freelance Rails to TypeScript product engineering, production delivery, and observability, who also designs (creator of Palettebro). The arc from signal hardware to production observability is his alone.

## Operating Context

Visitors scan on desktop between other tabs and on phones from LinkedIn/GitHub links. The GitHub README renders inside github.com and cannot run CSS or JS; only images (including animated SVG) and markdown.

## Capabilities and Constraints

- React Router 7 SPA (`ssr: false`), Tailwind v4, Biome, deployed to GitHub Pages under base `/matteolc/`.
- CV content lives in `app/data/*.ts`; PDF/TXT/MD resumes in `public/` must stay downloadable.
- Light/dark theme with a cookie + localStorage preference must keep working.

## Brand Commitments

- The user chose an observability-console / terminal identity for both the site and the GitHub README.
- Public contact links: GitHub (`https://github.com/matteolc`) and LinkedIn (`https://www.linkedin.com/in/matteolc`). No email on the page.

## Evidence on Hand

- Work history, skills, education: `app/data/work-experience.ts`, `app/data/skills.ts`, `app/data/education.ts`, `app/data/heading.ts`.
- Projects: Palettebro (`https://palettebro.com`), `palettebro-packages`, `nextjs-rag`, `react-router-rag` (see `README.md`).
- Portrait: `public/profile.jpeg`.
- No testimonials, metrics, or employer endorsements exist; do not invent any.

## Product Principles

- Facts over adjectives: every number shown is derived from the CV data.
- One minute to a decision: contact, CV, and work are reachable from the first viewport.
- Both readers served: a recruiter gets roles and years at a glance, an engineer gets stack depth.
