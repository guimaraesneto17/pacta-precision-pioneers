import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProjectBySlug } from "@/lib/projects-data";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ChevronLeft, ChevronRight, HardHat, Clock } from "lucide-react";
import { useState } from "react";
import { SkeletonImage } from "@/components/SkeletonImage";
import logoTrivan from "@/assets/logo-trivan-transparent.png";
import logoCaixa from "@/assets/logo-caixa.png";
import logoMcmv from "@/assets/logo-mcmv.png";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Obra"} — Acompanhamento | Trivan Engenharia e Construções` },
      { name: "description", content: `Acompanhe o andamento da obra ${loaderData?.project.name ?? ""}.` },
      { property: "og:title", content: `${loaderData?.project.name ?? "Obra"} — Trivan Engenharia e Construções` },
      { property: "og:description", content: loaderData?.project.description ?? "" },
      ...(loaderData?.project.image ? [{ property: "og:image", content: loaderData.project.image }] : []),
    ],
  }),
  component: ProjetoPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Obra não encontrada</h1>
        <Link to="/projetos" className="mt-4 inline-block text-accent hover:underline">Voltar às obras</Link>
      </div>
    </div>
  ),
});

function ProgressRing({ progress, size = 80 }: { progress: number; size?: number }) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-foreground">{progress}%</span>
      </div>
    </div>
  );
}

function ProjetoPage() {
  const { project } = Route.useLoaderData();
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((c) => (c + 1) % project.gallery.length);
  const prevImg = () => setCurrentImg((c) => (c - 1 + project.gallery.length) % project.gallery.length);

  const overallProgress = project.constructionPhases
    ? Math.round(project.constructionPhases.reduce((sum, p) => sum + p.progress, 0) / project.constructionPhases.length)
    : project.status === "Entregue" ? 100 : 0;

  // Show partner logos on some projects (prototype — configurable later)
  const showCaixa = ["residencial-seletto", "villagio-trivan", "residencial-parque-trivan"].includes(project.slug);
  const showMcmv = ["residencial-parque-trivan", "trivan-sunset-towers"].includes(project.slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero with gallery */}
        <section className="pt-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link to="/projetos" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6">
              <ArrowLeft size={16} /> Voltar às obras
            </Link>
          </div>
          <div className="relative aspect-[16/7] max-h-[600px] overflow-hidden">
            <SkeletonImage
              src={project.gallery[currentImg]}
              alt={`${project.name} - Foto ${currentImg + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              width={1920}
              height={840}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <img src={logoTrivan} alt="" className="absolute bottom-6 right-6 w-14 h-14 object-contain opacity-40 pointer-events-none z-[1]" />
            {project.gallery.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm" aria-label="Foto anterior">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm" aria-label="Próxima foto">
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {project.gallery.map((_, i) => (
                    <button key={i} onClick={() => setCurrentImg(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImg ? "w-8 bg-accent" : "w-3 bg-primary-foreground/30"}`} aria-label={`Foto ${i + 1}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${project.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    {project.status}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-accent" />
                    {project.location}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-heading mb-4">
                  Acompanhamento de Obra
                </h1>
                <h2 className="text-xl sm:text-2xl font-bold text-accent font-heading mb-6">
                  {project.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{project.details}</p>

                {/* Partner badges */}
                {(showCaixa || showMcmv) && (
                  <div className="flex items-center gap-6 mb-8 pt-4 border-t border-border">
                    {showCaixa && <img src={logoCaixa} alt="Caixa Econômica Federal" className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all" />}
                    {showMcmv && <img src={logoMcmv} alt="Minha Casa Minha Vida" className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all" />}
                  </div>
                )}

                {/* Construction Progress Section */}
                {project.constructionPhases && project.constructionPhases.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <HardHat size={20} className="text-accent" />
                      <h3 className="text-lg font-bold text-foreground font-heading">Status da Obra</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-8">Confira abaixo o status de obra do empreendimento:</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.constructionPhases.map((phase, i) => (
                        <motion.div
                          key={phase.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-card rounded-xl p-5 border border-border shadow-sm flex items-center gap-4"
                        >
                          <ProgressRing progress={phase.progress} size={64} />
                          <div>
                            <p className="font-semibold text-foreground text-sm">{phase.name}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {phase.progress === 100 ? "Concluído" : phase.progress === 0 ? "Não iniciado" : "Em andamento"}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {project.lastUpdate && (
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-6">
                        <Clock size={12} />
                        Última atualização em {project.lastUpdate}
                      </p>
                    )}
                  </div>
                )}

                <a
                  href={`https://wa.me/5583991083039?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${project.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity"
                >
                  Tenho Interesse
                </a>
              </motion.div>

              {/* Specs */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border sticky top-28">
                  <h2 className="text-lg font-bold text-foreground font-heading mb-4">Ficha Técnica</h2>

                  {/* Overall progress */}
                  <div className="flex items-center justify-center mb-6">
                    <ProgressRing progress={overallProgress} size={100} />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mb-6">Progresso Geral</p>

                  <dl className="space-y-4">
                    {project.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-baseline border-b border-border pb-3 last:border-0">
                        <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                        <dd className="text-sm font-semibold text-foreground">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            </div>

            {/* Thumbnail gallery */}
            {project.gallery.length > 1 && (
              <div className="mt-12 grid grid-cols-3 gap-4">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === currentImg ? "border-accent shadow-lg" : "border-transparent opacity-70 hover:opacity-100"}`}
                  >
                    <SkeletonImage src={img} alt={`${project.name} - Miniatura ${i + 1}`} className="w-full h-full object-cover" loading="lazy" width={400} height={300} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
