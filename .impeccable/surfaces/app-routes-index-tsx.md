---
version: 1
slug: "app-routes-index-tsx"
primary_target: "app/routes/_index.tsx"
related_targets: ["README.md"]
---

## Scope

CV site index route (`app/routes/_index.tsx`) plus the GitHub profile README banners (`assets/*.svg`, `README.md`). Visitor mode: Experience. Audience: recruiters and engineering peers, equally. Actions: contact (GitHub, LinkedIn), download CV (PDF/TXT), explore work (Palettebro, repos). Build path: code-led.

## Direction contract

THESIS: Matteo is a service that has been in production since 2003; the page is his live observability console, read as broadcast pages. It refuses the category default of a centred photo, intro paragraph and stacked job cards.

OWN-WORLD: Control-room ink ground tinted from the Palettebro teal; a fixed, named signal palette (OK mint, INFO cyan, WARN amber) where each colour has one job; Martian Mono (variable width and weight) for every readout, Hanken Grotesk for prose; hairline panel rules on a ch-unit grid; three-digit page addresses (100, 200, 300, 400, 500) as the navigation. The light theme is continuous green-bar fanfold printout paper, bands following the printed data rows. No glow, no scanlines, no glass.

STORY: In one viewport the visitor reads who he is, that he has 23 years of uptime, what he runs now, and where to reach him; scrolling, the career resolves as a trace waterfall, the stack as a metrics table, the work as services, the schooling as logs.

FIRST VIEWPORT: One-line status bar across the top (host, uptime in years (the CV records only the start year 2003, so no invented day count), live Milan clock, page-address nav 100-500, theme toggle). Below, the name at display scale in Martian Mono, its width and weight axes sweeping from condensed hairline to wide heavy as the signal locks, block cursor after it; role and qualification on one readout line; the prose summary; the action row (GitHub, LinkedIn, CV.pdf, CV.txt) as console commands. Right column on desktop (below on mobile): a log tail that boots the career from 2003 to now, line by line, ending on the live cursor.

FORM: Pinned by the user (observability console), not from the ordered list; raised by teletext (keyboard page addressing and a fixed named palette) and variable-font specimen (axis-animated name). Seed key 649e2457.

Raise from teletext: every section owns a three-digit page address, keys 1-5 jump to them, the palette is fixed and named.
Raise from variable-font specimen: the name's wdth and wght axes animate as the boot signal locks.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction and motion grammar

Boot sequence once on load: name axis sweep plus the log tail typing, about 2.4s total, already-visible default under reduced motion. Trace spans draw left-to-right as the waterfall scrolls into view (scroll-driven, CSS only). The Milan clock ticks each second. Hover on a span highlights its row and its time range on the axis. Nothing else moves.

## Unresolved

- None blocking.
