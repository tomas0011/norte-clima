import type { Metadata } from "next";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from "@/lib/config";

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
  return (
    <html lang="es">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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