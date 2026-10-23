import React, { useState } from 'react';
import { MessageCircle, Zap, CheckCircle2, ArrowRight, ShieldCheck, Clock, Monitor } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

interface HeroDemoTab {
  id: string;
  label: string;
  name: string;
  niche: string;
  badge: string;
  accent: string;
  headline: string;
  featureList: string[];
  mockupContent: React.ReactNode;
}

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'barbearia' | 'pizzaria' | 'clinica'>('barbearia');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background ambient lighting in deep purple and neon pink */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-deep opacity-60 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-40 right-10 -z-10 h-[380px] w-[380px] rounded-full bg-brand-neon opacity-15 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline + Value Proposition and Interactive Showcase */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7">
            {/* Brand Kickoff / Unboxed metadata */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-brand-neon uppercase">
              <span>Fluxy Companies</span>
              <span aria-hidden="true">·</span>
              <span>Sites de Alta Conversão</span>
              <span aria-hidden="true">·</span>
              <span>Pequenas Empresas</span>
            </div>

            {/* Tagline & Main Headline */}
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-content-main sm:text-5xl lg:text-6xl text-balance">
              “Sua identidade em apenas um site”
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-content-secondary max-w-2xl">
              Desenvolvemos sites profissionais de alto padrão feitos sob medida para barbearias, pizzarias, 
              clínicas e negócios locais. Transforme cliques em novos clientes agendando e comprando direto no seu WhatsApp.
            </p>

            {/* Competitive Differentiators: Entrego em até 3 dias & +100 sites no ar */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-xl">
              <div className="flex items-start gap-3.5 rounded-2xl border border-surface-border bg-surface-card/70 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-neon/15 text-brand-neon border border-brand-neon/30">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-bold text-content-main">
                    Entrego em até 3 dias
                  </div>
                  <p className="text-xs text-content-muted mt-0.5">
                    Seu negócio no ar rapidamente, sem semanas de espera ou reuniões infinitas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-surface-border bg-surface-card/70 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-deep border border-brand-neon-border text-brand-neon">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-bold text-content-main tabular-nums">
                    +100 sites no ar
                  </div>
                  <p className="text-xs text-content-muted mt-0.5">
                    Projetos reais validados no mercado com código limpo e foco em faturamento.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Decision Block */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={createWhatsAppLink("Olá! Quero solicitar um orçamento para o site da minha empresa. Vi que vocês entregam em até 3 dias!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-neon px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-brand-neon-hover glow-neon active:scale-[0.99] whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Solicitar orçamento no WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-surface-border bg-surface-card/40 px-6 py-4 text-sm font-semibold text-content-main transition-colors hover:bg-surface-elevated hover:border-brand-neon/40 whitespace-nowrap"
              >
                <span>Ver projetos reais</span>
              </a>
            </div>

            {/* Quiet reassurance metadata */}
            <div className="mt-5 flex items-center gap-4 text-xs text-content-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Sem contratos longos
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Atendimento direto com o desenvolvedor
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Prototype Simulator / Live Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-surface-border-neon bg-surface-card shadow-2xl p-2 sm:p-3 glow-neon-subtle">
              {/* Device Window Header */}
              <div className="flex items-center justify-between border-b border-surface-border px-3 py-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-content-faint">
                    preview.fluxycompanies.com.br
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-brand-neon font-medium">
                  <Zap className="h-3.5 w-3.5" />
                  <span>3 Dias</span>
                </div>
              </div>

              {/* Interactive Segmented Selector for small business templates */}
              <div className="p-2">
                <div className="grid grid-cols-3 gap-1 rounded-xl bg-surface-elevated p-1" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'barbearia'}
                    onClick={() => setActiveTab('barbearia')}
                    className={`rounded-lg py-1.5 text-xs font-medium transition-all ${
                      activeTab === 'barbearia'
                        ? 'bg-brand-deep text-brand-neon font-semibold shadow-sm border border-brand-neon-border'
                        : 'text-content-muted hover:text-content-main'
                    }`}
                  >
                    Barbearia
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'pizzaria'}
                    onClick={() => setActiveTab('pizzaria')}
                    className={`rounded-lg py-1.5 text-xs font-medium transition-all ${
                      activeTab === 'pizzaria'
                        ? 'bg-brand-deep text-brand-neon font-semibold shadow-sm border border-brand-neon-border'
                        : 'text-content-muted hover:text-content-main'
                    }`}
                  >
                    Pizzaria & Delivery
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'clinica'}
                    onClick={() => setActiveTab('clinica')}
                    className={`rounded-lg py-1.5 text-xs font-medium transition-all ${
                      activeTab === 'clinica'
                        ? 'bg-brand-deep text-brand-neon font-semibold shadow-sm border border-brand-neon-border'
                        : 'text-content-muted hover:text-content-main'
                    }`}
                  >
                    Clínica & Estética
                  </button>
                </div>
              </div>

              {/* Mockup Canvas Screen */}
              <div className="relative min-h-[380px] rounded-2xl bg-surface-canvas p-4 sm:p-5 flex flex-col justify-between overflow-hidden border border-white/5">
                {activeTab === 'barbearia' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-amber-400 font-mono tracking-wider">
                      <span>ESTÚDIO & LOUNGE</span>
                      <span className="rounded bg-amber-500/10 px-2 py-0.5 text-amber-300">Aberto hoje até 21h</span>
                    </div>

                    <div>
                      <h2 className="font-display text-2xl font-bold text-white">
                        Barber King Vintage
                      </h2>
                      <p className="mt-1 text-xs text-stone-300">
                        O corte que impõe respeito e tradição. Escolha o serviço e agende no WhatsApp.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between rounded-xl bg-stone-900/90 p-2.5 border border-stone-800 text-xs">
                        <span className="font-medium text-stone-200">Corte Degradê + Barboterapia</span>
                        <span className="font-mono font-bold text-amber-400">R$ 85</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-stone-900/90 p-2.5 border border-stone-800 text-xs">
                        <span className="font-medium text-stone-200">Alinhamento de Barba com Toalha Quente</span>
                        <span className="font-mono font-bold text-amber-400">R$ 45</span>
                      </div>
                    </div>

                    <a
                      href={createWhatsAppLink("Olá! Gostaria de agendar um horário na barbearia (Demonstração do site Barber King).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 py-2.5 text-xs font-bold text-stone-950 transition-colors shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Agendar Corte pelo WhatsApp</span>
                    </a>
                  </div>
                )}

                {activeTab === 'pizzaria' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-rose-400 font-mono tracking-wider">
                      <span>FORNO A LENHA ARTESANAL</span>
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400 font-semibold">Delivery 35-45min</span>
                    </div>

                    <div>
                      <h2 className="font-display text-2xl font-bold text-white">
                        Forno Nostro Pizzaria
                      </h2>
                      <p className="mt-1 text-xs text-stone-300">
                        Peça pelo nosso site oficial sem pagar taxas abusivas de aplicativos.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between rounded-xl bg-stone-900/90 p-2.5 border border-stone-800 text-xs">
                        <div>
                          <div className="font-medium text-stone-100">Pizza Margherita DOC (Grande)</div>
                          <div className="text-[10px] text-stone-400">Molho San Marzano, mozzarella e manjericão</div>
                        </div>
                        <span className="font-mono font-bold text-rose-400 shrink-0 ml-2">R$ 68</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-stone-900/90 p-2.5 border border-stone-800 text-xs">
                        <div>
                          <div className="font-medium text-stone-100">Combo Família + Coca 2L</div>
                          <div className="text-[10px] text-stone-400">1 Pizza Salgada Grande + 1 Broto Doce</div>
                        </div>
                        <span className="font-mono font-bold text-rose-400 shrink-0 ml-2">R$ 89</span>
                      </div>
                    </div>

                    <a
                      href={createWhatsAppLink("Olá! Gostaria de fazer um pedido de pizza pelo WhatsApp (Demonstração do site Forno Nostro).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-rose-500 hover:bg-rose-400 py-2.5 text-xs font-bold text-white transition-colors shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Fazer Pedido no WhatsApp</span>
                    </a>
                  </div>
                )}

                {activeTab === 'clinica' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-pink-300 font-mono tracking-wider">
                      <span>ESTÉTICA & BEM-ESTAR</span>
                      <span className="rounded bg-pink-500/10 px-2 py-0.5 text-pink-300 font-semibold">Avaliação VIP</span>
                    </div>

                    <div>
                      <h2 className="font-display text-2xl font-bold text-white">
                        Aura Derm & Estética
                      </h2>
                      <p className="mt-1 text-xs text-stone-300">
                        Protocolos faciais e corporais individualizados com tecnologia médica.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="rounded-xl bg-slate-900/90 p-2.5 border border-slate-800 text-xs">
                        <div className="font-medium text-slate-100">Harmonização Facial & Bioestimuladores</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Procedimento minimamente invasivo com efeito lifting</div>
                      </div>
                      <div className="rounded-xl bg-slate-900/90 p-2.5 border border-slate-800 text-xs">
                        <div className="font-medium text-slate-100">Limpeza de Pele Profunda + Ledterapia</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Revitalização imediata e controle da oleosidade</div>
                      </div>
                    </div>

                    <a
                      href={createWhatsAppLink("Olá! Gostaria de agendar uma avaliação estética (Demonstração do site Aura Derm).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-pink-600 hover:bg-pink-500 py-2.5 text-xs font-bold text-white transition-colors shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Agendar Consulta no WhatsApp</span>
                    </a>
                  </div>
                )}

                {/* Footer strip of the mockup */}
                <div className="mt-4 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] text-content-faint">
                  <span>Desenvolvido por Fluxy Companies</span>
                  <span className="text-emerald-400 font-semibold">Site 100% Responsivo</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
