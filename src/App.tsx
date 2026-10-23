import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-canvas text-content-main selection:bg-brand-neon/30 selection:text-white flex flex-col font-sans">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Seção inicial impactante */}
        <Hero />

        {/* 2. Serviços */}
        <Services />

        {/* 3. Portfólio / Projetos */}
        <Portfolio />

        {/* 4. Formulário de contato */}
        <ContactForm />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* 5. WhatsApp flutuante */}
      <FloatingWhatsApp />
    </div>
  );
}
