import React from 'react';
import { MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { createWhatsAppLink, FLUXY_PHONE_FORMATTED } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-surface-canvas text-content-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-content-main">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-deep border border-brand-neon-border text-brand-neon">
                <span className="font-display font-extrabold text-base">F</span>
              </div>
              <span>Fluxy Companies</span>
            </div>

            <p className="font-display text-base font-semibold text-brand-neon">
              “Sua identidade em apenas um site”
            </p>

            <p className="text-xs text-content-muted leading-relaxed max-w-sm">
              Criação de sites profissionais e de alta conversão para pequenas empresas locais. 
              Especialistas em barbearias, pizzarias, clínicas e negócios de serviços. Entrega rápida em até 3 dias.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-content-main">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-brand-neon transition-colors">
                  Serviços Especializados
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-neon transition-colors">
                  Portfólio (+100 Sites)
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-brand-neon transition-colors">
                  Entrega em até 3 Dias
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-brand-neon transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-content-main">
              Atendimento & Contato
            </div>
            <div className="space-y-2.5 text-xs text-content-muted">
              <a
                href={createWhatsAppLink("Olá! Gostaria de conversar com a Fluxy Companies.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-content-secondary hover:text-brand-neon transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-accent-whatsapp" />
                <span>WhatsApp: {FLUXY_PHONE_FORMATTED}</span>
              </a>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-neon" />
                <span>fluxy.companys@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-content-faint" />
                <span>Brasília - DF • Atendimento em todo o Brasil</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-faint">
          <div>
            © {new Date().getFullYear()} Fluxy Companies. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Mais de 100 sites entregues com excelência</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-content-main transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
