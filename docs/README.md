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

- `MS150_2026_Journey.md` — Community & Events page
