export interface ProjectItem {
  id: string;
  name: string;
  niche: string;
  category: "barbearia" | "gastronomia" | "estetica" | "servicos";
  clientName: string;
  location: string;
  deliveryDays: string;
  impactMetric: string;
  impactContext: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  accentColor: string;
  previewUrl: string;
  whatsappMessage: string;
  themeStyle: {
    bgHero: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
    tagline: string;
  };
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: "barber-king",
    name: "Barber King Vintage",
    niche: "Barbearia Tradicional & Lounge",
    category: "barbearia",
    clientName: "Rodrigo Mendonça",
    location: "Brasília - DF",
    deliveryDays: "Entregue em 48h",
    impactMetric: "+160% de agendamentos",
    impactContext: "via WhatsApp no primeiro mês de lançamento",
    summary: "Site de alta conversão para barbearia com foco em agendamento imediato pelo WhatsApp e exibição do catálogo de cortes e barboterapia.",
    challenge: "A barbearia perdia cerca de 30% dos clientes potenciais que tentavam agendar pelo Instagram e demoravam horas para receber resposta manual.",
    solution: "Desenvolvemos um site ultrarrápido com cardápio de serviços, fotos reais do estúdio e botão de agendamento que já envia o serviço e horário preferido direto para o WhatsApp do barbeiro.",
    highlights: [
      "Carregamento em 0,8 segundos no 4G",
      "Seletor inteligente de corte e profissional",
      "Integração instantânea com rotas no Google Maps",
      "Galeria de transformações com fotos em alta definição"
    ],
    accentColor: "#F59E0B",
    previewUrl: "https://barberking.exemplo.com.br",
    whatsappMessage: "Olá! Vi o case do Barber King Vintage e quero um site com agendamento no WhatsApp para minha barbearia.",
    themeStyle: {
      bgHero: "from-amber-950/40 via-stone-900 to-stone-950",
      headline: "O corte que define o seu respeito.",
      subheadline: "Barboterapia tradicional, cortes clássicos e cerveja gelada no coração da cidade.",
      ctaLabel: "Agendar Horário no WhatsApp",
      tagline: "Tradição & Estilo Masculino"
    }
  },
  {
    id: "forno-nostro",
    name: "Forno Nostro Pizzaria",
    niche: "Pizzaria Artesanal & Delivery",
    category: "gastronomia",
    clientName: "Família Sartori",
    location: "Taguatinga - DF",
    deliveryDays: "Entregue em 3 dias",
    impactMetric: "-35% em taxas de app",
    impactContext: "migrando clientes do iFood para canal próprio no WhatsApp",
    summary: "Cardápio digital responsivo com carrinho integrado que formata o pedido completo e entrega no WhatsApp do balcão.",
    challenge: "A pizzaria gastava mais de R$ 3.800 por mês apenas em taxas de comissão para marketplaces de entrega.",
    solution: "Criamos um cardápio digital interativo de alta velocidade onde o cliente escolhe os sabores de pizza, adiciona bebidas, digita o endereço e o pedido cai prontinho na impressora do WhatsApp.",
    highlights: [
      "Cardápio com fotos reais dos ingredientes e massas de fermentação lenta",
      "Calculadora de taxa de entrega por bairro automatizada",
      "Aviso de tempo estimado de forno e entrega em tempo real",
      "Economia direta de milhares de reais em comissões todos os meses"
    ],
    accentColor: "#EF4444",
    previewUrl: "https://fornonostro.exemplo.com.br",
    whatsappMessage: "Olá! Vi o projeto da Forno Nostro Pizzaria e quero um cardápio digital com pedidos no WhatsApp.",
    themeStyle: {
      bgHero: "from-red-950/40 via-stone-900 to-stone-950",
      headline: "Pizza artesanal no forno a lenha, direto na sua mesa.",
      subheadline: "Massas de fermentação natural de 48h, molho de tomate San Marzano e queijos selecionados.",
      ctaLabel: "Pedir Pizza no WhatsApp",
      tagline: "Sabor Italiano Genuíno"
    }
  },
  {
    id: "aura-derm",
    name: "Aura Derm & Estética",
    niche: "Clínica de Estética Avançada & Skincare",
    category: "estetica",
    clientName: "Dra. Camila Vasconcelos",
    location: "Asa Sul - DF",
    deliveryDays: "Entregue em 3 dias",
    impactMetric: "+40% no ticket médio",
    impactContext: "com posicionamento visual de alto luxo e autoridade",
    summary: "Presença digital sofisticada com foco em procedimentos faciais, corporais e captação de pacientes de alta renda.",
    challenge: "A profissional realizava procedimentos de ponta, mas sua presença online parecia amadora e desvalorizava o valor percebido das consultas.",
    solution: "Criamos uma identidade digital minimalista e refinada, detalhando cada procedimento com rigor estético, depoimentos em vídeo e botão exclusivo para agendamento de avaliação.",
    highlights: [
      "Design clean com estética spa de alto luxo",
      "Apresentação estruturada de protocolos faciais e corporais",
      "Formulário rápido de pré-avaliação enviado ao WhatsApp da recepção",
      "Certificações, CRM e diplomas destacados com elegância"
    ],
    accentColor: "#EC4899",
    previewUrl: "https://auraderm.exemplo.com.br",
    whatsappMessage: "Olá! Vi o case da Aura Derm e gostaria de um site sofisticado para minha clínica/estética.",
    themeStyle: {
      bgHero: "from-pink-950/30 via-slate-900 to-slate-950",
      headline: "Realce sua beleza natural com protocolos exclusivos.",
      subheadline: "Tecnologia dermatológica de última geração aliada ao cuidado individualizado da sua pele.",
      ctaLabel: "Agendar Avaliação Personalizada",
      tagline: "Medicina Estética & Bem-estar"
    }
  },
  {
    id: "speedfix-auto",
    name: "SpeedFix Centro Automotivo",
    niche: "Mecânica, Injeção Eletrônica & Suspensão",
    category: "servicos",
    clientName: "Marcos Vinícius",
    location: "Águas Claras - DF",
    deliveryDays: "Entregue em 48h",
    impactMetric: "82 novos orçamentos",
    impactContext: "captados no Google nos primeiros 30 dias após publicação",
    summary: "Site de alta conversão para socorro mecânico e manutenção preventiva, com localização direta e chamadas de emergência.",
    challenge: "Motoristas da região que ficavam com o carro quebrado não encontravam a oficina no Google nem conseguiam solicitar guincho rápido.",
    solution: "Implementamos um site com SEO local agressivo ('mecânica em Águas Claras') e botão de emergência 'Chamar Mecânico no WhatsApp' com envio de localização GPS.",
    highlights: [
      "Botão flutuante de atendimento urgente com 1 toque",
      "Mais de 120 avaliações 5 estrelas do Google exibidas com destaque",
      "Checklist transparente dos 25 itens da revisão preventiva",
      "Mapa interativo com rotas rápidas pelo Waze"
    ],
    accentColor: "#0EA5E9",
    previewUrl: "https://speedfix.exemplo.com.br",
    whatsappMessage: "Olá! Vi o projeto da SpeedFix e quero um site para minha oficina mecânica / empresa de serviços locais.",
    themeStyle: {
      bgHero: "from-sky-950/40 via-zinc-900 to-zinc-950",
      headline: "Seu carro em mãos de especialistas com garantia de serviço.",
      subheadline: "Diagnóstico computadorizado, suspensão, freios e socorro mecânico rápido na região.",
      ctaLabel: "Pedir Diagnóstico no WhatsApp",
      tagline: "Confiança & Precisão Automotiva"
    }
  }
];
