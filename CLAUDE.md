# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Gyógytornász központ weboldala Astro keretrendszerrel. Több gyógytornász dolgozik itt, és bérelhető kezelőszobák is vannak terapeuták/gyógytornászok számára. A placeholder név: **MozgásKözpont**. Helyszín: Budapest, Széll Kálmán tér.

- **GitHub repo:** https://github.com/andrassmuk/koplanyi-web
- **Hosting:** GitHub Pages (statikus build)
- **Éles URL:** https://andrassmuk.github.io/koplanyi-web/
- **Framework:** Astro 6 (statikus site generator)
- **Nyelv:** Magyar nyelvű oldal
- **GitHub token:** `.env` fájlban (GITHUB_TOKEN), gitignore-ban van

## Fejlesztési parancsok

```bash
npm install          # Függőségek telepítése
npm run dev          # Fejlesztői szerver (localhost:4321)
npm run build        # Produkciós build (dist/ mappába)
npm run preview      # Build előnézet lokálisan
```

Vite cache probléma esetén: `rm -rf node_modules/.vite` majd újraindítás.

## Architektúra

### Oldalak (`src/pages/`)
- `index.astro` - Főoldal (hero, szolgáltatás kártyák, számok, szobabérlés CTA)
- `szolgaltatasok.astro` - Szolgáltatások árakkal (content collection-ből)
- `szobak.astro` - 4 bérelhető szoba fotókkal, felszereltséggel, árakkal
- `galeria.astro` - Képgaléria lightbox-szal (szobánként csoportosítva)
- `blog/index.astro` - Blog lista (dátum szerint rendezve)
- `blog/[...slug].astro` - Egyedi blog bejegyzés oldalak
- `csapat.astro` - 6 fős csapat placeholder profilokkal
- `kapcsolat.astro` - Elérhetőségek, Google Maps, parkolás, kontakt form

### Content Collections (`src/content/`)
Astro 6 glob() loader-rel, schema: `src/content.config.ts`

- `szolgaltatasok/` - Szolgáltatások (title, icon, order, prices)
- `szobak/` - Szobák (title, size, order, images, prices, equipment)
- `csapat/` - Csapattagok (name, role, initials, order, specialties)
- `blog/` - Blog posztok (title, date, author, excerpt, tags)

Új tartalom = új `.md` fájl a megfelelő mappába. Astro 6-ban `render(entry)` kell importálni `astro:content`-ből (nem `entry.render()`).

### Layout és egyéb
- `src/layouts/BaseLayout.astro` - Fő layout: navbar, footer, globális CSS, mobil menü
- `public/images/szobak/` - Szoba fotók
- `.github/workflows/deploy.yml` - GitHub Pages auto-deploy main branch push-ra

## GitHub Pages deploy

Az `astro.config.mjs`-ben `site` + `base: '/koplanyi-web/'` (trailing slash fontos!). Push to main = auto deploy. A repo Settings > Pages > Source: "GitHub Actions".

## Design

- Színek: zöld (#2a7d5f primary), CSS custom properties a BaseLayout `:root`-ban
- Vanilla CSS, nincs framework - scoped `<style>` blokkok + `<style is:global>`
- Reszponzív: mobil hamburger menü, grid-ek auto-fit-tel

## Konvenciók

- Magyar nyelvű tartalom, angol nyelvű kód (változónevek, komponensek)
- Astro komponensek (.astro) preferáltak, JS framework csak ha szükséges
- `import.meta.env.BASE_URL` használata minden belső linknél (GitHub Pages subpath miatt)
- Commitok logikusan szétválasztva (tartalom vs oldalak vs funkció)
- Placeholder nevek és árak - valódi adatokra cserélendők
