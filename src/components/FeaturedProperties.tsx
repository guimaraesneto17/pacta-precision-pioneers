import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { imoveis } from "@/lib/imoveis-data";
import { MapPin, BedDouble, Car, ArrowRight } from "lucide-react";

const featured = imoveis.filter((i) => i.status === "Lançamento" || i.status === "Breve Lançamento").slice(0, 3);

export function FeaturedProperties() {
  if (featured.length === 0) return null;

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-accent uppercase mb-3 font-medium">Lançamentos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-heading mb-4">
            Imóveis em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos empreendimentos mais recentes e encontre o imóvel ideal para você.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((imovel, i) => (
            <motion.div
              key={imovel.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/imoveis/$slug"
                params={{ slug: imovel.slug }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={imovel.image}
                    alt={imovel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={375}
                  />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-foreground ${imovel.statusColor}`}>
                    {imovel.status}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading mb-1 group-hover:text-accent transition-colors">
                    {imovel.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-3">{imovel.tagline}</p>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <MapPin size={14} className="text-accent" />
                    {imovel.bairro}, {imovel.location}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto pt-4 border-t border-border flex-wrap">
                    {imovel.bedrooms > 0 && (
                      <span className="flex items-center gap-1">
                        <BedDouble size={14} className="text-accent" /> {imovel.bedrooms} quartos
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Car size={14} className="text-accent" /> {imovel.parking} vagas
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">
                      Ver <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/imoveis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity"
          >
            Ver Todos os Imóveis
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
