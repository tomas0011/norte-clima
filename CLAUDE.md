# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es esto

Landing page de conversión (single-page) para **Norte Clima**, un servicio técnico independiente de calderas en CABA y Gran Buenos Aires. El objetivo del sitio es generar leads vía WhatsApp/teléfono, optimizado para campañas de Google Ads. No hay backend ni base de datos: todo es estático/SSR servido por Next.js y desplegado en Vercel.

## Comandos

```bash
npm install        # instalar dependencias (también hay pnpm-lock.yaml)
npm run dev        # dev server con hot-reload → http://localhost:3000
npm run build      # build de producción
npm run start      # servir el build
npm run lint       # ESLint (config "next/core-web-vitals" vía next lint)
```

No hay framework de tests configurado.

## Arquitectura

- **Next.js 14 App Router + React 18 + TypeScript (strict) + Tailwind CSS.** Path alias `@/*` → raíz del repo.
- **`app/page.tsx`** es la home: importa cada sección como componente y las renderiza en un orden deliberado optimizado para conversión (Hero → ProblemasComunes → Beneficios → Servicios → Testimonios → ... → FAQ). Reordenar/agregar secciones se hace aquí. El comentario de cabecera del archivo documenta la lógica del orden — respétala.
- **`app/layout.tsx`** monta lo persistente en todas las rutas: `Header`, `Footer`, `AuroraBackground` (fondo animado), más Vercel `Analytics`/`SpeedInsights` y toda la metadata SEO/OpenGraph. Header y Footer **no** están en `page.tsx`.
- **Rutas legales:** `app/terminos`, `app/garantia`, `app/privacidad` son páginas independientes cuyo contenido espeja los markdown de `docs/` (`TERMINOS-CONDICIONES.md`, etc.). Si cambia una, actualizar también su `docs/` correspondiente.

## Convenciones clave (leer antes de editar)

- **`lib/config.ts` es la única fuente de verdad para los datos del negocio**: teléfonos, WhatsApp, emails, horarios, marcas, zonas, disclaimers legales y datos fiscales (monotributo, CUIT, técnicos). Para cambiar texto de contacto/legal, editar aquí — **no** hardcodear en componentes. Las URLs (`config.whatsappUrl`, `config.phoneUrl`, `config.emailUrl`) son getters generados; usar esos en vez de construir links a mano. El objeto es `as const`, así que muchos campos derivan tipos (`Brand`, `Zone`, `Tecnico`).
- **Costos por ciudad en `shared/cost-rules.json`** (mapa `ciudad → costo de visita en ARS`). `components/Zonas.tsx` lo importa directo. ⚠️ Cuidado: `components/BuscadorCiudad.tsx` tiene una copia **hardcodeada y desincronizada** de esta data, y `config.coveredCities` está vacío (`[]`). Al tocar cobertura/costos, verificar las tres fuentes.
- **Estilos:** clases utilitarias custom definidas con `@layer components` en `app/globals.css` — usar `container-main`, `card`, `btn-primary`/`btn-secondary`, `section-title`, `section-subtitle` en lugar de repetir cadenas de Tailwind. Paleta custom en `tailwind.config.ts`: `primary` (naranja, color de marca/CTA), `accent` (azul), `highlight` (amarillo), `neutral`.
- **WhatsApp/teléfono:** reutilizar `components/WhatsAppButton.tsx` (props `variant`/`size`) en vez de crear botones nuevos. Es el CTA principal del sitio.
- **Client vs Server Components:** todo es Server Component por defecto. Agregar `'use client'` solo cuando se necesita estado/efectos (ej. `BuscadorCiudad`, carruseles). Mantener interactividad en componentes hoja pequeños.
- **i18n:** sitio solo en español (`next.config.mjs` fija locale `es`); copys con acentos correctos. `next.config.mjs` también define headers de seguridad (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`).

## SEO y auditoría de Google Ads (requisito permanente)

El sitio **debe mantener buen SEO y pasar la auditoría de políticas de Google Ads**. Tener esto presente al editar:

- **Dominio / URL canónica:** `config.siteUrl` es la única fuente de verdad (lee `NEXT_PUBLIC_SITE_URL`, fallback `https://www.norteclima.com.ar`). De ahí derivan `metadataBase`, canonical, sitemap, robots y JSON-LD. No hardcodear el dominio en otro lado.
- **Datos estructurados:** `app/layout.tsx` inyecta JSON-LD `HVACBusiness` (subtipo de `LocalBusiness`) con `areaServed` desde `config.coverageZones`, teléfono, horarios y email. Al cambiar contacto/zonas/horarios, mantener este bloque sincronizado con `config.ts`.
- **`app/sitemap.ts` y `app/robots.ts`** se generan dinámicamente desde `config.siteUrl`. Al agregar una página indexable nueva, sumarla al sitemap.
- **Metadata:** cada ruta nueva debe exportar `metadata` (title, description; las páginas legales ya lo hacen). El locale es `es_AR`.
- **Performance (Core Web Vitals → SEO + Quality Score):** los favicons viven en `public/favicon-32x32.png`, `icon-192.png`, `icon-512.png`, `apple-icon.png` (generados con `sharp` desde `logo.png`). **No** volver a usar `logo.png` (1 MB, 1024×1024) como favicon. Para mostrar el logo usar `next/image`, que lo optimiza solo. Regenerar iconos: `sharp(logo).resize(N)`.
- **Posicionamiento legal:** el negocio es un **servicio técnico independiente, monotributista, que NO es servicio oficial de ninguna marca**. Las marcas (`config.brands`) son solo equipos con los que trabajan. Los disclaimers en `config.ts` (`disclaimer`, `disclaimerCompleto`, etc.) y las páginas `/terminos`, `/garantia`, `/privacidad` existen para cumplir la auditoría de Ads — **no eliminarlos ni suavizarlos**.

## Workflow SDD

El repo usa skills de Spec-Driven Development (`sdd-*`) instaladas a nivel usuario; ver `.atl/skill-registry.md`. No hay otras convenciones de proyecto (Cursor/Copilot) definidas.
