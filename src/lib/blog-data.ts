import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "trivan-corporate-atinge-50-porcento",
    title: "Edifício Trivan Corporate atinge 50% da obra",
    excerpt: "O empreendimento comercial em Campinas avança no cronograma com qualidade e precisão.",
    content: `O Edifício Trivan Corporate, nosso empreendimento comercial de alto padrão em Campinas, acaba de atingir a marca de 50% de conclusão da obra. O projeto, que conta com 120 salas comerciais distribuídas em 20 andares, segue rigorosamente o cronograma estabelecido.\n\nA estrutura de concreto já foi concluída até o 15º andar, e as instalações hidráulicas e elétricas avançam conforme o planejado. A fachada de vidro com controle solar, um dos diferenciais do projeto, começará a ser instalada no próximo mês.\n\nO Trivan Corporate conta com certificação LEED Gold e será um marco na região central de Campinas. A previsão de entrega permanece para dezembro de 2025.`,
    image: project2,
    date: "2025-03-15",
    author: "Equipe Trivan",
    category: "Andamento de Obras",
  },
  {
    slug: "sustentabilidade-na-construcao-civil",
    title: "Sustentabilidade na construção civil: como a Trivan lidera",
    excerpt: "Conheça as práticas sustentáveis que adotamos em todos os nossos empreendimentos.",
    content: `A sustentabilidade é um pilar fundamental da Trivan Engenharia e Construções. Desde 2018, todos os nossos empreendimentos são projetados com foco na eficiência energética e no uso responsável de recursos naturais.\n\nEntre as práticas que adotamos estão: energia solar nas áreas comuns, reaproveitamento de água da chuva, uso de materiais reciclados e certificações ambientais como LEED e AQUA-HQE.\n\nO Centro Empresarial Trivan, nosso mais recente lançamento, busca a certificação LEED Platinum, o nível mais alto de sustentabilidade na construção civil. Com fachada de vidro com controle solar e automação predial inteligente, o empreendimento promete ser referência em eficiência energética.\n\nAcreditamos que construir com responsabilidade ambiental não é apenas uma tendência, mas uma obrigação para com as futuras gerações.`,
    image: project4,
    date: "2025-02-20",
    author: "Equipe Trivan",
    category: "Sustentabilidade",
  },
  {
    slug: "villagio-trivan-premiado",
    title: "Villagio Trivan recebe prêmio de melhor condomínio horizontal",
    excerpt: "O empreendimento em Ribeirão Preto foi reconhecido pela integração com a natureza.",
    content: `O Villagio Trivan, nosso condomínio horizontal de alto padrão em Ribeirão Preto, recebeu o prêmio de Melhor Condomínio Horizontal do Interior Paulista no Prêmio Master Imobiliário 2024.\n\nO reconhecimento destaca a integração do empreendimento com a natureza, com mais de 15.000 m² de áreas verdes, trilhas ecológicas e um projeto paisagístico premiado.\n\nAs 64 casas do Villagio foram projetadas para proporcionar conforto e privacidade, com lotes de 300 a 500 m² e acabamentos de primeira linha. A certificação AQUA-HQE reforça o compromisso com a qualidade e sustentabilidade.\n\nEsse prêmio reflete o DNA da Trivan: construir com excelência, inovação e respeito ao meio ambiente.`,
    image: project3,
    date: "2025-01-10",
    author: "Equipe Trivan",
    category: "Premiações",
  },
  {
    slug: "sunset-towers-vendas-abertas",
    title: "Trivan Sunset Towers: vendas oficialmente abertas",
    excerpt: "Resort residencial no Guarujá com conceito de moradia resort está com vendas abertas.",
    content: `É com grande satisfação que anunciamos a abertura oficial de vendas do Trivan Sunset Towers, nosso resort residencial frente ao mar no Guarujá.\n\nCom duas torres de 22 andares, o empreendimento oferece 80 apartamentos com vista para o mar, concierge 24h, spa, restaurante exclusivo e acesso direto à praia.\n\nOs apartamentos de 2 quartos (sendo 1 suíte) contam com automação completa, varanda com vista mar e acabamentos premium. As áreas comuns incluem piscina adulto e infantil, academia, salão de festas e brinquedoteca.\n\nA previsão de entrega é para junho de 2026. Entre em contato para conhecer as condições especiais de lançamento.`,
    image: project6,
    date: "2024-12-05",
    author: "Equipe Trivan",
    category: "Lançamentos",
  },
  {
    slug: "tecnologia-bim-na-trivan",
    title: "Como a tecnologia BIM revoluciona nossos projetos",
    excerpt: "A modelagem BIM permite maior precisão, menos desperdício e entregas no prazo.",
    content: `A Trivan Engenharia e Construções adotou a tecnologia BIM (Building Information Modeling) como padrão em todos os seus projetos desde 2020. Essa tecnologia permite criar modelos digitais 3D completos dos empreendimentos antes mesmo do início da obra.\n\nCom o BIM, conseguimos identificar e resolver conflitos entre sistemas (estrutural, hidráulico, elétrico) ainda na fase de projeto, reduzindo retrabalho e desperdício de materiais em até 30%.\n\nAlém disso, a modelagem permite simulações de eficiência energética, estudos de insolação e ventilação natural, contribuindo para projetos mais sustentáveis e confortáveis.\n\nNossos clientes também se beneficiam: com o modelo 3D, é possível fazer um tour virtual pelo empreendimento antes da entrega, facilitando a personalização e a tomada de decisões.`,
    image: project1,
    date: "2024-11-18",
    author: "Equipe Trivan",
    category: "Tecnologia",
  },
  {
    slug: "parque-trivan-entrega-antecipada",
    title: "Residencial Parque Trivan: entrega antecipada surpreende moradores",
    excerpt: "O empreendimento em Santos foi entregue 3 meses antes do prazo previsto.",
    content: `O Residencial Parque Trivan, nosso empreendimento frente ao mar em Santos, foi entregue aos moradores 3 meses antes do prazo inicialmente previsto.\n\nOs 36 apartamentos de alto padrão, com 3 suítes e varanda gourmet com vista para o mar, foram entregues com todos os acabamentos finalizados e áreas comuns prontas para uso.\n\nA piscina com borda infinita, o spa, o salão de festas e a academia já estão em pleno funcionamento. Os moradores foram recebidos com um evento especial de boas-vindas.\n\nA entrega antecipada reforça o compromisso da Trivan com prazos e qualidade — valores que nos guiam há mais de 20 anos no mercado da construção civil.`,
    image: project5,
    date: "2024-10-25",
    author: "Equipe Trivan",
    category: "Entregas",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
