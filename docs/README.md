# Site content

Add markdown files here for site pages. Each file can be imported into an Astro page and rendered with the shared prose styles.

## Example

```astro
---
import Layout from '../layouts/Layout.astro';
import { Content } from '../../docs/your-page.md';
---

<Layout title="Page title">
  <main class="bg-speedBlack text-white py-16">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-5xl font-bold mb-12">Page heading</h1>
      <div class="prose prose-invert max-w-none text-lg overflow-x-auto">
        <Content />
      </div>
    </div>
  </main>
</Layout>
```

## Current files

- `about.md` — About page
- `history.md` — History page intro (timeline rows live in `src/data/history.ts`)
- `MS150_2026_Journey.md` — Community & Events page
- `gear.md` — Gear & Equipment page
- `places.md` — Places to Skate & Ride page
- `places-questionnaire.md` — Optional questionnaire for expanding places content (also copied to `public/` for download)

## Maps

Set `PUBLIC_GOOGLE_MAPS_API_KEY` in `.env` for local dev (see `.env.example`). For GitHub Pages, add the same value as a repository secret so the deploy workflow can bake it in at build time.

### Places page (`/places`)

Satellite + biking trail maps use the Google Maps JavaScript API via `MapSnapshot.astro` and `src/lib/bikingMaps.ts`.

### History page (`/history`)

Timeline rows live in `src/data/history.ts`; stops with `lat`/`lng` render satellite maps below the table via `MapSnapshot.astro`.

**Privacy stops** — set `hideAddress: true` on a stop to omit the street address from the caption and embed URL. The caption shows only city and state (e.g. “Petal, Mississippi”); the map centers on manual pin coordinates (`lat`, `lng`, `zoom`). An `address` may remain in data for reference without appearing publicly — e.g. Petal at `417 Old Corinth Road` with `hideAddress: true`.

Current privacy stops: Williamsburg MI, Magee MS, Petal MS, Houston TX (77084 area, coordinate pin only), and Katy TX (`29.82279669984268, -95.80327358631828`, coordinate pin only). Copperfield (Westmount at Copper Mill) is not a privacy stop — its complex name is shown in the caption.

When the API key is present, privacy stops use a static satellite image with labels suppressed (no interactive JS map swap). Without a key, the embed falls back to a coordinate-based Google Maps iframe.

Coordinate-only embeds and “Open in Google Maps” links use `googleMapsEmbedUrl` / `googleMapsUrl` from `src/data/places.ts` (no address in the query string when `hideAddress` is set).
