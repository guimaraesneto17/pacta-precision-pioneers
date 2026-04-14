import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { imoveis } from "@/lib/imoveis-data";
import { motion } from "framer-motion";
import { MapPin, BedDouble, Car, ArrowRight, Filter, X } from "lucide-react";
import { useState, useMemo } from "react";
import { SkeletonImage } from "@/components/SkeletonImage";
import logoTrivan from "@/assets/logo-trivan.png";

export const Route = createFileRoute("/imoveis/")({
  head: () => ({
    meta: [
      { title: "Imóveis — Trivan Engenharia e Construções" },
      { name: "description", content: "Conheça os imóveis residenciais e comerciais da Trivan Engenharia e Construções em Campina Grande e Sousa." },
      { property: "og:title", content: "Imóveis — Trivan Engenharia e Construções" },
      { property: "og:description", content: "Encontre o imóvel ideal para você." },
    ],
  }),
  component: ImoveisPage,
});

const statusOptions = ["Todos", "Lançamento", "Entregue", "Breve Lançamento"] as const;

const locationOptions = ["Todas", ...Array.from(new Set(imoveis.map((i) => i.location)))] as const;

const bedroomOptions = [
  { label: "Todos", value: -1 },
  { label: "0 (Comercial)", value: 0 },
  { label: "2 quartos", value: 2 },
  { label: "3 quartos", value: 3 },
  { label: "4+ quartos", value: 4 },
];

function ImoveisPage() {
  const [activeStatus, setActiveStatus] = useState<string>("Todos");
  const [activeLocation, setActiveLocation] = useState<string>("Todas");
  const [activeBedrooms, setActiveBedrooms] = useState<number>(-1);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return imoveis.filter((i) => {
      if (activeStatus !== "Todos" && i.status !== activeStatus) return false;
      if (activeLocation !== "Todas" && i.location !== activeLocation) return false;
      if (activeBedrooms !== -1) {
        if (activeBedrooms === 4) {
          if (i.bedrooms < 4) return false;
        } else {
          if (i.bedrooms !== activeBedrooms) return false;
        }
      }
      return true;
    });
  }, [activeStatus, activeLocation, activeBedrooms]);

  const hasActiveFilters = activeStatus !== "Todos" || activeLocation !== "Todas" || activeBedrooms !== -1;

  function clearFilters() {
    setActiveStatus("Todos");
    setActiveLocation("Todas");
    setActiveBedrooms(-1);
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Nossos Empreendimentos</span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-4 font-heading text-primary-foreground">Imóveis</h1>
              <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto text-sm sm:text-base">Encontre o imóvel ideal construído com a qualidade Trivan</p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-8 sm:py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça os empreendimentos construídos pela{" "}
              <span className="font-semibold text-accent">Trivan Engenharia e Construções</span>:
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="pb-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter toggle mobile */}
            <div className="mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <Filter size={16} />
                Filtros
                {hasActiveFilters && (
                  <span className="ml-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                    !
                  </span>
                )}
              </button>
            </div>

            {/* Filter panel */}
            <div className={`mb-10 space-y-4 sm:space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              {/* Status */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm font-semibold text-foreground mr-2">Status:</span>
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      activeStatus === status
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              {/* Location */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm font-semibold text-foreground mr-2">Localização:</span>
                {locationOptions.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      activeLocation === loc
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>

              {/* Bedrooms */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm font-semibold text-foreground mr-2">Quartos:</span>
                {bedroomOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setActiveBedrooms(opt.value)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      activeBedrooms === opt.value
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Clear */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  <X size={14} /> Limpar filtros
                </button>
              )}
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              {filtered.length} {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
            </p>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((imovel, i) => (
                <motion.div
                  key={imovel.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to="/imoveis/$slug"
                    params={{ slug: imovel.slug }}
                    className="group block"
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-card shadow-md border border-border hover:shadow-xl transition-all duration-500">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <SkeletonImage
                          src={imovel.image}
                          alt={imovel.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          width={800}
                          height={600}
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`inline-block px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-foreground ${imovel.statusColor}`}>
                            {imovel.status}
                          </span>
                        </div>
                        <div className={`absolute bottom-0 left-0 right-0 ${imovel.statusColor} py-2 sm:py-2.5 text-center`}>
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary-foreground">
                            {imovel.status}
                          </span>
                        </div>
                        <img src={logoTrivan} alt="" className="absolute bottom-12 right-3 w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-40 pointer-events-none" />
                      </div>

                      <div className="p-4 sm:p-5">
                        <h3 className="text-base sm:text-lg font-bold text-foreground font-heading group-hover:text-accent transition-colors">
                          {imovel.name}
                        </h3>
                        <p className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mt-2">
                          <MapPin size={14} className="text-accent" />
                          {imovel.bairro}, {imovel.location}
                        </p>

                        <div className="flex items-center gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-muted-foreground">
                          {imovel.bedrooms > 0 && (
                            <span className="flex items-center gap-1.5">
                              <BedDouble size={16} className="text-accent" />
                              {imovel.bedrooms} {imovel.bedrooms === 1 ? "quarto" : "quartos"}
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <Car size={16} className="text-accent" />
                            {imovel.parking} {imovel.parking === 1 ? "vaga" : "vagas"}
                          </span>
                        </div>
                      </div>

                      <div className="bg-accent text-accent-foreground py-3 sm:py-3.5 text-center font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 group-hover:opacity-90 transition-opacity">
                        Saiba Mais
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">Nenhum imóvel encontrado com esses filtros.</p>
                <button onClick={clearFilters} className="text-accent hover:underline text-sm font-medium">
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
