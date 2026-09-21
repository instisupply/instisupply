# InstiSupply Website

Production-ready static website for **InstiSupply — Institutional Supplies. Simplified.**

Designed for GitHub Pages and the custom domain `instisupply.com`.

## Catalogue approach

The catalogue contains **32 representative products across six correctly mapped categories**:

- Stationery & Paper
- Printer & IT Consumables
- Hygiene & Tissue
- Cleaning & Janitorial
- Pantry & Disposables
- PPE & Safety

Individual product photos are intentionally **not displayed at present**. Product cards use a clean, text-first B2B design with the product name, category, description and Request Quote action.

Category-level and sector photography remains in use because those images represent broad product groups rather than individual SKUs.

## Adding product images later

The catalogue already supports optional product photography without a redesign.

Recommended image specification:

- **Size:** 1200 × 800 px
- **Aspect ratio:** 3:2 landscape
- **Preferred format:** WebP (`.webp`)
- **Colour space:** sRGB
- **Typical target file size:** 80–200 KB; preferably below 300 KB
- **Background:** white or neutral
- **Framing:** consistent product scale and margins across the catalogue

Naming convention: **lowercase kebab-case matching the product name**.

Examples:

```text
a4-copier-paper-80gsm.webp
laser-toner-cartridges.webp
heavy-duty-garbage-bags.webp
disposable-protective-gowns.webp
```

Place the files in:

```text
assets/img/products/
```

Then update the matching product in `assets/js/catalog.js`:

```js
{name:"A4 Copier Paper 80gsm", category:"Stationery & Paper", description:"...", image:"a4-copier-paper-80gsm.webp"}
```

Leaving `image:""` keeps that product as a professional text-only card.

Do not use watermarked marketplace photos or supplier/manufacturer imagery unless you have permission to publish it.

## Formspree

Create a Formspree form and enter only the form ID in `assets/js/config.js`:

```js
formspreeId: "your_form_id"
```

The form action is generated automatically by `assets/js/main.js`.

## Contact and social configuration

The public email, location, map query and optional social/contact links are managed in:

```text
assets/js/config.js
```

Unconfigured social URLs are blank and are automatically hidden, so the website does not publish placeholder or fake links.

The company telephone number is intentionally not displayed. The RFQ form can collect an optional customer contact number.

## Publish on GitHub Pages

1. Upload the **contents of this folder** to the repository root.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. The included `CNAME` contains `instisupply.com`.
6. Configure DNS according to GitHub Pages' current custom-domain instructions.

## Launch checklist

- Confirm `sales@instisupply.com` is active.
- Enter the Formspree form ID in `assets/js/config.js`.
- Add only confirmed social/contact URLs.
- Add final UAE legal entity/trade-licence details where required.
- Have Privacy Policy and Terms reviewed for the operating entity.

## RFQ submission behaviour

The RFQ form is submitted to Formspree asynchronously using `fetch()` with `Accept: application/json`.
Successful submissions stay on `instisupply.com`, reset the form and display `Request Submitted`.
The browser is not redirected to Formspree's hosted thank-you page.
