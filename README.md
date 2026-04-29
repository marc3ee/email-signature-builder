# Signature Builder

A web-based Gmail signature builder that lets you design, customize, and copy professional HTML email signatures — no coding required.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

### 1. Pick a Template

Choose from three layouts in the **Template** section at the top of the sidebar:

- **Modern** — clean layout with optional photo, divider, and stacked contact info
- **Bold** — colored left accent bar with uppercase name
- **Compact** — minimal, single-line style

All your data carries over when you switch templates.

### 2. Fill in Your Details

Expand each section in the sidebar to customize your signature:

- **Personal Info** — name, job title, department, company, pronouns
- **Contact Details** — email, phone, mobile, website, address (each can be toggled on/off)
- **Social Links** — paste your profile URLs for LinkedIn, Twitter/X, Instagram, Facebook, YouTube, GitHub, or TikTok. Icons appear automatically for any link you fill in; leave a field empty to hide that icon.

### 3. Add Your Photo

Under the **Images** section:

- Toggle **Show headshot** on
- Click **Upload photo** to select an image from your computer (this creates a local preview)
- Or paste a hosted image URL into the "Or paste image URL" field

**Important:** Gmail only displays images hosted at a public HTTPS URL. Uploaded photos work in the preview but will not render in Gmail unless you use a hosted URL.

### 4. Style It

- **Colors** — pick from 8 quick themes (Slate, Ocean, Forest, Sunset, Berry, Midnight, Charcoal, Rose) or fine-tune individual colors for name, title, body text, and links
- **Typography** — choose a Gmail-safe font, adjust name size, body size, and line height
- **Divider** — toggle on/off, pick solid/dashed/dotted, set color and width

### 5. Add a Call to Action (Optional)

In the **Call to Action** section, enter button text and a URL. A styled button will appear in your signature — great for "Book a meeting", "Visit our site", or promotional links.

You can type URLs with or without `https://` — the builder adds it automatically.

### 6. Preview and Copy

The right side of the screen shows a live preview of your signature inside a mock email. It updates instantly as you type.

When you're happy with it:

1. Click the **Copy Signature** button (top right)
2. Open **Gmail** in your browser
3. Click the **gear icon** (top right) → **See all settings**
4. Scroll down to the **Signature** section
5. Click **+ Create new** and give it a name
6. Click inside the signature text box and press **Ctrl+V** (or **Cmd+V** on Mac)
7. Scroll to the bottom and click **Save Changes**

Every new email you compose will now include your signature automatically.

### Source Code Tab

The **Source Code** tab next to Preview shows the raw HTML output. This is for developers who want to inspect or manually embed the signature. Regular users should use the **Copy Signature** button instead.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS**
- **Zustand** (state management)
- **react-colorful** (color pickers)
- **Lucide React** (icons)
- **Icons8** (social media icons)

## Project Structure

```
app/
  page.tsx              # Main editor page
  layout.tsx            # Root layout
  globals.css           # Tailwind + fonts
components/
  Editor/               # Sidebar with form controls
    index.tsx           # Main editor component
    Section.tsx         # Collapsible accordion
    Fields.tsx          # Reusable form fields
  Preview/
    index.tsx           # Live preview + copy button
lib/
  types.ts              # Data model + defaults + themes
  store.ts              # Zustand store
  url.ts                # URL utility
  templates/            # Gmail-safe HTML renderers
    index.ts            # Template registry
    modern.ts
    bold.ts
    compact.ts
    social-icons.ts
package.json
```

## License

MIT
