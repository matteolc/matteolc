---
name: matteolc.prod
description: Matteo La Cognata's CV read as a live observability console; printed as green-bar fanfold in light.
colors:
  console-ground: "oklch(0.165 0.014 190)"
  console-panel: "oklch(0.2 0.016 190)"
  console-rule: "oklch(0.33 0.02 190)"
  console-ink: "oklch(0.94 0.012 170)"
  console-dim: "oklch(0.74 0.018 180)"
  console-ok: "oklch(0.85 0.15 158)"
  console-info: "oklch(0.8 0.11 222)"
  console-warn: "oklch(0.84 0.15 78)"
  printout-ground: "oklch(0.985 0.005 150)"
  printout-panel: "oklch(0.92 0.045 155)"
  printout-band: "oklch(0.945 0.035 155)"
  printout-hole: "oklch(0.9 0.012 150)"
  printout-rule: "oklch(0.8 0.035 158)"
  printout-ink: "oklch(0.23 0.025 185)"
  printout-dim: "oklch(0.43 0.03 180)"
  printout-ok: "oklch(0.47 0.12 158)"
  printout-info: "oklch(0.47 0.12 238)"
  printout-warn: "oklch(0.52 0.13 62)"
typography:
  display:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(2.4rem, 8.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112.5"
  headline:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112.5"
  title:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.5
  body-lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  readout:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'tnum'"
  label:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'tnum'"
  label-micro:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  hair: "2px"
  xs: "6px"
  sm: "8px"
  md: "16px"
  lg: "40px"
  section: "112px"
components:
  action-primary:
    backgroundColor: "{colors.console-warn}"
    textColor: "{colors.console-ground}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  action-primary-hover:
    backgroundColor: "{colors.console-ink}"
    textColor: "{colors.console-ground}"
  action-secondary:
    backgroundColor: "{colors.console-ground}"
    textColor: "{colors.console-ink}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  action-secondary-hover:
    textColor: "{colors.console-warn}"
  page-address:
    textColor: "{colors.console-ink}"
    typography: "{typography.label}"
    padding: "4px 8px"
  page-address-active:
    backgroundColor: "{colors.console-warn}"
    textColor: "{colors.console-ground}"
  log-panel:
    backgroundColor: "{colors.console-panel}"
    textColor: "{colors.console-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px"
  skill-chip:
    textColor: "{colors.console-dim}"
    typography: "{typography.label-micro}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  meter-cell-on:
    backgroundColor: "{colors.console-ok}"
    width: "8px"
    height: "10px"
  meter-cell-off:
    backgroundColor: "{colors.console-rule}"
    width: "8px"
    height: "10px"
---

# Design System: matteolc.prod

## Overview

**Creative North Star: "The Night-Shift Console"**

The CV is a production service that has been up since 2003, and the page is its operator's console: a status bar, then broadcast pages addressed 100 to 500 (status, traces, metrics, services, logs). Everything that is a fact (a year, a level, a name, a command) is set as a monospaced readout; only sentences fall back to a grotesque. Surfaces are flat panels divided by hairline rules on a character-unit grid, and colour is a fixed signal vocabulary rather than decoration.

The dark theme ("crt", the default `:root`) is a control room at night: an ink ground tinted from the Palettebro teal. The light theme ("print") is not a lightened screen but a different physical medium, continuous green-bar fanfold printout: pale paper, mint bands that follow the printed data rows, and tractor-feed hole margins on wide screens. Both themes share every token name; only the values move.

Density is that of a working instrument: tight label sizes, tabular figures, wide gutters between pages. The single expressive gesture is the boot: the name's width and weight axes sweep from condensed hairline to wide heavy as the signal locks, and the career log types in line by line. After that, only the clock, the cursor and the heartbeat move. No glow, no scanlines, no glass.

**Key Characteristics:**
- Two themes, one token set: console (dark) and green-bar printout (light).
- Fixed signal palette, one job per colour: OK, INFO, WARN.
- Martian Mono for every readout, variable `wdth` and `wght`; Hanken Grotesk for prose only.
- Three-digit page addresses as navigation, keyboard keys 1-5.
- Flat panels, hairline rules, square corners, square status dots.
- Boot once on load, then still; reduced motion shows the final state.

## Colors

A near-monochrome teal-tinted ground carrying three named signal colours, each with exactly one job; every role exists in both themes under the same name (`--ground`, `--panel`, `--rule`, `--ink`, `--dim`, `--ok`, `--info`, `--warn`, plus printout-only `--band` and `--hole`).

### Primary
- **Amber Warn** (console-warn / printout-warn): the operator's attention. Page-address numerals, the block cursor, the focus ring, text selection, the caret, the primary action, the active nav page, and every hover state (span highlight, link, row title). In the printout it darkens to a burnt amber so it reads as ink on paper.

### Secondary
- **Mint OK** (console-ok / printout-ok): healthy and current. The heartbeat square, `running`, `live`, the current role's trace span, `OK` log levels, filled meter cells.

### Tertiary
- **Cyan Info** (console-info / printout-info): informational and historical. Past trace spans, `INFO` log levels, external host links at rest. In the printout it shifts toward blue (hue 238) to stay distinct from the green paper.

### Neutral
- **Control-Room Ink Ground** (console-ground) / **Fanfold Paper** (printout-ground): page background and the sticky status bar.
- **Panel Teal** (console-panel) / **Green-Bar Mint** (printout-panel): the log-tail panel and row hover fill.
- **Hairline Rule** (console-rule / printout-rule): every border, gridline, unfilled meter cell, the scrollbar thumb.
- **Phosphor Ink** (console-ink) / **Ribbon Ink** (printout-ink): primary text and the 2px page-header rules.
- **Dim Readout** (console-dim / printout-dim): secondary text, labels, metadata, verbs on actions.
- **Printout Band** (printout-band): alternate-row bands on printed data rows; transparent in the console.
- **Tractor Hole** (printout-hole): the punched-hole dots in the printout's side margins.

### Named Rules
**The One Job Rule.** OK means healthy or current, INFO means past or informational, WARN means "look here". A colour never borrows another's meaning, and none of them is used as a decorative fill.

**The Amber Is The Operator Rule.** Every interactive affordance resolves to warn on hover or focus. If an element turns amber, it can be acted on; if it cannot be acted on, it does not turn amber (the page-address numerals are the one static use, because they are the navigation).

## Typography

**Display Font:** Martian Mono (with ui-monospace, SFMono-Regular, Menlo, Consolas, monospace), self-hosted variable woff2, `wght` 100-800, `wdth` 75-112.5%.
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif), self-hosted variable woff2, `wght` 100-900.

**Character:** A wide, engineered monospace that behaves like a typeface specimen at display size and a terminal at label size, paired with a quiet humanist grotesque that only ever carries sentences. Tabular figures are on globally.

### Hierarchy
- **Display** (800, clamp(2.4rem, 8.4vw, 6rem), 0.95, wide 112.5%): the name only, with a blinking block cursor. A closing variant at clamp(2rem, 6vw, 4.5rem), leading 1, sits in the footer ("Open a channel").
- **Headline** (800, 3rem from `sm`, 1.875rem below, wide 112.5%, uppercase, tight tracking): page headers, numeral in warn then title in ink.
- **Title** (700, 1.125rem mono): service names. Company and degree titles in rows use Hanken Grotesk 600 at body size.
- **Body Lead** (400, 1.125rem, 1.625): the hero summary, capped at 62ch.
- **Body** (400, 1rem): row descriptions and bullets, capped at 68ch; secondary sentences in dim.
- **Readout** (400, 0.75-0.875rem mono, uppercase in the hero): role-and-qualification line and action buttons.
- **Label** (400, 0.7rem mono): status bar, log tail, metric figures.
- **Label Micro** (400, 0.65rem mono, usually uppercase): axis years, date ranges, skill chips, host names, footer line.

### Named Rules
**The Readout Rule.** If it is a number, a date, a status, a command, a name or a label, it is Martian Mono. Hanken Grotesk is reserved for sentences a person would read aloud.

**The Width Is Rank Rule.** Display and headline text is set wide (`wdth` 112.5%) and extra-bold; small mono stays at normal width. Width, not colour, signals hierarchy in the monospace.

**The Signal Lock Rule.** The name's axes animate exactly once: `wght` 100 → 800 and `wdth` 75% → 112.5% with tracking 0.12em → -0.02em over 1.6s on `cubic-bezier(0.16, 1, 0.3, 1)`. No other text animates its axes.

## Layout

A single centred column, max 1400px, with gutters of 20px, 40px from `sm` and 64px from `xl`. The status bar is sticky, full-bleed, and reuses the same inner container so its readouts align with the page. Pages are vertical bands separated by 80px (112px from `md`) of padding, each opened by a page header with a 2px ink rule on top.

Columns are measured in `ch` wherever data aligns: log lines on `5ch 5ch 1fr`, logs on `11ch 5ch 1fr`, services on `7ch 22rem 1fr auto`. The trace waterfall uses a fixed 19rem label column beside a proportional 2003 → now time axis with gridlines at 2005, 2010, 2015, 2020 and 2025. Metrics reflow from one to two (`md`) to three (`xl`) tables. The hero splits into prose and a 27rem log-tail column at `lg`, bottom-aligned; below `lg` the log tail stacks under the prose. On narrow screens the page-address nav wraps to its own full-width line and labels collapse to numerals (kept for screen readers).

From 1280px the printout theme adds tractor-feed margins: 2.25rem strips at both page edges with a 1.5rem-pitch dot pattern and a dashed rule inboard.

**The Green-Bar Rule.** Bands follow the printed data rows: any list or table body of records gets the `greenbar` treatment (odd children filled with `--band`). Bands are invisible in the console, so the structure costs nothing in dark.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is conveyed by one tonal step (ground → panel) and by hairline rules; the only "raised" surface is the log-tail panel, and hover fills rows with the panel tone instead of lifting them. The sticky status bar separates by a bottom rule on an opaque ground.

### Named Rules
**The No-Glow Rule.** No shadows, glows, scanlines, blur or glass in either theme. A console screen here is lit flat; a printout is paper. Separation comes from a 1px rule or a tonal step.

## Shapes

Square everywhere: radius 0 on buttons, panels, chips and meter cells. Status indicators are filled squares (8px in the status bar, 6px inline), never dots. The cursor is a solid block, about 0.5em by 0.78em. Borders are 1px hairlines in rule colour; page headers and table captions take a heavier 2px ink rule as a section break. Gridlines in the waterfall are 1px rule at 60% opacity. Bracket glyphs `[+]` / `[-]` and a mono `-` bullet are set as text, as a terminal would print them.

## Components

### Buttons (Console Commands)
Actions read as commands: a dim verb followed by a bold object (`connect LinkedIn`, `follow GitHub`, `get CV.pdf`).
- **Shape:** square (0), 12px by 16px padding, readout size mono, baseline-aligned verb and label 8px apart.
- **Primary:** warn fill, ground text, verb at 70% opacity. One per row (LinkedIn).
- **Hover / Focus:** primary fills with ink; focus is the global 2px warn outline offset 3px.
- **Secondary:** 1px rule border on ground, verb in dim; hover turns border and label warn.

### Chips
- **Style:** skill tags in Label Micro uppercase, dim text, 1px rule border, 4px by 8px padding, square, 6px gaps. Static, never interactive.

### Cards / Containers
- **Corner Style:** square (0).
- **Background:** panel tone; used only for the log-tail figure.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px rule, with a ruled caption bar (`tail -f career.log` left, square heartbeat and `LIVE` in ok right).
- **Internal Padding:** 16px body, 8px by 16px caption.

### Navigation (Page Addresses)
- **Style:** an ordered list in the status bar, Label size mono uppercase; each entry is a warn three-digit address followed by its label (`100 status` … `500 logs`).
- **States:** hover turns the label warn; the page currently in view (intersection-observed) is inverted to a warn block with ground text, marked `aria-current="location"`.
- **Keyboard:** keys 1-5 jump to the pages (`aria-keyshortcuts`), ignored with modifiers or inside form fields; the footer states it.
- **Mobile:** wraps to a full-width line under the readouts; labels become screen-reader-only.

### Theme Toggle
A single text button, `crt / print`, Label uppercase in dim; the active medium is warn, hover lifts to ink. `aria-pressed` reflects the console state and the label names the medium you will switch to.

### Page Header
2px ink top rule, 16px gap, then the headline: warn address numeral and uppercase wide title, with a dim Label Micro meta readout (`experience · 8 spans · 2003 → now`) right-aligned on the same baseline, wrapping below on narrow screens.

### Trace Waterfall (Signature)
Each role is a `details` row: company (grotesque 600), position (dim), and a Label Micro date range with the duration in ink, beside a 12px-tall span bar positioned on the shared time axis; current role in ok, past in info, minimum width 0.5rem. Hover or keyboard focus turns the bar warn and reveals a warn-bordered, 10%-warn time-range band across the axis. Spans draw left-to-right as they scroll into view (scroll-driven `scaleX`, CSS only, where `animation-timeline` is supported). Expanding reveals description, `-` bullets in warn, skill chips and an info host link.

### Metric Meter
Skills as tables: a 2px ink caption with category and count, Label Micro column heads (series, since, yrs, level), and a level meter of five 8px by 10px square cells, ok when filled, rule when empty, with an sr-only "level n of 5".

### Boot Log
Log lines as a `5ch 5ch 1fr` grid (year in dim, level in ok or info, message in ink), each revealed by a left-to-right clip at 110ms intervals after a 500ms delay, ending on `now OK healthy, accepting connections` and the live block cursor.

### README Banners
`scripts/readme-banners.ts` renders the hero and trace waterfall as animated SVGs (`assets/banner-{dark,light}.svg`, `assets/traces-{dark,light}.svg`) for the GitHub profile, which cannot run CSS or JS. They embed a Martian Mono subset and the same OKLCH values, reuse the signal-lock and blink keyframes, and paint printout bands as 72px stripes. Because SVG cannot reuse the site's clip-path reveal on text groups, lines enter with a 6px slide and fade instead.

## Do's and Don'ts

### Do:
- **Do** define every new colour as a theme pair on the shared role names (`--ground`, `--panel`, `--rule`, `--ink`, `--dim`, `--ok`, `--info`, `--warn`) so both console and printout get it.
- **Do** give each new section a three-digit page address in warn, a Page Header, and a number key.
- **Do** set every figure, date, status and label in Martian Mono with tabular numerals.
- **Do** apply `greenbar` to any list or table of records.
- **Do** resolve hover and focus to warn (2px warn outline, 3px offset for focus).
- **Do** keep motion to the boot sequence, the clock, the cursor blink and the heartbeat, and show the final state under `prefers-reduced-motion`.
- **Do** use the `cubic-bezier(0.16, 1, 0.3, 1)` ease-out for any reveal.

### Don't:
- **Don't** add shadows, glows, scanlines, blur or glassy surfaces in either theme.
- **Don't** round corners or use circular status dots; indicators are squares.
- **Don't** use ok, info or warn as decoration or outside their single meaning.
- **Don't** set prose in the monospace or readouts in Hanken Grotesk.
- **Don't** animate font axes on anything except the name's single boot sweep.
- **Don't** treat the light theme as an inverted screen; it is paper with bands and tractor-feed margins.
