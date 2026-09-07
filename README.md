# Portfolio — Federico

Personal developer portfolio. Static site, no build step.

- **Stack:** plain HTML + CSS + JavaScript. No framework, no bundler, no Node.
- **Design:** blueprint / technical-drawing theme — dark ground, faint grid,
  dimension-line motifs, monospace type, a drawing title block as the footer.
  The choice ties the look to the domain the work is about (CAD/CAM).
- **Fonts:** IBM Plex Mono / IBM Plex Sans via Google Fonts (`<link>` only).
- **Deploy:** GitHub Pages, served from the `main` branch root.
  `.nojekyll` disables Jekyll processing.

## Files

| File          | Purpose                                             |
|---------------|-----------------------------------------------------|
| `index.html`  | Home — one page, four sections.                     |
| `forge.html`  | Forge case study (linked from the home).            |
| `style.css`   | Design system and layout, shared by both pages.     |
| `script.js`   | Footer date, nav scroll-spy. No dependencies.       |
| `.nojekyll`   | Serve files as-is on GitHub Pages.                  |

## Local preview

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

There is no downloadable CV: the site itself is the CV, by choice.

An Italian version of this document is in [`README_IT.md`](README_IT.md).
