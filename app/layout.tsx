import type { Metadata } from "next";
import Script from "next/script";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from "@/lib/config";

// Tipografía de marca: Sora para titulares (carácter técnico/industrial),
// Inter para texto. Cargadas vía next/font (self-hosted, sin requests externos).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: "Norte Clima - Servicio Técnico de Calderas en CABA y GBA",
  description: "Servicio técnico independiente de calderas en Capital Federal y Gran Buenos Aires. Reparación, mantenimiento e instalación a domicilio. Atención rápida y presupuestos claros.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  keywords: ["servicio técnico calderas", "reparación calderas", "mantenimiento calderas", "calderas CABA", "calderas GBA", "técnico calderas", "instalación calderas"],
  authors: [{ name: "Norte Clima" }],
  openGraph: {
    title: "Norte Clima - Servicio Técnico de Calderas",
    description: "Servicio técnico independiente de calderas. Reparación, mantenimiento e instalación a domicilio en CABA y GBA.",
    url: "/",
    type: "website",
    locale: "es_AR",
    siteName: "Norte Clima",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Norte Clima - Servicio Técnico de Calderas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Datos estructurados para SEO local y rich results de Google.
// HVACBusiness es subtipo de LocalBusiness, específico para clima/calderas.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: config.companyName,
  description:
    "Servicio técnico independiente de calderas en CABA y Gran Buenos Aires. Reparación, mantenimiento e instalación a domicilio.",
  url: config.siteUrl,
  telephone: config.phone,
  email: config.email,
  image: `${config.siteUrl}/icon-512.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  areaServed: config.coverageZones.map((zona) => ({
    "@type": "AdministrativeArea",
    name: zona,
  })),
  openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-14:00"],
  sameAs: [config.whatsappUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ID del Google tag (Google Ads). Prioridad a la env var para configurar
  // sin tocar lib/config.ts; fallback al valor centralizado de config.
  const googleAdsId =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? config.googleAdsId;

  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) - Google Ads. ID priorizado por env var
            (NEXT_PUBLIC_GOOGLE_ADS_ID) con fallback a config.googleAdsId.
            strategy afterInteractive: no bloquea el render ni el LCP. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `}
        </Script>
        <AuroraBackground />
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}