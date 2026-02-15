# QAEssentials

QAEssentials is a practical QA documentation hub.

## Site structure

- **`/` (this repo root)**: Jekyll-powered landing page (`index.md`) with a single-page layout.
- **`/docs/`**: the full Docsify knowledge base for deep dives and sidebar browsing.
- **`/qualityfirst/`**: **Quality First Culture** newsletter hub (static HTML issues).

## Quality First Culture newsletter

The newsletter lives in `qualityfirst/`:

- Hub page: `qualityfirst/index.html`
- Issues: `qualityfirst/issue-01.html`, `qualityfirst/issue-02.html`, etc.

To publish a new issue:

1. Add a new `issue-NN.html` in `qualityfirst/` (use `issue-01.html` as a template).
2. Add a link to it in `qualityfirst/index.html` under `#newsletter-list`.

## GitHub Pages

This repo is compatible with GitHub Pages:

- The main landing page is built by Jekyll from `index.md`.
- The newsletter pages under `qualityfirst/` are plain HTML and are served as-is.
- Links/assets are base-path safe for both User/Org sites and Project sites.
