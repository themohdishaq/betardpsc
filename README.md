# RD Prestidge Services Corp.

Next.js App Router website using React, TypeScript, Tailwind CSS v4, and Lucide icons.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use npm.cmd if script execution is restricted.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Pages

The routes are /, /about, /services, /resources, /contact, and /consultation. The shared navbar and footer are rendered by app/layout.tsx.

## Layouts and metadata

The root `app/layout.tsx` owns the homepage metadata, shared viewport settings, fonts, navbar, and footer. Each other route has its own `layout.tsx` with its title, description, Open Graph, and Twitter metadata. Update those layouts when editing page metadata; `page.tsx` files contain page content. Nested layouts inherit the shared shell and do not render a second navbar or footer.

## Styling

Write Tailwind utilities directly in JSX className attributes. Responsive layouts, hover/focus states, gradients, shapes, and pseudo-elements all use inline utilities and arbitrary variants. There are no page/component style maps or CSS modules. app/globals.css contains only Tailwind imports, shared theme tokens, and base styles.

## Integrations

Contact and consultation forms open an email draft for the visitor to send; they do not submit to a backend. The homepage inquiry and newsletter forms still require delivery integrations. Some footer destinations are placeholders for future pages. Replace partner text wordmarks with official assets when available.
