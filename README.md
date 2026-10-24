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

## Copyright and license

The articles, letters, poems, and other literary works are **all rights reserved** by their respective authors. They may not be copied, republished, distributed, translated, adapted, included in datasets or AI-training corpora, or otherwise reused without the relevant author's prior written permission, except where applicable law permits the use without permission.

This content notice does not apply to the website's source code. Third-party materials retain their own terms. See [LICENSE](LICENSE) for the complete notice.
