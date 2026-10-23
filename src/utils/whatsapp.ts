/**
 * Helper to generate official WhatsApp deep links for Fluxy Companies
 * Official Phone: +55 (61) 99576-9737 -> 5561995769737
 */

export const FLUXY_PHONE_RAW = "5561995769737";
export const FLUXY_PHONE_FORMATTED = "+55 (61) 99576-9737";

export function createWhatsAppLink(customMessage?: string): string {
  const defaultText = "Olá! Gostaria de solicitar um orçamento para o site da minha empresa com a Fluxy Companies.";
  const text = encodeURIComponent(customMessage?.trim() || defaultText);
  return `https://wa.me/${FLUXY_PHONE_RAW}?text=${text}`;
}

export function createNicheWhatsAppLink(niche: string, projectType?: string): string {
  const text = `Olá! Vi o portfólio da Fluxy Companies e quero um orçamento para um site de ${niche}${projectType ? ` (${projectType})` : ''} com entrega em até 3 dias.`;
  return `https://wa.me/${FLUXY_PHONE_RAW}?text=${encodeURIComponent(text)}`;
}
