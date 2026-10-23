import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { createWhatsAppLink, FLUXY_PHONE_FORMATTED, FLUXY_PHONE_RAW } from '../utils/whatsapp';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    nicho: 'Barbearia / Salão',
    tipo: 'Site Profissional Completo',
    prazo: 'Urgente (Em até 3 dias)',
    detalhes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsAppDirectly = () => {
    const text = `*NOVO ORÇAMENTO - FLUXY COMPANIES*
━━━━━━━━━━━━━━━━━━
👤 *Responsável:* ${formData.nome || 'Não informado'}
🏢 *Empresa:* ${formData.empresa || 'Não informado'}
📱 *WhatsApp:* ${formData.whatsapp || 'Não informado'}
🎯 *Nicho:* ${formData.nicho}
🚀 *Necessidade:* ${formData.tipo}
⏱️ *Prazo desejado:* ${formData.prazo}
${formData.detalhes ? `📝 *Detalhes:* ${formData.detalhes}` : ''}
━━━━━━━━━━━━━━━━━━
Olá! Preenchi o formulário no site e gostaria de receber a proposta de orçamento!`;

    window.open(`https://wa.me/${FLUXY_PHONE_RAW}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="orcamento" className="relative py-24 sm:py-32 bg-surface-canvas border-t border-surface-border">
      {/* Background neon accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-brand-deep opacity-40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-wider text-brand-neon uppercase">
            Comece Hoje Mesmo
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-content-main sm:text-4xl lg:text-5xl text-balance">
            Solicite um orçamento sem compromisso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-content-secondary max-w-2xl mx-auto">
            Diga adeus à invisibilidade digital. Conte-nos sobre o seu negócio e tenha seu site no ar em até 3 dias.
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Contact Info & Reassurances */}
            <div className="lg:col-span-5 rounded-3xl border border-surface-border bg-surface-card p-6 sm:p-8 space-y-6">
              <div>
                <div className="font-display text-xl font-bold text-content-main">
                  Fluxy Companies
                </div>
                <p className="mt-1 text-xs text-brand-neon font-medium">
                  “Sua identidade em apenas um site”
                </p>
                <p className="mt-3 text-xs text-content-secondary leading-relaxed">
                  Criamos sites pensados para o ritmo de pequenas empresas. Atendimento rápido e direto com quem programa seu site.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-surface-border/60 text-xs">
                <a 
                  href={createWhatsAppLink("Olá! Gostaria de conversar com a Fluxy Companies.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-content-muted hover:text-brand-neon transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-deep border border-brand-neon-border text-brand-neon">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-content-faint block">WhatsApp Direto</span>
                    <span className="font-semibold text-content-main">{FLUXY_PHONE_FORMATTED}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-content-muted">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-elevated border border-surface-border text-brand-neon">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-content-faint block">E-mail Comercial</span>
                    <span className="font-semibold text-content-main">fluxy.companys@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-content-muted">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-elevated border border-surface-border text-brand-neon">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-content-faint block">Prazo de Resposta</span>
                    <span className="font-semibold text-emerald-400">Geralmente em menos de 15 minutos</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border/60">
                <div className="rounded-2xl bg-brand-deep/60 border border-brand-neon-border p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Shield className="h-4 w-4 text-brand-neon" />
                    <span>Garantia de Entrega</span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-content-muted leading-relaxed">
                    Compromisso transparente: alinhamento no WhatsApp e entrega do projeto completo em até 3 dias úteis.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Quote Form */}
            <div className="lg:col-span-7 rounded-3xl border border-surface-border-neon bg-surface-card p-6 sm:p-8 glow-neon-subtle">
              {submitted ? (
                <div className="text-center py-8 space-y-5">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Orçamento Gerado com Sucesso!
                    </h3>
                    <p className="mt-2 text-sm text-content-secondary max-w-md mx-auto">
                      Obrigado, <strong className="text-white">{formData.nome || 'Parceiro'}</strong>! 
                      Clique no botão abaixo para abrir a conversa no WhatsApp com os dados pré-preenchidos e receber sua proposta em instantes.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleSendToWhatsAppDirectly}
                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-brand-neon px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-brand-neon-hover glow-neon transition-all"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Abrir no WhatsApp Agora</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-content-muted hover:text-white underline pt-2 block mx-auto"
                  >
                    Editar dados ou enviar outro orçamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-semibold text-content-secondary mb-1">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full rounded-xl border border-surface-border bg-surface-canvas px-3.5 py-2.5 text-sm text-content-main placeholder:text-content-faint focus:border-brand-neon focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-xs font-semibold text-content-secondary mb-1">
                        Nome do seu Negócio / Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        required
                        placeholder="Ex: Barbearia Vip, Pizzaria Bella..."
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full rounded-xl border border-surface-border bg-surface-canvas px-3.5 py-2.5 text-sm text-content-main placeholder:text-content-faint focus:border-brand-neon focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-semibold text-content-secondary mb-1">
                        Seu WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        required
                        placeholder="Ex: (61) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full rounded-xl border border-surface-border bg-surface-canvas px-3.5 py-2.5 text-sm text-content-main placeholder:text-content-faint focus:border-brand-neon focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="nicho" className="block text-xs font-semibold text-content-secondary mb-1">
                        Ramo de Atuação
                      </label>
                      <select
                        id="nicho"
                        value={formData.nicho}
                        onChange={(e) => setFormData({ ...formData, nicho: e.target.value })}
                        className="w-full rounded-xl border border-surface-border bg-surface-canvas px-3.5 py-2.5 text-sm text-content-main focus:border-brand-neon focus:outline-none transition-colors"
                      >
                        <option value="Barbearia / Salão">Barbearia / Salão</option>
                        <option value="Pizzaria / Restaurante">Pizzaria / Hamburgueria / Delivery</option>
                        <option value="Clínica / Estética">Clínica Médica / Estética</option>
                        <option value="Oficina / Mecânica">Oficina / Mecânica / Centro Automotivo</option>
                        <option value="Prestador de Serviço">Prestador de Serviço Local</option>
                        <option value="Loja / Comércio Local">Loja / Comércio Local</option>
                        <option value="Outro Negócio">Outro Negócio</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="tipo" className="block text-xs font-semibold text-content-secondary mb-1">
                        O que você precisa?
                      </label>
                      <select
                        id="tipo"
                        value={formData.tipo}
                        onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                        className="w-full rounded-xl border border-surface-border bg-surface-canvas px-3.5 py-2.5 text-sm text-content-main focus:border-brand-neon focus:outline-none transition-colors"
                      >
                        <option value="Site Profissional Completo">Site Profissional Completo</option>
                        <option value="Cardápio Digital com WhatsApp">Cardápio Digital com WhatsApp</option>
                        <option value="Agendamento Online de Serviços">Agendamento Online de Serviços</option>
                        <option value="Landing Page de Alta Conversão">Landing Page para Anúncios</option>
                        <option value="Reformulação de Site Antigo">Reformulação de Site Antigo</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="prazo" className="block text-xs font-semibold text-content-secondary mb-1">
                        Prazo de Entrega Desejado
                      </label>
                      <select
                        id="prazo"
                        value={formData.prazo}
                        onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                        className="w-full rounded-xl border border-surface-border bg-surface-canvas px-3.5 py-2.5 text-sm text-content-main focus:border-brand-neon focus:outline-none transition-colors"
                      >
                        <option value="Urgente (Em até 3 dias)">⚡ Urgente (Em até 3 dias)</option>
                        <option value="Normal (3 a 5 dias)">Normal (3 a 5 dias)</option>
                        <option value="Planejando para próximo mês">Planejando para o próximo mês</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="detalhes" className="block text-xs font-semibold text-content-secondary mb-1">
                      Algum detalhe especial ou referência? (Opcional)
                    </label>
                    <textarea
                      id="detalhes"
                      rows={3}
                      placeholder="Ex: Já tenho logotipo e fotos, quero integrar meu link do Instagram e catálogo de preços..."
                      value={formData.detalhes}
                      onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                      className="w-full rounded-xl border border-surface-border bg-surface-canvas px-3.5 py-2 text-sm text-content-main placeholder:text-content-faint focus:border-brand-neon focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Dual Action: Enviar direto no WhatsApp ou submeter */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendToWhatsAppDirectly}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-neon px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-brand-neon-hover glow-neon-subtle transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Solicitar no WhatsApp (Recomendado)</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface-elevated px-5 py-3.5 text-xs font-semibold text-content-main hover:bg-surface-card transition-colors"
                    >
                      <Send className="h-3.5 w-3.5 text-content-muted" />
                      <span>Gerar Proposta</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-content-faint text-center pt-1">
                    🔒 Seus dados não serão compartilhados com terceiros. Atendimento humano e sigiloso.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
