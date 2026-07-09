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

**Privacy stops** — set `hideAddress: true` on a stop to omit the street address from the caption and embed URL. The caption shows only city and state (e.g. “Ridgeland, Mississippi”); the map centers on manual pin coordinates (`lat`, `lng`, `zoom`). An `address` may remain in data for reference without appearing publicly — e.g. Hattiesburg at `318 38th Street`, Petal at `417 Old Corinth Road`, or Ridgeland at `5764 Imperial Drive, Jackson, MS 39211` with `hideAddress: true`.

The separate Jackson (1995) stop was removed; 1995 is represented by the Petal stop only. Ridgeland (1996) uses a satellite pin at `32.375864, -90.121458` (geocoded from the hidden Imperial Drive address) with updated New Orleans Cafe notes.

**Timeline notes** — Copperfield is `1999–2003` (Westmount at Copper Mill). After the first Houston stint (`Aug 1996–Dec 1998`, 77084 area pin), Texas stops continue: Houston `2004–2005`, Tomball `2005–2007` (Spring Creek / 316 Cherry St), Tomball `2008–2009` (920 Lawrence St — Retooling), Houston `2010–2020` (Energy corridor west), then Katy `2021–present`.

Current privacy stops: Williamsburg MI, Hattiesburg MS (`318 38th Street` geocode), Magee MS, Petal MS, Ridgeland MS (`5764 Imperial Drive`, Jackson MS 39211 geocode), Houston TX (77084 area pin — three separate periods: `Aug 1996–Dec 1998`, `2004–2005`, `2010–2020`), Tomball TX (`316 Cherry St` and `920 Lawrence St` geocodes), and Katy TX (`29.82279669984268, -95.80327358631828`, coordinate pin only). Copperfield (Westmount at Copper Mill) is not a privacy stop — its complex name is shown in the caption.

When the API key is present, privacy stops use a static satellite image with labels suppressed (no interactive JS map swap). Without a key, the embed falls back to a coordinate-based Google Maps iframe.

Coordinate-only embeds and “Open in Google Maps” links use `googleMapsEmbedUrl` / `googleMapsUrl` from `src/data/places.ts` (no address in the query string when `hideAddress` is set).
