import React, { useState } from 'react';
import { portfolioProjects, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { MessageCircle, Eye, ArrowUpRight, Zap, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-surface-canvas border-t border-surface-border">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-brand-deep opacity-35 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-brand-neon uppercase">
              Casos Reais & Resultados
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-content-main sm:text-4xl lg:text-5xl text-balance">
              Portfólio de projetos que geram vendas reais
            </h2>
            <p className="mt-4 text-base leading-relaxed text-content-secondary">
              Já colocamos <strong className="text-content-main font-semibold tabular-nums">+100 sites no ar</strong> para barbearias, 
              pizzarias, estéticas e negócios locais com o compromisso inegociável de entrega em até 3 dias.
            </p>
          </div>

          {/* Social Proof Metric pill substitute (clean unboxed typographic counter) */}
          <div className="flex items-center gap-6 rounded-2xl border border-surface-border bg-surface-card p-4 shrink-0">
            <div>
              <div className="font-display text-2xl font-bold text-brand-neon tabular-nums">
                +100
              </div>
              <div className="text-xs text-content-muted">
                Sites publicados
              </div>
            </div>
            <div className="h-8 w-px bg-surface-border" />
            <div>
              <div className="font-display text-2xl font-bold text-emerald-400 tabular-nums">
                Até 3 dias
              </div>
              <div className="text-xs text-content-muted">
                Prazo de entrega
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs (Segmented control) */}
        <div className="mt-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="Categorias de Projetos">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`rounded-xl px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-brand-neon text-white font-semibold shadow-sm glow-neon-subtle'
                : 'bg-surface-card border border-surface-border text-content-muted hover:text-content-main hover:bg-surface-elevated'
            }`}
          >
            Todos os Projetos ({portfolioProjects.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'barbearia'}
            onClick={() => setSelectedCategory('barbearia')}
            className={`rounded-xl px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === 'barbearia'
                ? 'bg-brand-neon text-white font-semibold shadow-sm glow-neon-subtle'
                : 'bg-surface-card border border-surface-border text-content-muted hover:text-content-main hover:bg-surface-elevated'
            }`}
          >
            Barbearias & Salões
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'gastronomia'}
            onClick={() => setSelectedCategory('gastronomia')}
            className={`rounded-xl px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === 'gastronomia'
                ? 'bg-brand-neon text-white font-semibold shadow-sm glow-neon-subtle'
                : 'bg-surface-card border border-surface-border text-content-muted hover:text-content-main hover:bg-surface-elevated'
            }`}
          >
            Pizzarias & Delivery
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'estetica'}
            onClick={() => setSelectedCategory('estetica')}
            className={`rounded-xl px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === 'estetica'
                ? 'bg-brand-neon text-white font-semibold shadow-sm glow-neon-subtle'
                : 'bg-surface-card border border-surface-border text-content-muted hover:text-content-main hover:bg-surface-elevated'
            }`}
          >
            Clínicas & Estética
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'servicos'}
            onClick={() => setSelectedCategory('servicos')}
            className={`rounded-xl px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === 'servicos'
                ? 'bg-brand-neon text-white font-semibold shadow-sm glow-neon-subtle'
                : 'bg-surface-card border border-surface-border text-content-muted hover:text-content-main hover:bg-surface-elevated'
            }`}
          >
            Serviços & Oficinas
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface-card overflow-hidden transition-all duration-300 hover:border-surface-border-neon hover:shadow-2xl"
            >
              {/* Card Visual Hero Mockup Banner */}
              <div className="relative p-6 bg-gradient-to-br from-surface-elevated via-surface-card to-surface-canvas border-b border-surface-border overflow-hidden">
                {/* Decorative glow in project's accent color */}
                <div 
                  className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Top unboxed metadata: Delivery time + Niche */}
                <div className="flex items-center justify-between text-xs text-content-muted mb-4">
                  <div className="flex items-center gap-1.5 font-medium text-emerald-400">
                    <Zap className="h-3.5 w-3.5" />
                    <span>{project.deliveryDays}</span>
                  </div>
                  <span className="font-mono text-[11px] text-content-faint">
                    {project.location}
                  </span>
                </div>

                {/* Simulated UI Preview Box */}
                <div className="rounded-2xl border border-white/10 bg-surface-canvas p-4 sm:p-5 shadow-lg group-hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px] text-content-faint">
                    <span className="font-semibold text-white">{project.name}</span>
                    <span className="text-[10px] text-brand-neon uppercase font-mono">{project.niche}</span>
                  </div>
                  <div className="py-3">
                    <div className="text-base font-bold text-white leading-tight font-display">
                      "{project.themeStyle.headline}"
                    </div>
                    <div className="mt-1 text-xs text-content-muted line-clamp-2">
                      {project.themeStyle.subheadline}
                    </div>
                  </div>
                  
                  {/* Proven quantitative result strip adjacent to claim */}
                  <div className="mt-2 rounded-xl bg-surface-elevated/70 border border-white/5 p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      <div>
                        <div className="font-display text-sm font-bold text-emerald-400 tabular-nums">
                          {project.impactMetric}
                        </div>
                        <div className="text-[10px] text-content-muted">
                          {project.impactContext}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-2xl font-bold text-content-main group-hover:text-brand-neon transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-content-muted">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-neon shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-5 border-t border-surface-border flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-content-main hover:text-brand-neon transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Ver detalhes & telas</span>
                  </button>

                  <a
                    href={createWhatsAppLink(project.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand-neon px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-brand-neon-hover glow-neon-subtle transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Quero um assim</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 3-Day Delivery Guarantee Explainer Strip */}
        <div id="diferenciais" className="mt-16 rounded-3xl border border-surface-border bg-surface-card p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-neon">
                Compromisso com o seu tempo
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-content-main">
                Como conseguimos entregar seu site em até 3 dias?
              </h3>
              <p className="mt-2 text-xs text-content-muted leading-relaxed">
                Processo direto, sem burocracia desnecessária. Você fala direto com quem desenvolve e acompanha tudo em tempo real.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-surface-border bg-surface-elevated/40 p-4">
                <span className="font-display font-extrabold text-brand-neon text-lg">Dia 1</span>
                <div className="mt-1 text-sm font-bold text-content-main">Briefing Rápido</div>
                <p className="mt-1 text-xs text-content-muted">
                  Você nos envia logotipo, fotos e serviços pelo próprio WhatsApp em 15 minutos.
                </p>
              </div>

              <div className="rounded-2xl border border-surface-border bg-surface-elevated/40 p-4">
                <span className="font-display font-extrabold text-brand-neon text-lg">Dia 2</span>
                <div className="mt-1 text-sm font-bold text-content-main">Construção & Design</div>
                <p className="mt-1 text-xs text-content-muted">
                  Criamos o layout de alto padrão, configuramos botões de WhatsApp e carregamento rápido.
                </p>
              </div>

              <div className="rounded-2xl border border-surface-border bg-surface-elevated/40 p-4">
                <span className="font-display font-extrabold text-emerald-400 text-lg">Dia 3</span>
                <div className="mt-1 text-sm font-bold text-content-main">Publicação Oficial</div>
                <p className="mt-1 text-xs text-content-muted">
                  Site no ar no seu domínio próprio, indexado no Google e pronto para receber clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal for Deep Dive Project View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
