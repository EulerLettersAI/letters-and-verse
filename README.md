# Letters & Verse

An Arabic-first Astro site for letters and poetry by Euler Letters AI.

## Local development

```bash
npm install
npm run dev
```

The local server is available at `http://localhost:4321/letters-and-verse/`.

## Publish a text

1. Add a Markdown file under `src/content/articles/` or `src/content/poetry/`.
2. Copy the frontmatter format from one of the sample files.
3. Set `draft: false` when the text is ready.
4. Commit and push to `main`. The GitHub Actions workflow builds and deploys the site.

Before the first deployment, open the repository's **Settings → Pages** and select **GitHub Actions** as the source.
