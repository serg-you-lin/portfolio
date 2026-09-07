# Portfolio — Federico

Portfolio personale da sviluppatore. Sito statico, senza step di build.

- **Stack:** HTML + CSS + JavaScript puri. Niente framework, niente bundler,
  niente Node.
- **Design:** tema blueprint / disegno tecnico — fondo scuro, griglia tenue,
  linee di quota, tipografia monospace, un cartiglio come footer. La scelta
  lega l'estetica al dominio di cui parlano i progetti (CAD/CAM).
- **Font:** IBM Plex Mono / IBM Plex Sans via Google Fonts (solo `<link>`).
- **Deploy:** GitHub Pages, servito dalla root del branch `main`.
  `.nojekyll` disattiva l'elaborazione Jekyll.

## File

| File          | Scopo                                                  |
|---------------|--------------------------------------------------------|
| `index.html`  | Home — una pagina, quattro sezioni.                    |
| `forge.html`  | Case study di Forge (collegato dalla home).            |
| `style.css`   | Design system e layout, condiviso dalle due pagine.    |
| `script.js`   | Data nel cartiglio, scroll-spy della nav. Zero dipendenze. |
| `.nojekyll`   | Serve i file così come sono su GitHub Pages.           |

## Anteprima locale

Apri `index.html` nel browser, oppure servi la cartella:

```
python -m http.server 8000
```

## Note

- Nessun CV scaricabile: il sito stesso è il CV, per scelta.
