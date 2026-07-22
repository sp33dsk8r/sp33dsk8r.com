# sp33dsk8r.com

Personal site for Bryan “sp33dsk8r” Taylor — Houston-area speedskating, fitness, gear, trails, and community notes.

**Live site:** [https://sp33dsk8r.github.io/sp33dsk8r.com/](https://sp33dsk8r.github.io/sp33dsk8r.com/)

## Stack

- [Astro](https://astro.build/) 4 + Tailwind CSS
- Static deploy to GitHub Pages (`.github/workflows/deploy.yml`)

## Local development

```bash
npm ci
cp .env.example .env   # optional: add Google Maps key
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

### Google Maps

Set `PUBLIC_GOOGLE_MAPS_API_KEY` in `.env` for interactive satellite / biking maps. Without a key, pages fall back to iframe embeds.

For GitHub Pages, add the same value as a repository secret named `PUBLIC_GOOGLE_MAPS_API_KEY` (used by the deploy workflow at build time).

## Content

| Area | Where to edit |
|------|----------------|
| Page prose | `docs/*.md` |
| Parks & map helpers | `src/data/places.ts` |
| Life timeline | `src/data/history.ts` |
| Vacations | `src/data/vacations.ts` |
| Family photos | `src/data/family.ts` + images in `public/` |
| Site name / X | `src/config/site.ts` |

Authoring notes (privacy stops, maps, questionnaires): see [`docs/README.md`](docs/README.md).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |

## Images

Prefer WebP in `public/` (with JPEG fallbacks). Keep originals oriented correctly so pages do not need CSS rotation hacks. Target roughly 100–350 KB per photo for gear shots.
