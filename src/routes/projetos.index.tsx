import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects-data";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, HardHat, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SkeletonImage } from "@/components/SkeletonImage";
import logoTrivan from "@/assets/logo-trivan-transparent.png";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Acompanhamento de Obras — Trivan Engenharia e Construções" },
      { name: "description", content: "Acompanhe o andamento das obras da Trivan Engenharia e Construções. Transparência e qualidade em cada etapa." },
      { property: "og:title", content: "Acompanhamento de Obras — Trivan Engenharia e Construções" },
      { property: "og:description", content: "Acompanhe o andamento das nossas obras em tempo real." },
    ],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Transparência</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 font-heading">Acompanhamento de Obras</h1>
              <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">Confira o andamento dos nossos empreendimentos em tempo real</p>
            </motion.div>
          </div>
        </section>

        {/* Back link + Grid */}
        <section className="py-12 sm:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Voltar ao início
            </Link>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => {
                const overallProgress = project.constructionPhases
                  ? Math.round(project.constructionPhases.reduce((sum, p) => sum + p.progress, 0) / project.constructionPhases.length)
                  : project.status === "Entregue" ? 100 : 0;

                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <Link to="/projetos/$slug" params={{ slug: project.slug }} className="group block">
                      <div className="relative rounded-xl overflow-hidden bg-card shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <SkeletonImage
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                            width={800}
                            height={600}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <img src={logoTrivan} alt="" className="absolute bottom-3 right-3 w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-40 pointer-events-none" />
                          <div className="absolute top-4 left-4">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${project.statusColor}`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                              {project.status}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-foreground font-heading group-hover:text-accent transition-colors">
                            {project.name}
                          </h3>
                          <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
                            <MapPin size={14} className="text-accent" />
                            {project.location}
                          </p>

                          {/* Progress bar */}
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-xs mb-1.5">
                              <span className="text-muted-foreground font-medium flex items-center gap-1">
                                <HardHat size={12} className="text-accent" />
                                Progresso geral
                              </span>
                              <span className="font-bold text-foreground">{overallProgress}%</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-accent rounded-full transition-all duration-700"
                                style={{ width: `${overallProgress}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="bg-accent text-accent-foreground py-3 text-center font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 group-hover:opacity-90 transition-opacity">
                          Confira +
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
