import { T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { H as Header, l as logoTrivan, M as MapPin, F as Footer } from "./Footer-CDnXfWk8.js";
import { m as motion, p as projects, L as Link } from "./router-BnEM0R4D.js";
import { S as SkeletonImage } from "./SkeletonImage-BOpaPqTl.js";
import { H as HardHat } from "./hard-hat-D56zq5FL.js";
import { A as ArrowRight } from "./arrow-right-3lm5ZyAy.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProjetosPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 pb-16 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-accent font-medium", children: "Transparência" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 font-heading", children: "Acompanhamento de Obras" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 mt-4 max-w-xl mx-auto", children: "Confira o andamento dos nossos empreendimentos em tempo real" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, i) => {
        const overallProgress = project.constructionPhases ? Math.round(project.constructionPhases.reduce((sum, p) => sum + p.progress, 0) / project.constructionPhases.length) : project.status === "Entregue" ? 100 : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6,
          delay: i * 0.1
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos/$slug", params: {
          slug: project.slug
        }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden bg-card shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonImage, { src: project.image, alt: project.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700", loading: "lazy", width: 800, height: 600 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoTrivan, alt: "", className: "absolute bottom-3 right-3 w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-40 pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${project.statusColor}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" }),
              project.status
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground font-heading group-hover:text-accent transition-colors", children: project.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-sm text-muted-foreground mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-accent" }),
              project.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-medium flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HardHat, { size: 12, className: "text-accent" }),
                  "Progresso geral"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground", children: [
                  overallProgress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-accent rounded-full transition-all duration-700", style: {
                width: `${overallProgress}%`
              } }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent text-accent-foreground py-3 text-center font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 group-hover:opacity-90 transition-opacity", children: [
            "Confira +",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] }) }) }, project.slug);
      }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProjetosPage as component
};
