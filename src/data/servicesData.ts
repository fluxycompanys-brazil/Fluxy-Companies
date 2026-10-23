export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  targetNiche: string;
  description: string;
  features: string[];
  deliverable: string;
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "barbearia",
    number: "01",
    title: "Sites para Barbearias & Salões",
    targetNiche: "Barbearias, Estúdios Masculinos e Salões",
    description: "Sua barbearia com visual marcante, cardápio de serviços, fotos dos cortes e agendamento direto pelo WhatsApp em um único toque.",
    features: [
      "Agendamento automático via WhatsApp com barbeiro escolhido",
      "Galeria de cortes e estrutura do espaço em alta resolução",
      "Tabela clara de serviços (cabelo, barba, sobrancelha, combos)",
      "Localização com 1 clique para Google Maps e Waze"
    ],
    deliverable: "Entrega em até 3 dias úteis",
    whatsappMessage: "Olá! Gostaria de um orçamento para criar um site profissional para minha barbearia/salão."
  },
  {
    id: "pizzaria",
    number: "02",
    title: "Pizzarias & Delivery Gastronômico",
    targetNiche: "Pizzarias, Hamburguerias e Restaurantes",
    description: "Diga adeus às comissões abusivas dos apps de entrega. Um site rápido com cardápio digital interativo onde o cliente monta o pedido e envia para o seu WhatsApp.",
    features: [
      "Cardápio digital leve que abre instantâneo no celular do cliente",
      "Carrinho simplificado que formata o pedido com endereço e taxa",
      "Destaque para combos promocionais e sabores da semana",
      "Aviso de status aberto/fechado e horário de atendimento"
    ],
    deliverable: "Entrega em até 3 dias úteis",
    whatsappMessage: "Olá! Quero um orçamento de site com cardápio para minha pizzaria/restaurante."
  },
  {
    id: "estetica",
    number: "03",
    title: "Clínicas, Estética & Consultórios",
    targetNiche: "Dermatologia, Estética Avançada e Consultórios",
    description: "Apresente seus procedimentos com autoridade, sofisticação e fotos de antes/depois elegantes, atraindo pacientes que valorizam seu padrão de atendimento.",
    features: [
      "Apresentação detalhada de procedimentos e tecnologias utilizadas",
      "Seção de autoridade e credenciais da equipe médica/estética",
      "Botão de triagem e agendamento de avaliação no WhatsApp",
      "Respostas às dúvidas mais frequentes para acelerar a decisão"
    ],
    deliverable: "Entrega em até 3 dias úteis",
    whatsappMessage: "Olá! Gostaria de um orçamento para o site da minha clínica de estética/consultório."
  },
  {
    id: "servicos-locais",
    number: "04",
    title: "Prestadores de Serviços & Oficinas",
    targetNiche: "Mecânicas, Reformas, Eletricistas e Negócios Locais",
    description: "Transforme moradores do seu bairro em clientes frequentes. Quem busca seus serviços no Google encontra uma empresa confiável e chama no WhatsApp na hora.",
    features: [
      "Estrutura otimizada para captar pedidos de socorro ou orçamentos",
      "Depoimentos reais de clientes da região com fotos dos trabalhos",
      "Listagem de marcas atendidas, garantias e diferenciais",
      "Botão de emergência com ligação telefônica ou WhatsApp"
    ],
    deliverable: "Entrega em até 3 dias úteis",
    whatsappMessage: "Olá! Preciso de um site para divulgar os serviços da minha empresa local."
  },
  {
    id: "landing-page",
    number: "05",
    title: "Landing Pages de Alta Conversão",
    targetNiche: "Empresas que investem em Anúncios (Instagram/Google)",
    description: "Páginas desenhadas especificamente para converter tráfego pago em vendas. Cada título, botão e imagem é posicionado para gerar conversas no WhatsApp.",
    features: [
      "Copywriting persuasivo focado na dor e desejo do cliente",
      "Velocidade de carregamento inferior a 1,5s no 4G",
      "Pixel do Facebook, Google Analytics e tags de conversão configurados",
      "Design responsivo testado em dezenas de aparelhos celulares"
    ],
    deliverable: "Entrega em até 3 dias úteis",
    whatsappMessage: "Olá! Preciso de uma Landing Page de alta conversão para minhas campanhas de anúncios."
  },
  {
    id: "google-seo",
    number: "06",
    title: "Otimização Google & Presença Local",
    targetNiche: "Negócios que desejam ser encontrados no Google",
    description: "Não adianta ter um site se ninguém encontra. Otimizamos seu site para pesquisas como 'pizzaria perto de mim' ou 'barbearia aberta hoje' e Google Meu Negócio.",
    features: [
      "Indexação imediata nos buscadores Google e Bing",
      "Estruturação de dados locais (Schema.org) com endereço e telefone",
      "Integração com avaliações do Google Meu Negócio",
      "Certificado de segurança SSL gratuito incluso"
    ],
    deliverable: "Configurado no lançamento",
    whatsappMessage: "Olá! Quero um site otimizado para aparecer no topo das buscas do Google na minha cidade."
  }
];
