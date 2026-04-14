import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface Imovel {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  gallery: string[];
  location: string;
  bairro: string;
  status: "Lançamento" | "Entregue" | "Breve Lançamento";
  statusColor: string;
  bedrooms: number;
  parking: number;
  description: string;
  details: string;
  apartmentFeatures: string[];
  buildingAmenities: string[];
  specs: { label: string; value: string }[];
  coordinates: { lat: number; lng: number };
}

export const imoveis: Imovel[] = [
  {
    slug: "residencial-seletto",
    name: "Residencial Seletto",
    tagline: "Sofisticação e conforto em cada detalhe.",
    image: project1,
    gallery: [project1, project2, project3],
    location: "Campina Grande, PB",
    bairro: "Sandra Cavalcante",
    status: "Entregue",
    statusColor: "bg-emerald-500",
    bedrooms: 3,
    parking: 2,
    description:
      "Empreendimento residencial de alto padrão localizado em uma das regiões mais valorizadas de Campina Grande. O Residencial Seletto combina sofisticação arquitetônica com funcionalidade moderna.",
    details:
      "Projetado para famílias que buscam conforto e exclusividade, o Residencial Seletto oferece unidades amplas com acabamentos premium, áreas de lazer completas e segurança 24 horas.",
    apartmentFeatures: [
      "3 quartos sendo 1 suíte",
      "Sala de estar e jantar integradas",
      "Cozinha e área de serviço integradas",
      "Varanda gourmet",
      "2 banheiros",
    ],
    buildingAmenities: [
      "Piscina adulto e infantil",
      "Salão de festas",
      "Churrasqueira gourmet",
      "Academia",
      "Playground",
      "Brinquedoteca",
      "Quadra poliesportiva",
      "Segurança 24h",
      "Bicicletário",
      "Energia solar nas áreas comuns",
    ],
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
    coordinates: { lat: -7.2290, lng: -35.8810 },
  },
  {
    slug: "edificio-trivan-corporate",
    name: "Edifício Trivan Corporate",
    tagline: "O novo endereço do seu negócio.",
    image: project2,
    gallery: [project2, project4, project6],
    location: "Campina Grande, PB",
    bairro: "Centro",
    status: "Lançamento",
    statusColor: "bg-amber-500",
    bedrooms: 0,
    parking: 3,
    description:
      "Centro empresarial moderno com infraestrutura de última geração para escritórios corporativos. Localizado no coração de Campina Grande.",
    details:
      "O Trivan Corporate foi concebido para atender às demandas do mercado corporativo moderno, com salas flexíveis, certificação de sustentabilidade e tecnologia integrada.",
    apartmentFeatures: [
      "Salas de 30 a 200 m²",
      "Piso elevado",
      "Forro modular",
      "Ar-condicionado central",
      "Cabeamento estruturado",
    ],
    buildingAmenities: [
      "Auditório",
      "Estacionamento inteligente",
      "Lobby com pé-direito duplo",
      "Elevadores de alta velocidade",
      "Gerador para áreas comuns",
      "Segurança 24h",
      "Certificação PBQP-H",
    ],
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
    coordinates: { lat: -7.2172, lng: -35.8811 },
  },
  {
    slug: "villagio-trivan",
    name: "Villagio Trivan",
    tagline: "Viver em harmonia com a natureza.",
    image: project3,
    gallery: [project3, project1, project5],
    location: "Campina Grande, PB",
    bairro: "Malvinas",
    status: "Entregue",
    statusColor: "bg-emerald-500",
    bedrooms: 4,
    parking: 4,
    description:
      "Condomínio residencial horizontal com casas de alto padrão em Campina Grande. Integração total com a natureza e infraestrutura completa de lazer.",
    details:
      "O Villagio Trivan oferece um estilo de vida único, com casas projetadas para proporcionar conforto e privacidade.",
    apartmentFeatures: [
      "4 suítes",
      "Sala ampla com pé-direito duplo",
      "Cozinha gourmet",
      "Área de serviço",
      "Quintal privativo",
    ],
    buildingAmenities: [
      "Trilhas ecológicas",
      "Piscina com raia",
      "Quadras esportivas",
      "Área gourmet comunitária",
      "Playground",
      "Pet place",
      "Portaria 24h",
      "Circuito de câmeras",
    ],
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
    coordinates: { lat: -7.2500, lng: -35.9100 },
  },
  {
    slug: "centro-empresarial-trivan",
    name: "Centro Empresarial Trivan",
    tagline: "Um novo marco urbano no alto sertão.",
    image: project4,
    gallery: [project4, project2, project6],
    location: "Sousa, PB",
    bairro: "Centro",
    status: "Lançamento",
    statusColor: "bg-amber-500",
    bedrooms: 0,
    parking: 2,
    description:
      "Complexo empresarial de uso misto com torres comerciais e espaços de convivência em Sousa.",
    details:
      "O Centro Empresarial Trivan foi planejado para criar um ecossistema de negócios completo, reunindo escritórios, lojas, restaurantes e serviços em um único endereço.",
    apartmentFeatures: [
      "Salas modulares",
      "Lojas no térreo",
      "Infraestrutura para restaurantes",
      "Coworking",
      "Salas de reunião compartilhadas",
    ],
    buildingAmenities: [
      "Fachada de vidro com controle solar",
      "Automação predial",
      "Praça de convivência",
      "Food hall",
      "Estacionamento coberto",
      "Bicicletário",
      "Segurança 24h",
      "Certificação PBQP-H",
    ],
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
    coordinates: { lat: -6.7650, lng: -38.2280 },
  },
  {
    slug: "residencial-parque-trivan",
    name: "Residencial Parque Trivan",
    tagline: "Conforto e qualidade para a sua família.",
    image: project5,
    gallery: [project5, project3, project1],
    location: "Sousa, PB",
    bairro: "Jardim Sorrilândia",
    status: "Entregue",
    statusColor: "bg-emerald-500",
    bedrooms: 3,
    parking: 3,
    description:
      "Empreendimento residencial em Sousa, com infraestrutura completa e localização privilegiada.",
    details:
      "O Parque Trivan é referência em moradia de qualidade no sertão paraibano. Com apartamentos espaçosos e varanda gourmet.",
    apartmentFeatures: [
      "3 suítes",
      "Varanda gourmet",
      "Sala ampla",
      "Cozinha planejada",
      "Dependência de serviço",
    ],
    buildingAmenities: [
      "Piscina adulto e infantil",
      "Salão de festas",
      "Churrasqueira gourmet",
      "Academia",
      "Playground",
      "Segurança 24h",
      "Vagas para visitantes",
    ],
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
    coordinates: { lat: -6.7700, lng: -38.2300 },
  },
  {
    slug: "residencial-alto-branco",
    name: "Residencial Alto Branco",
    tagline: "Exclusividade no bairro mais charmoso da cidade.",
    image: project6,
    gallery: [project6, project5, project4],
    location: "Campina Grande, PB",
    bairro: "Alto Branco",
    status: "Breve Lançamento",
    statusColor: "bg-blue-500",
    bedrooms: 2,
    parking: 2,
    description:
      "Empreendimento residencial moderno no Alto Branco, um dos bairros mais desejados de Campina Grande.",
    details:
      "O Residencial Alto Branco redefine o conceito de morar bem. Com acabamentos de alta qualidade e localização privilegiada.",
    apartmentFeatures: [
      "2 quartos sendo 1 suíte",
      "Sala de estar e jantar integradas",
      "Cozinha americana",
      "Varanda com vista panorâmica",
      "Automação completa",
    ],
    buildingAmenities: [
      "Piscina adulto e infantil",
      "Spa e sauna",
      "Salão de festas",
      "Academia",
      "Brinquedoteca",
      "Bicicletário",
      "Energia solar nas áreas comuns",
      "Segurança 24h",
    ],
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
    coordinates: { lat: -7.2100, lng: -35.8900 },
  },
];

export function getImovelBySlug(slug: string): Imovel | undefined {
  return imoveis.find((p) => p.slug === slug);
}
