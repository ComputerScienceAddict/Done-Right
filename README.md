# Done-Right Cleaning Services — Website

A [Next.js](https://nextjs.org) (App Router) + React + Tailwind CSS marketing site with branding aligned to Done-Right Cleaning Services (dark navy, gold, and teal accents).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Site structure

| Route | Content |
|-------|---------|
| `/` | Hero (photo background), services, why us, gallery preview, contact |
| `/services` | Services detail + photo strip + why us |
| `/gallery` | Full photo grid (`02.png` … `22.png`; `01.png` is the logo and not shown here) |
| `/contact` | Contact form |

## Customize

- **Phone & email:** Update `tel:` / `mailto:` links in `src/components/Footer.tsx` and `src/components/Contact.tsx`.
- **Hero image:** `src/lib/gallery.ts` — `heroImage` (default `08.png`).
- **Alt text:** Edit the `ALT` array in `src/lib/gallery.ts` to match each photo.
- **Site URL:** Set `metadataBase` in `src/app/layout.tsx` to your real domain.
- **Logo image:** Add your file as `public/logo.png` and use `<Image>` from `next/image` in `Header.tsx` if you prefer the graphic logo over the text wordmark.
