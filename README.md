# Gabriel Bomfim Portfolio

Professional portfolio for Gabriel Bomfim, Senior Software Engineer focused on PHP, Laravel, Symfony, SaaS products, backend systems, and enterprise integrations.

## Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Local typed content
- Static export
- ESLint
- Prettier

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Structure

```text
src/
  app/                App Router pages, metadata routes, and global CSS
  components/         Reusable portfolio sections and UI primitives
  content/            Typed EN-US and PT-BR content
  hooks/              Browser-only theme and language persistence
  lib/                Constants and metadata helpers
public/
  images/portrait/   Professional portrait
  images/orcafast/   OrçaFast logo and screenshots
  resume/            Resume PDF files
```

## Editing Content

Update copy in:

- `src/content/en-US.ts`
- `src/content/pt-BR.ts`

The content shape is typed in `src/content/types.ts`.

## Replacing Assets

Use the existing filenames so components keep working:

- `public/images/portrait/gabriel-bomfim.jpg`
- `public/images/orcafast/logo.svg`
- `public/images/orcafast/logo-dark.png`
- `public/images/orcafast/dashboard-desktop.png`
- `public/images/orcafast/dashboard-mobile.png`
- `public/images/orcafast/clients-mobile.png`
- `public/images/orcafast/financial-goals-mobile.png`
- `public/images/orcafast/team-ranking-mobile.png`
- `public/images/orcafast/create-quote-mobile.png`
- `public/images/orcafast/shared-quote-mobile.png`
- `public/images/orcafast/downloadable-quote-mobile.png`

## Resume Files

The English resume is available at:

```text
public/resume/gabriel-bomfim-resume-en.pdf
```

The project is prepared for a Portuguese resume at:

```text
public/resume/gabriel-bomfim-resume-pt-br.pdf
```

Do not add a placeholder PDF. Add the Portuguese file only when the real version exists.

## Domain

Set the canonical site URL with:

```bash
NEXT_PUBLIC_SITE_URL=https://gabrielbomfim.com
```

If the variable is not defined, metadata falls back to `http://localhost:3000`.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Static Export

```bash
npm run build
```

Because `next.config.ts` uses `output: "export"`, the static site is generated in:

```text
out/
```

## Publishing on Vercel

1. Import the repository in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Use the default Next.js build command: `npm run build`.

## Publishing Static Files Elsewhere

1. Run `npm run build`.
2. Upload the generated `out/` directory to the static host.
3. Configure the host to serve `index.html` for the root path.
4. Set the production domain in `NEXT_PUBLIC_SITE_URL` before building.
