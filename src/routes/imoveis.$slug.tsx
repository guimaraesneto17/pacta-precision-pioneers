import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getImovelBySlug } from "@/lib/imoveis-data";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BedDouble,
  Car,
  ChevronDown,
  Home,
  Building2,
  Phone,
} from "lucide-react";
import { useState, useRef } from "react";
import logoTrivan from "@/assets/logo-trivan-transparent.png";
import logoCaixa from "@/assets/logo-caixa.png";
import logoMcmv from "@/assets/logo-mcmv.png";

export const Route = createFileRoute("/imoveis/$slug")({
  loader: ({ params }) => {
    const imovel = getImovelBySlug(params.slug);
    if (!imovel) throw notFound();
    return { imovel };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.imovel.name ?? "Imóvel"} — Trivan Engenharia e Construções` },
      { name: "description", content: loaderData?.imovel.description ?? "" },
      { property: "og:title", content: `${loaderData?.imovel.name ?? "Imóvel"} — Trivan Engenharia e Construções` },
      { property: "og:description", content: loaderData?.imovel.description ?? "" },
      ...(loaderData?.imovel.image ? [{ property: "og:image", content: loaderData.imovel.image }] : []),
    ],
  }),
  component: ImovelPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Imóvel não encontrado</h1>
        <Link to="/imoveis" className="mt-4 inline-block text-accent hover:underline">
          Voltar aos imóveis
        </Link>
      </div>
    </div>
  ),
});

function ImovelPage() {
  const { imovel } = Route.useLoaderData();
  const [currentImg, setCurrentImg] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const nextImg = () => setCurrentImg((c) => (c + 1) % imovel.gallery.length);
  const prevImg = () => setCurrentImg((c) => (c - 1 + imovel.gallery.length) % imovel.gallery.length);

  // Show partner logos on some properties (prototype — configurable later)
  const showCaixa = ["residencial-seletto", "villagio-trivan", "residencial-parque-trivan"].includes(imovel.slug);
  const showMcmv = ["residencial-parque-trivan", "residencial-alto-branco"].includes(imovel.slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero full-width image */}
        <section ref={heroRef} className="relative pt-20">
          <div className="relative aspect-[16/7] max-h-[700px] overflow-hidden">
            <motion.div style={{ y: heroImageY, scale: heroScale }} className="absolute inset-0 will-change-transform">
              <img
                 src={imovel.gallery[currentImg]}
                 alt={`${imovel.name} - Foto ${currentImg + 1}`}
                 className="w-full h-[120%] object-cover transition-all duration-700"
                 width={1920}
                 height={840}
               />
               <img src={logoTrivan} alt="" className="absolute bottom-6 right-6 w-14 h-14 object-contain opacity-40 pointer-events-none z-[1]" />
            </motion.div>
            <div className="absolute inset-0 hero-overlay" />

            {/* Content overlay */}
            <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 will-change-transform">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <span className="inline-block px-5 py-2 rounded-full border border-primary-foreground/30 text-sm font-medium text-primary-foreground/90 mb-6 backdrop-blur-sm bg-primary/20">
                  {imovel.status}
                </span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <p className="text-primary-foreground/80 text-lg mb-2">Conheça o</p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground font-heading mb-4">
                  {imovel.name}
                </h1>
                <p className="text-xl sm:text-2xl text-primary-foreground/80 italic max-w-2xl">
                  {imovel.tagline}
                </p>
              </motion.div>

              {/* Partner logos on hero */}
              {(showCaixa || showMcmv) && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-6 mt-6">
                  {showCaixa && <img src={logoCaixa} alt="Caixa Econômica Federal" className="h-8 sm:h-10 object-contain brightness-0 invert opacity-70" />}
                  {showMcmv && <img src={logoMcmv} alt="Minha Casa Minha Vida" className="h-10 sm:h-12 object-contain brightness-0 invert opacity-70" />}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-col items-center gap-1 text-primary-foreground/60"
              >
                <span className="text-sm">Conheça</span>
                <ChevronDown size={24} className="animate-bounce" />
              </motion.div>
            </motion.div>

            {/* Gallery nav */}
            {imovel.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {imovel.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImg(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentImg ? "w-10 bg-accent" : "w-3 bg-primary-foreground/30"
                      }`}
                      aria-label={`Foto ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Quick stats bar */}
        <section className="bg-accent">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-accent-foreground/20">
            <div className="py-6 sm:py-8 text-center">
              <p className="text-sm text-accent-foreground/70 mb-1">Bairro</p>
              <p className="text-xl sm:text-2xl font-bold text-accent-foreground">{imovel.bairro}</p>
            </div>
            <div className="py-6 sm:py-8 text-center">
              <p className="text-sm text-accent-foreground/70 mb-1">Dormitórios</p>
              <p className="text-xl sm:text-2xl font-bold text-accent-foreground">
                {imovel.bedrooms > 0 ? imovel.bedrooms : "—"}
              </p>
            </div>
            <div className="py-6 sm:py-8 text-center">
              <p className="text-sm text-accent-foreground/70 mb-1">Vagas</p>
              <p className="text-xl sm:text-2xl font-bold text-accent-foreground">{imovel.parking}</p>
            </div>
          </div>
        </section>

        {/* Back link */}
        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <Link
              to="/imoveis"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft size={16} /> Voltar aos imóveis
            </Link>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-sm text-muted-foreground mb-2">Bem-vindo ao</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-accent font-heading mb-6">
                  {imovel.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">{imovel.description}</p>
                <p className="text-muted-foreground leading-relaxed">{imovel.details}</p>

                <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-accent" />
                  {imovel.location}
                </div>

                {/* Partner badges inline */}
                {(showCaixa || showMcmv) && (
                  <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
                    {showCaixa && <img src={logoCaixa} alt="Caixa Econômica Federal" className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all" />}
                    {showMcmv && <img src={logoMcmv} alt="Minha Casa Minha Vida" className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all" />}
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={imovel.gallery[1] || imovel.image}
                  alt={`${imovel.name} - Vista`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features - two columns */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/5 rounded-2xl p-8 sm:p-10 border border-primary-foreground/10"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-8">
                  Características dos apartamentos
                </h3>
                <ul className="space-y-5">
                  {imovel.apartmentFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <Home size={20} className="text-accent shrink-0" />
                      <span className="text-primary-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-primary-foreground/5 rounded-2xl p-8 sm:p-10 border border-primary-foreground/10"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-8">
                  Características do empreendimento
                </h3>
                <ul className="space-y-5">
                  {imovel.buildingAmenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-4">
                      <Building2 size={20} className="text-accent shrink-0" />
                      <span className="text-primary-foreground/80">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-16 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading mb-8 text-center">
                Ficha Técnica
              </h2>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <dl className="space-y-4">
                  {imovel.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-baseline border-b border-border pb-3 last:border-0">
                      <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                      <dd className="text-sm font-semibold text-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading mb-8 text-center">
                Localização
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  title={`Mapa - ${imovel.name}`}
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d${imovel.coordinates.lng}!3d${imovel.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr`}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 flex items-center justify-center gap-1">
                <MapPin size={14} className="text-accent" />
                {imovel.bairro}, {imovel.location}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-accent-foreground font-heading mb-4">
              Interessado no {imovel.name}?
            </h2>
            <p className="text-accent-foreground/80 mb-8">
              Entre em contato e saiba mais sobre condições e disponibilidade.
            </p>
            <a
              href={`https://wa.me/5583991083039?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${imovel.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone size={18} />
              Fale Conosco
            </a>
          </div>
        </section>

        {/* Thumbnail gallery */}
        {imovel.gallery.length > 1 && (
          <section className="py-12 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-3 gap-4">
                {imovel.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentImg(i);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      i === currentImg
                        ? "border-accent shadow-lg"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${imovel.name} - Miniatura ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
