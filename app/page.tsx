/**
 * Landing Page Principal - Optimizada para Conversión Google Ads
 * Orden optimizado para maximizar conversiones:
 * - Hero: Problema + Solución + CTA visible sin scroll
 * - Problemas comunes: SEO + intención de búsqueda
 * - Beneficios: Diferenciadores
 * - Servicios: Lo que ofrecemos
 * - Testimonios: Prueba social
 * - Zonas: Cobertura sin fricción (search optional)
 * - FAQ: Preguntas frecuentes
 * - Sobre Nosotros: E-E-A-T
 * 
 * Nota: Header y Footer están en el layout (layout.tsx)
 */

import Hero from '@/components/Hero';
import BandaCredibilidad from '@/components/BandaCredibilidad';
import ProblemasComunes from '@/components/ProblemasComunes';
import Beneficios from '@/components/Beneficios';
import Servicios from '@/components/Servicios';
import Testimonios from '@/components/Testimonios';
import Zonas from '@/components/Zonas';
import FAQ from '@/components/FAQ';
import NuestrosTrabajos from '@/components/NuestrosTrabajos';
import ModelosCalderas from '@/components/ModelosCalderas';
import SobreNosotros from '@/components/SobreNosotros';
import WhatsAppFlotante from '@/components/WhatsAppFlotante';

export default function Home() {
  return (
    <main>
      <Hero />
      <BandaCredibilidad />
      <ProblemasComunes />
      <Beneficios />
      <Servicios />
      <Testimonios />
      <NuestrosTrabajos />
      <Zonas />
      <ModelosCalderas />
      <SobreNosotros />
      <FAQ />
      <WhatsAppFlotante />
    </main>
  );
}