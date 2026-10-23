import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { createWhatsAppLink, FLUXY_PHONE_FORMATTED } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Expandable Chat Dialog Popup */}
      {isOpen && (
        <div 
          className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-surface-border-neon bg-surface-card shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="Atendimento via WhatsApp"
        >
          {/* Header */}
          <div className="bg-brand-deep p-4 border-b border-surface-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-surface-card border border-brand-neon-border text-brand-neon">
                <span className="font-display font-extrabold text-sm">F</span>
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-brand-deep" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">
                  Fluxy Companies
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">
                  Online agora • Resposta rápida
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-content-muted hover:text-white transition-colors"
              aria-label="Fechar janela de chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-surface-canvas/90 space-y-3">
            <div className="rounded-2xl rounded-tl-none bg-surface-card p-3 border border-surface-border text-xs text-content-secondary leading-relaxed">
              <p>
                Olá! 👋 Seja muito bem-vindo à <strong className="text-white">Fluxy Companies</strong>.
              </p>
              <p className="mt-1.5">
                Precisa de um site moderno para sua barbearia, pizzaria, clínica ou negócio local?
              </p>
              <div className="mt-2 text-[11px] text-brand-neon-light font-medium flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span>Colocamos seu site no ar em até 3 dias!</span>
              </div>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-1.5 pt-1">
              <a
                href={createWhatsAppLink("Olá! Gostaria de um orçamento rápido para o site da minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left text-[11px] font-medium text-content-muted hover:text-white bg-surface-elevated/60 hover:bg-surface-elevated p-2 rounded-xl transition-colors border border-surface-border"
              >
                💬 "Quero um orçamento sem compromisso"
              </a>
              <a
                href={createWhatsAppLink("Olá! Quero saber como funciona a entrega do site em até 3 dias.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left text-[11px] font-medium text-content-muted hover:text-white bg-surface-elevated/60 hover:bg-surface-elevated p-2 rounded-xl transition-colors border border-surface-border"
              >
                ⚡ "Como funciona a entrega em até 3 dias?"
              </a>
            </div>

            {/* Big WhatsApp Trigger */}
            <a
              href={createWhatsAppLink("Olá! Gostaria de falar com o desenvolvedor da Fluxy Companies.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent-whatsapp hover:bg-accent-whatsapp-hover py-3 text-xs font-bold text-stone-950 transition-colors shadow-md"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Chamar no WhatsApp ({FLUXY_PHONE_FORMATTED})</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Bubble Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-whatsapp text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-accent-whatsapp-hover active:scale-95 focus:outline-none"
        aria-label="Abrir atendimento WhatsApp da Fluxy Companies"
      >
        {/* Subtle pulsing glow */}
        <span className="absolute -inset-1 -z-10 rounded-2xl bg-accent-whatsapp/40 blur-sm group-hover:bg-accent-whatsapp/60 transition-all" />

        {isOpen ? (
          <X className="h-6 w-6 text-stone-950 transition-transform" />
        ) : (
          <MessageCircle className="h-7 w-7 text-stone-950" />
        )}

        {/* Small notification badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-neon text-[9px] font-bold text-white items-center justify-center">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
};
