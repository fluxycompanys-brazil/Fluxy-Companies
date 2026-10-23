import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink, FLUXY_PHONE_FORMATTED } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-surface-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-content-main whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-deep border border-brand-neon-border text-brand-neon">
            <span className="font-display font-extrabold text-base">F</span>
          </div>
          <span>Fluxy Companies</span>
        </a>

        {/* Zone 2: 4 clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-content-muted" aria-label="Navegação Principal">
          <a href="#servicos" className="transition-colors hover:text-content-main whitespace-nowrap shrink-0">
            Serviços
          </a>
          <a href="#portfolio" className="transition-colors hover:text-content-main whitespace-nowrap shrink-0">
            Portfólio
          </a>
          <a href="#diferenciais" className="transition-colors hover:text-content-main whitespace-nowrap shrink-0">
            Diferenciais
          </a>
          <a href="#orcamento" className="transition-colors hover:text-content-main whitespace-nowrap shrink-0">
            Orçamento
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={createWhatsAppLink("Olá! Gostaria de falar com a Fluxy Companies para criar um site profissional para minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-neon px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-neon-hover glow-neon-subtle whitespace-nowrap shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-content-muted hover:text-content-main focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-surface-border bg-surface-card px-4 pt-3 pb-6 md:hidden">
          <nav className="flex flex-col gap-3 text-base font-medium text-content-muted">
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-content-main hover:text-brand-neon"
            >
              Serviços Especializados
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-content-main hover:text-brand-neon"
            >
              Portfólio de Projetos
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-content-main hover:text-brand-neon"
            >
              Por que a Fluxy?
            </a>
            <a 
              href="#orcamento" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-content-main hover:text-brand-neon"
            >
              Solicitar Orçamento
            </a>
            <div className="pt-3 border-t border-surface-border">
              <a
                href={createWhatsAppLink("Olá! Vi o site da Fluxy Companies pelo celular e gostaria de um orçamento para minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-neon py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-neon-hover"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {FLUXY_PHONE_FORMATTED}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
