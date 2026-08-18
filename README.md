# Personal Website

A small, static personal website that will showcase projects, research, notes, creative work, and contact information. Milestone 0 provides only the production foundation and a minimal homepage placeholder.

## Stack

- Astro with strict TypeScript
- Plain CSS
- Static site generation
- ESLint and Prettier
- GitHub Actions and GitHub Pages

## Local development

Requires Node.js 24 LTS and npm.

```sh
npm install
npm run dev
```

Astro prints the local URL when the development server starts.

## Quality and production commands

```sh
npm run check         # Astro and TypeScript checks
npm run lint          # ESLint
npm run format:check  # Prettier verification
npm run build         # Static production build
npm run quality       # Run all checks and the build
```

Run `npm run format` to apply formatting.

## Deployment

Pushes to `main` run CI and the Pages deployment workflow. The workflow installs dependencies from a clean checkout, runs all quality checks, builds `dist/`, and deploys that artifact with GitHub's official Pages actions. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.

`astro.config.ts` derives the production site and base path from GitHub Actions environment variables, so both `owner.github.io` repositories and project sites at `owner.github.io/repository` work without a hard-coded owner or repository name. A custom domain is intentionally not configured.

## Structure

```text
src/
  layouts/     Shared page shell
  pages/       File-based routes
  styles/      Global CSS and design tokens
.github/
  workflows/   CI and GitHub Pages deployment
```

No frontend framework, backend, database, or client-side JavaScript is included.
