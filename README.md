# Swift Cargo CRM — complete compatibility package

This package contains the **entire supplied CRM application** running inside a Vite + React + TypeScript host. The original CRM source was preserved as the runtime during this first complete-package delivery, with its CSS and main application script extracted into separate static assets. This is deliberately a compatibility bridge, not a claim that all 895 original functions have already been rewritten as React components/hooks.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. The CRM is served from `/legacy/index.html` inside the React host.

## Production build

```bash
npm run build
npm run preview
```

## Supabase and data safety

- The original HTML's Supabase project URL and publishable/anon key configuration are retained unchanged in `public/legacy/scripts/legacy-app.js`.
- The original application continues to use its existing Supabase tables, queries, authentication, and RLS behavior.
- No SQL migration is included or required to run this compatibility package.
- No production database is reset, modified, or copied by this package.
- Backup & Recovery changes discussed separately are not added to this migration.

## Included source layout

- `src/` — Vite/React/TypeScript host and isolated workspace component.
- `public/legacy/index.html` — original CRM markup and vendor script references.
- `public/legacy/styles/legacy.css` — original style blocks concatenated in their original cascade order.
- `public/legacy/scripts/legacy-app.js` — original inline application runtime, preserved as-is.

## Important performance note

This package establishes the Vite/React project and preserves the full working CRM rather than replacing complex screens with placeholders. The original imperative CRM runtime is still loaded inside an iframe, so this package does **not yet deliver the full performance gains of a feature-by-feature React rewrite**. The next migration work must move each real feature and its data operations into React modules, validating parity against the original before retiring the compatibility runtime.

## Required validation before deployment

1. Run `npm install` and `npm run build`.
2. Test sign-in, sign-out, refresh, and role-based navigation.
3. Test imports, assignments, Data Hub edits, daily entries, calendar, JOC tools, analytics, settings, and exports.
4. Confirm behavior with a non-admin account and an admin account.
5. Deploy to a staging URL first; do not replace the current production URL until acceptance testing passes.

The browser must be able to reach the existing Supabase project and the CDN dependencies referenced by the original application.

## GitHub Pages deployment

This repository is configured for the GitHub Pages project URL:

`https://<YOUR-GITHUB-USERNAME>.github.io/swift-cargo-crm-complete/`

The deployment configuration uses the repository path as Vite's `base`, passes that base to React Router, and keeps the legacy iframe's CSS/JavaScript references relative to `public/legacy/index.html`.

1. Push the project to the `main` branch of `swift-cargo-crm-complete`.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy Swift Cargo CRM to GitHub Pages** to finish successfully.
5. Open the Pages URL shown by the deployment.

The workflow runs `npm ci` and `npm run build` on GitHub, then publishes `dist/`. Do not commit `node_modules/`, `dist/`, or local `.env` files.
