# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Gyógytornász központ weboldala Astro keretrendszerrel. Több gyógytornász dolgozik itt, és bérelhető kezelőszobák is vannak terapeuták/gyógytornászok számára. A placeholder név: **MozgásKözpont**. Helyszín: Budapest, Széll Kálmán tér.

- **GitHub repo:** https://github.com/andrassmuk/koplanyi-web
- **Hosting:** GitHub Pages (statikus build)
- **Éles URL:** https://andrassmuk.github.io/koplanyi-web/
- **Framework:** Astro 6 (statikus site generator)
- **Nyelv:** Magyar nyelvű oldal

## Fejlesztési parancsok

```bash
npm install          # Függőségek telepítése
npm run dev          # Fejlesztői szerver (localhost:4321)
npm run build        # Produkciós build (dist/ mappába)
npm run preview      # Build előnézet lokálisan
```

## Architektúra

- `src/layouts/BaseLayout.astro` - Fő layout: navbar, footer, globális CSS változók, mobil menü. Minden oldal ezt használja.
- `src/pages/` - File-based routing. Oldalak:
  - `index.astro` - Főoldal (hero, szolgáltatás kártyák, számok, szobabérlés CTA)
  - `szolgaltatasok.astro` - Részletes szolgáltatások árakkal
  - `szobak.astro` - 4 bérelhető szoba leírás, felszereltség, árak (óra/nap/hó)
  - `csapat.astro` - 6 fős csapat placeholder profilokkal
  - `kapcsolat.astro` - Elérhetőségek, Google Maps embed (Széll Kálmán tér), parkolási infó
- `public/` - Statikus fájlok (favicon)
- `.github/workflows/deploy.yml` - GitHub Pages auto-deploy main branch-ről

## GitHub Pages deploy

Az `astro.config.mjs`-ben `site: 'https://andrassmuk.github.io'` és `base: '/koplanyi-web'`. Push to main = auto deploy GitHub Actions-szel. A repo Settings > Pages-ben "GitHub Actions" source kell legyen kiválasztva.

## Design

- Színek: zöld (#2a7d5f primary), CSS custom properties (:root változók a BaseLayout-ban)
- Vanilla CSS, nincs framework - scoped `<style>` blokkok + `<style is:global>` a layout-ban
- Reszponzív: mobil hamburger menü, grid-ek auto-fit-tel
- Placeholder képek helyett emoji/szöveges placeholderek vannak, valódi fotókra cserélendők

## Konvenciók

- Magyar nyelvű tartalom, angol nyelvű kód (változónevek, komponensek)
- Astro komponensek (.astro) preferáltak, JS framework csak ha szükséges
- `import.meta.env.BASE_URL` használata minden belső linknél (GitHub Pages subpath miatt)
- Árak és tartalmak placeholderek, valódi adatokra cserélendők
