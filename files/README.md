# Signature Builder

A web-based Gmail signature builder with live preview, multiple templates, and one-click copy-to-clipboard.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **3 templates** — Modern, Bold, Compact (more coming)
- **Full customization** — colors, fonts, sizes, dividers, social icons, CTA buttons
- **One-click themes** — 8 pre-built color themes
- **Live preview** — real-time updates as you type
- **Gmail-safe HTML** — table-based layout, all inline CSS, web-safe fonts
- **Copy to clipboard** — copies rich HTML for direct paste into Gmail settings
- **HTML view** — inspect and copy the raw HTML source

## Deploying

Push to GitHub and import into [Vercel](https://vercel.com/new):

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

Vercel auto-detects Next.js — no config needed.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + TypeScript
- **Tailwind CSS**
- **Zustand** (state management)
- **react-colorful** (color pickers)
- **Lucide React** (icons)

## Project Structure

```
├── app/
│   ├── page.tsx          # Main editor page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Tailwind + fonts
├── components/
│   ├── Editor/           # Sidebar with form controls
│   └── Preview/          # Live preview + copy button
├── lib/
│   ├── types.ts          # SignatureData interface + defaults
│   ├── store.ts          # Zustand store
│   └── templates/        # Gmail-safe HTML renderers
│       ├── index.ts      # Template registry
│       ├── modern.ts     # Modern template
│       ├── bold.ts       # Bold template
│       ├── compact.ts    # Compact template
│       └── social-icons.ts
└── package.json
```
