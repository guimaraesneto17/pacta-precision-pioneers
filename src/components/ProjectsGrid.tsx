import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects-data";

export function ProjectsGrid() {
  return (
    <section id="empreendimentos" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 font-heading">
            Nossos Empreendimentos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Conheça os projetos que marcam nossa trajetória de excelência
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to="/projetos/$slug" params={{ slug: project.slug }} className="group block cursor-pointer">
                <div className="relative rounded-xl overflow-hidden bg-card shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${project.statusColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowRight size={18} className="text-accent-foreground" />
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity"
          >
            Ver Todos os Projetos
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
