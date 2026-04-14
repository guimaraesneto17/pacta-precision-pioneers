import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface ConstructionPhase {
  name: string;
  progress: number;
}

export interface Project {
  slug: string;
  image: string;
  gallery: string[];
  name: string;
  location: string;
  status: string;
  statusColor: string;
  description: string;
  details: string;
  specs: { label: string; value: string }[];
  constructionPhases?: ConstructionPhase[];
  lastUpdate?: string;
}

export const projects: Project[] = [
  {
    slug: "residencial-seletto",
    image: project1,
    gallery: [project1, project2, project3],
    name: "Residencial Seletto",
    location: "Sandra Cavalcante, Campina Grande - PB",
    status: "Entregue",
    statusColor: "bg-emerald-500",
    description: "Empreendimento residencial de alto padrão localizado em uma das regiões mais valorizadas de Campina Grande.",
    details: "Projetado para famílias que buscam conforto e exclusividade, o Residencial Seletto oferece unidades amplas com acabamentos premium, áreas de lazer completas e segurança 24 horas.",
    specs: [
      { label: "Área do Terreno", value: "3.500 m²" },
      { label: "Área Construída", value: "12.000 m²" },
      { label: "Unidades", value: "48 apartamentos" },
      { label: "Torres", value: "2 torres" },
      { label: "Pavimentos", value: "12 andares" },
      { label: "Vagas", value: "2 por unidade" },
      { label: "Previsão", value: "Entregue em 2023" },
      { label: "Certificação", value: "PBQP-H Nível A" },
    ],
  },
  {
    slug: "edificio-trivan-corporate",
    image: project2,
    gallery: [project2, project4, project6],
    name: "Edifício Trivan Corporate",
    location: "Centro, Campina Grande - PB",
    status: "Em Andamento",
    statusColor: "bg-accent",
    description: "Centro empresarial moderno com infraestrutura de última geração para escritórios corporativos. Localizado no coração de Campina Grande.",
    details: "O Trivan Corporate foi concebido para atender às demandas do mercado corporativo moderno, com salas flexíveis, certificação de sustentabilidade e tecnologia integrada.",
    specs: [
      { label: "Área do Terreno", value: "5.200 m²" },
      { label: "Área Construída", value: "18.000 m²" },
      { label: "Unidades", value: "120 salas comerciais" },
      { label: "Torres", value: "1 torre" },
      { label: "Pavimentos", value: "20 andares" },
      { label: "Vagas", value: "300 vagas" },
      { label: "Previsão", value: "Dezembro 2025" },
      { label: "Certificação", value: "PBQP-H Nível A" },
    ],
    constructionPhases: [
      { name: "Terraplanagem", progress: 100 },
      { name: "Fundações", progress: 100 },
      { name: "Estrutura", progress: 85 },
      { name: "Alvenaria", progress: 60 },
      { name: "Instalações Elétricas", progress: 40 },
      { name: "Instalações Hidráulicas", progress: 35 },
      { name: "Revestimentos", progress: 15 },
      { name: "Esquadrias", progress: 0 },
      { name: "Acabamento", progress: 0 },
      { name: "Vistoria Final", progress: 0 },
    ],
    lastUpdate: "10/04/2026",
  },
  {
    slug: "villagio-trivan",
    image: project3,
    gallery: [project3, project1, project5],
    name: "Villagio Trivan",
    location: "Malvinas, Campina Grande - PB",
    status: "Entregue",
    statusColor: "bg-emerald-500",
    description: "Condomínio residencial horizontal com casas de alto padrão em Campina Grande. Integração total com a natureza e infraestrutura completa de lazer.",
    details: "O Villagio Trivan oferece um estilo de vida único, com casas projetadas para proporcionar conforto e privacidade.",
    specs: [
      { label: "Área do Terreno", value: "45.000 m²" },
      { label: "Área Construída", value: "22.000 m²" },
      { label: "Unidades", value: "64 casas" },
      { label: "Lotes", value: "300 a 500 m²" },
      { label: "Áreas Verdes", value: "15.000 m²" },
      { label: "Vagas", value: "4 por unidade" },
      { label: "Previsão", value: "Entregue em 2022" },
      { label: "Certificação", value: "PBQP-H Nível A" },
    ],
  },
  {
    slug: "centro-empresarial-trivan",
    image: project4,
    gallery: [project4, project2, project6],
    name: "Centro Empresarial Trivan",
    location: "Centro, Sousa - PB",
    status: "Lançamento",
    statusColor: "bg-amber-500",
    description: "Complexo empresarial de uso misto com torres comerciais e espaços de convivência no centro de Sousa.",
    details: "O Centro Empresarial Trivan foi planejado para criar um ecossistema de negócios completo, reunindo escritórios, lojas, restaurantes e serviços em um único endereço.",
    specs: [
      { label: "Área do Terreno", value: "8.000 m²" },
      { label: "Área Construída", value: "32.000 m²" },
      { label: "Unidades", value: "200 salas + 40 lojas" },
      { label: "Torres", value: "2 torres" },
      { label: "Pavimentos", value: "25 andares" },
      { label: "Vagas", value: "500 vagas" },
      { label: "Previsão", value: "Março 2026" },
      { label: "Certificação", value: "PBQP-H Nível A" },
    ],
  },
  {
    slug: "residencial-parque-trivan",
    image: project5,
    gallery: [project5, project3, project1],
    name: "Residencial Parque Trivan",
    location: "Jardim Sorrilândia, Sousa - PB",
    status: "Entregue",
    statusColor: "bg-emerald-500",
    description: "Empreendimento residencial em Sousa, com infraestrutura completa e localização privilegiada.",
    details: "O Parque Trivan é referência em moradia de qualidade no sertão paraibano. Com apartamentos espaçosos e varanda gourmet.",
    specs: [
      { label: "Área do Terreno", value: "2.800 m²" },
      { label: "Área Construída", value: "14.000 m²" },
      { label: "Unidades", value: "36 apartamentos" },
      { label: "Torres", value: "1 torre" },
      { label: "Pavimentos", value: "18 andares" },
      { label: "Vagas", value: "3 por unidade" },
      { label: "Previsão", value: "Entregue em 2021" },
      { label: "Certificação", value: "PBQP-H Nível A" },
    ],
  },
  {
    slug: "trivan-sunset-towers",
    image: project6,
    gallery: [project6, project5, project4],
    name: "Trivan Sunset Towers",
    location: "Alto Branco, Campina Grande - PB",
    status: "Em Andamento",
    statusColor: "bg-accent",
    description: "Empreendimento residencial moderno no Alto Branco, um dos bairros mais desejados de Campina Grande.",
    details: "O Sunset Towers redefine o conceito de morar bem. Com acabamentos de alta qualidade, automação completa e localização privilegiada.",
    specs: [
      { label: "Área do Terreno", value: "6.500 m²" },
      { label: "Área Construída", value: "28.000 m²" },
      { label: "Unidades", value: "80 apartamentos" },
      { label: "Torres", value: "2 torres" },
      { label: "Pavimentos", value: "22 andares" },
      { label: "Vagas", value: "2 por unidade" },
      { label: "Previsão", value: "Junho 2026" },
      { label: "Certificação", value: "PBQP-H Nível A" },
    ],
    constructionPhases: [
      { name: "Terraplanagem", progress: 100 },
      { name: "Fundações", progress: 100 },
      { name: "Estrutura", progress: 70 },
      { name: "Alvenaria", progress: 45 },
      { name: "Instalações Elétricas", progress: 20 },
      { name: "Instalações Hidráulicas", progress: 15 },
      { name: "Revestimentos", progress: 0 },
      { name: "Esquadrias", progress: 0 },
      { name: "Acabamento", progress: 0 },
      { name: "Vistoria Final", progress: 0 },
    ],
    lastUpdate: "08/04/2026",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
