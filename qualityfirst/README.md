# Quality First Culture — Internal Newsletters

Internal **Quality Bulletin** newsletters for Quality First Culture, published as static HTML.

## Publishing

Host the repo root on any static host; the site is just HTML files. Point the server at the default branch and use the URL it provides. Allow a short delay after each push for the site to update.

## Repo structure

```
qualityfirst/
├── README.md
├── index.html       # Landing page (lists all editions)
├── issue-01.html    # Newsletter editions
└── issue-NN.html    # Add new editions here
```

## Adding a new edition

1. Create a new HTML file in `qualityfirst/`: `issue-02.html`, `issue-03.html`, etc. Use `issue-01.html` as a template (same CSS variables and layout so dark/light theme works).
2. Add a link on the landing page: in `qualityfirst/index.html`, add a new `<li>` inside `#newsletter-list`:
   ```html
   <li><a href="issue-02.html">Quality Bulletin #02 — Your title</a></li>
   ```
3. Commit and push; the site will update after your host refreshes.

## Local preview

Open `index.html` in a browser, or run a simple server (e.g. `python3 -m http.server 8000`) and visit `http://localhost:8000`. Theme preference is stored in `localStorage` and respects system light/dark mode if not set.

## Tech

Plain HTML and CSS only; no build step. Pages are self-contained with inline styles. The index and issues share the same design system (CSS custom properties, light/dark themes).
