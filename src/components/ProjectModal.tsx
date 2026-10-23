import React, { useState, useEffect } from 'react';
import { X, Smartphone, Monitor, CheckCircle2, MessageCircle, ArrowUpRight, Clock, MapPin, Zap } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { createWhatsAppLink } from '../utils/whatsapp';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  // Lock background scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl rounded-3xl border border-surface-border-neon bg-surface-card shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-surface-border px-6 py-4 bg-surface-canvas/90">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg font-bold text-content-main" id="modal-title">
              {project.name}
            </span>
            <span className="text-xs text-content-muted hidden sm:inline">
              · {project.niche}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Device Switcher */}
            <div className="flex items-center rounded-xl bg-surface-elevated p-1 border border-surface-border">
              <button
                type="button"
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  deviceMode === 'desktop'
                    ? 'bg-brand-deep text-brand-neon font-semibold'
                    : 'text-content-muted hover:text-content-main'
                }`}
                aria-label="Visualização em Desktop"
              >
                <Monitor className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  deviceMode === 'mobile'
                    ? 'bg-brand-deep text-brand-neon font-semibold'
                    : 'text-content-muted hover:text-content-main'
                }`}
                aria-label="Visualização em Celular"
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-2 text-content-muted hover:bg-surface-elevated hover:text-content-main transition-colors"
              aria-label="Fechar janela"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Interactive Screen Preview Container */}
          <div className="rounded-2xl border border-surface-border bg-surface-canvas p-4 sm:p-6">
            <div className="flex items-center justify-between text-xs text-content-faint mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span>Simulação interativa da interface</span>
              </div>
              <span className="font-mono text-[11px]">{project.previewUrl}</span>
            </div>

            {/* Responsive Frame based on deviceMode */}
            <div className={`mx-auto transition-all duration-300 ${deviceMode === 'mobile' ? 'max-w-xs' : 'w-full'}`}>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-surface-elevated to-surface-card p-5 shadow-inner">
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="font-display font-bold text-sm tracking-tight text-white">
                    {project.name}
                  </div>
                  <div className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                    {project.themeStyle.tagline}
                  </div>
                </div>

                {/* Simulated Hero */}
                <div className="space-y-3 py-4 text-center">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-white text-balance leading-snug">
                    {project.themeStyle.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto">
                    {project.themeStyle.subheadline}
                  </p>
                  <div className="pt-2">
                    <a
                      href={createWhatsAppLink(project.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{project.themeStyle.ctaLabel}</span>
                    </a>
                  </div>
                </div>

                {/* Simulated Metric Callout Bar inside preview */}
                <div className="mt-6 rounded-xl bg-black/40 border border-white/10 p-3 text-center">
                  <div className="text-[11px] text-content-faint uppercase tracking-wider">
                    Resultado Validado
                  </div>
                  <div className="text-xl font-bold text-emerald-400 tabular-nums">
                    {project.impactMetric}
                  </div>
                  <div className="text-xs text-content-muted">
                    {project.impactContext}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1: Client & Delivery Info */}
            <div className="rounded-2xl border border-surface-border bg-surface-elevated/40 p-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-neon">
                Ficha do Projeto
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-content-faint block">Cliente</span>
                  <span className="font-semibold text-content-main">{project.clientName}</span>
                </div>
                <div>
                  <span className="text-content-faint block">Local</span>
                  <span className="font-semibold text-content-main flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-brand-neon" />
                    {project.location}
                  </span>
                </div>
                <div>
                  <span className="text-content-faint block">Tempo de Desenvolvimento</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {project.deliveryDays}
                  </span>
                </div>
                <div>
                  <span className="text-content-faint block">Entrega</span>
                  <span className="font-semibold text-content-main">100% Responsivo + Otimizado</span>
                </div>
              </div>
            </div>

            {/* Column 2 & 3: Challenge, Solution, Outcomes */}
            <div className="md:col-span-2 space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                  O Desafio do Negócio
                </h4>
                <p className="mt-1.5 text-sm text-content-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-neon">
                  A Solução da Fluxy Companies
                </h4>
                <p className="mt-1.5 text-sm text-content-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-content-faint mb-2">
                  Diferenciais Implementados
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-content-muted">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-neon mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Modal Bottom Action Bar */}
          <div className="border-t border-surface-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-content-muted text-center sm:text-left">
              Gostou desse formato para o seu ramo? Entregamos seu site pronto em até 3 dias.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-surface-border text-xs font-medium text-content-muted hover:text-content-main transition-colors"
              >
                Voltar
              </button>

              <a
                href={createWhatsAppLink(`Olá! Vi o projeto "${project.name}" da Fluxy Companies e quero um site com a mesma estrutura e foco em conversão para a minha empresa.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-neon px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand-neon-hover glow-neon-subtle transition-all whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Quero um Site Similar</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
