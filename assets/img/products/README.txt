InstiSupply product image folder

The current catalogue is intentionally text-first and does not require product images.

When genuine supplier/manufacturer product photos become available:
1. Prepare each image at 1200 x 800 pixels (3:2 landscape).
2. Preferred format: WebP (.webp), sRGB, quality approximately 80-85.
3. Aim for 80-200 KB per image where practical; keep under 300 KB.
4. Use a clean white or neutral background and consistent framing.
5. Do not upscale small images or use watermarked/copyrighted marketplace images without permission.
6. File naming: lowercase, hyphen-separated product name, no spaces.

Examples:
a4-copier-paper-80gsm.webp
laser-toner-cartridges.webp
heavy-duty-garbage-bags.webp
disposable-protective-gowns.webp

Then set the matching image value in assets/js/catalog.js, for example:
{name:"A4 Copier Paper 80gsm", ..., image:"a4-copier-paper-80gsm.webp"}

If image is left as image:"", the product continues to render as a professional text-only card.
