import React from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { MessageCircle, Check, ArrowUpRight, Zap, Scissors, UtensilsCrossed, Sparkles, Wrench, Rocket, Globe } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

const iconMap: Record<string, React.ReactNode> = {
  barbearia: <Scissors className="h-5 w-5 text-amber-400" />,
  pizzaria: <UtensilsCrossed className="h-5 w-5 text-rose-400" />,
  estetica: <Sparkles className="h-5 w-5 text-pink-400" />,
  'servicos-locais': <Wrench className="h-5 w-5 text-sky-400" />,
  'landing-page': <Rocket className="h-5 w-5 text-brand-neon" />,
  'google-seo': <Globe className="h-5 w-5 text-emerald-400" />,
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="relative py-24 sm:py-32 bg-surface-canvas border-t border-surface-border">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-deep opacity-40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-brand-neon uppercase">
            Especialidades & Soluções
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-content-main sm:text-4xl lg:text-5xl text-balance">
            Soluções digitais pensadas para a realidade da sua empresa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-content-secondary">
            Não criamos sites genéricos que servem apenas como panfleto esquecido. Construímos canais ativos de vendas 
            focados em receber mensagens e agendamentos no seu WhatsApp com entrega rápida em até 3 dias.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface-card p-6 sm:p-8 transition-all duration-300 hover:border-surface-border-neon hover:bg-surface-card-hover hover:shadow-xl"
            >
              <div>
                {/* Top strip: Number + Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-surface-border/60">
                  <span className="font-display text-2xl font-bold text-content-faint group-hover:text-brand-neon transition-colors tabular-nums">
                    {service.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-elevated border border-surface-border">
                    {iconMap[service.id]}
                  </div>
                </div>

                {/* Service Target Niche & Title */}
                <div className="mt-6">
                  <div className="text-xs font-medium text-brand-neon-light">
                    {service.targetNiche}
                  </div>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-content-main tracking-tight group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-secondary">
                    {service.description}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                <ul className="mt-6 space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-content-muted leading-snug">
                      <Check className="h-4 w-4 shrink-0 text-brand-neon mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer: Deliverable badge + Direct WhatsApp button */}
              <div className="mt-8 pt-5 border-t border-surface-border/60">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                    <Zap className="h-3.5 w-3.5" />
                    <span>{service.deliverable}</span>
                  </div>

                  <a
                    href={createWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-content-main hover:text-brand-neon transition-colors"
                  >
                    <span>Orçamento</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fast Action Banner in Services */}
        <div className="mt-14 rounded-3xl border border-brand-neon-border bg-gradient-to-r from-brand-deep via-surface-card to-surface-card p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 glow-neon-subtle">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-neon">
              Seu nicho não está listado?
            </div>
            <h4 className="mt-1 font-display text-xl sm:text-2xl font-bold text-content-main">
              Criamos sites para qualquer negócio local ou prestador autônomo
            </h4>
            <p className="mt-2 text-sm text-content-secondary max-w-xl">
              De estúdios de tatuagem e confeitarias a escritórios de contabilidade e lojas do bairro. 
              Estruturamos seu site em 3 dias com a cara da sua marca.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Olá! Gostaria de saber se vocês criam site para o meu ramo de atuação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-xl bg-brand-neon px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-brand-neon-hover transition-colors whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Consultar meu nicho no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
