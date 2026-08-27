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
- `family.astro` — Family page (photo entries in `src/data/family.ts`, images in `public/`)

## Maps

Set `PUBLIC_GOOGLE_MAPS_API_KEY` in `.env` for local dev (see `.env.example`). For GitHub Pages, add the same value as a repository secret so the deploy workflow can bake it in at build time.

### Places page (`/places`)

Satellite + biking trail maps use the Google Maps JavaScript API via `MapSnapshot.astro` and `src/lib/bikingMaps.ts`.

### History page (`/history`)

Timeline rows live in `src/data/history.ts` and render in a table with columns **Period**, **City**, **State**, and **Notes**. Stops with `lat`/`lng` also render maps below the table via `MapSnapshot.astro` (satellite by default). Set `mapVariant: 'streetview'` for Street View instead of aerial — e.g. Williamsburg `1989—1992` at 4382 Westridge Drive (address stays hidden in the caption). Optional `streetViewHeading` aims the camera. Date ranges use em dashes (e.g. `1996—1999`).

**Privacy stops** — set `hideAddress: true` on a stop to omit the street address from the caption and embed URL. The caption shows only city and state (e.g. “Ridgeland, Mississippi”); the map centers on manual pin coordinates (`lat`, `lng`, `zoom`). An `address` may remain in data for reference without appearing publicly — e.g. Hattiesburg at `318 38th Street`, Petal at `417 Old Corinth Road`, or Ridgeland at `5764 Imperial Drive, Jackson, MS 39211` with `hideAddress: true`.

Ridgeland (1996) uses a satellite pin at `32.375864, -90.121458` (geocoded from the hidden Imperial Drive address).

**Timeline notes** — Soso `—1989` (born and raised). Michigan: Williamsburg `1989—1992` (Traverse City/Acme area — carpet cleaning, karaoke MC, oilfield lease operator, Northern LP), Traverse City `1993—1994`. Mississippi: Hattiesburg `1992`, Magee `1994—1995`, Petal `1995`, Ridgeland `1996`. Texas: Houston `1996—1999` (offshore / Grand Isle 7/7), Copperfield `1999—2003` (Westmount at Copper Mill), Houston `2004—2005` (Retooling), Tomball `2005—2006` (Park at Spring Creek apartments), Tomball `2007—2008` (302 Belmont St — moved into town), Tomball `2008—2009` (920 Lawrence St — Retooling), Houston `2010—2020` (Energy corridor west), Katy `2021—present`.

Current privacy stops: Williamsburg MI, Hattiesburg MS (`318 38th Street` geocode), Magee MS, Petal MS, Ridgeland MS (`5764 Imperial Drive`, Jackson MS 39211 geocode), Houston TX (77084 area pin — three separate periods: `1996—1999`, `2004—2005`, `2010—2020`), Tomball TX (`Park at Spring Creek` at `29807 Tomball Pkwy` geocode, `302 Belmont St` and `920 Lawrence St` geocodes), and Katy TX (`29.82279669984268, -95.80327358631828`, coordinate pin only). Copperfield (Westmount at Copper Mill) is not a privacy stop — complex or street address is shown in the caption.

When the API key is present, privacy stops use a static satellite image with labels suppressed (no interactive JS map swap). Without a key, the embed falls back to a coordinate-based Google Maps iframe.

Coordinate-only embeds and “Open in Google Maps” links use `googleMapsEmbedUrl` / `googleMapsUrl` from `src/data/places.ts` (no address in the query string when `hideAddress` is set).
