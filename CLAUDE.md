# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Gmail email signature builder — a single-page Next.js app where users fill in details, pick a template/colors/fonts, see a live preview, and copy the resulting HTML signature to their clipboard for pasting into Gmail settings.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — run Next.js linter

No test framework is configured.

## Architecture

**State management:** A single Zustand store (`lib/store.ts`) holds all signature data. Both the Editor and Preview components read/write this store directly — there is no prop drilling. The `SignatureData` interface in `lib/types.ts` is the single source of truth for every customizable field.

**Template rendering:** Templates live in `lib/templates/` and are pure functions `(SignatureData) => string` that return raw HTML strings. They are registered in `lib/templates/index.ts`. The HTML they produce must be **Gmail-compatible** — this means inline styles only, table-based layouts, no CSS classes, no `<div>`, no flexbox/grid. Social media icons use Icons8 hosted PNGs (`img.icons8.com`).

**UI layout:** The app is a two-panel layout — editor sidebar (left, 380px on desktop) and preview pane (right). On mobile, a tab switcher toggles between them. The editor uses collapsible `Section` accordion components containing reusable field components (`Field`, `Toggle`, `ColorField`, `SelectField`, `SliderField`) from `components/Editor/Fields.tsx`.

**Copy mechanism:** The "Copy Signature" button writes `text/html` to the clipboard via `ClipboardItem` so Gmail preserves formatting on paste. Falls back to plain text copy.

## Key Constraints

- **All signature HTML must be Gmail-safe.** No external CSS, no `<style>` blocks, no `<div>`, no modern CSS (flex, grid). Use `<table>` layouts with inline `style` attributes. Test by actually pasting into Gmail.
- **Fonts must be email-safe.** The available fonts in `FONT_OPTIONS` are limited to stacks that render in email clients.
- **Images must be publicly hosted HTTPS URLs** to display in Gmail. Uploaded file previews use local blob URLs that won't render in sent emails.
- **Icons8 attribution** is required (footer link) because social icons are served from their CDN.
- The app UI uses Tailwind with custom `surface` (warm stone grays) and `accent` (blue) color tokens, plus `DM Sans` / `Instrument Serif` Google Fonts. These are for the builder UI only — signature output HTML uses its own inline styles.
