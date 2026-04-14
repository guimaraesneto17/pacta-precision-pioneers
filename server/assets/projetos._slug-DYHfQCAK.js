import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { R as Route, L as Link, m as motion } from "./router-BnEM0R4D.js";
import { H as Header, M as MapPin, F as Footer } from "./Footer-CDnXfWk8.js";
import { S as SkeletonImage } from "./SkeletonImage-BOpaPqTl.js";
import { A as ArrowLeft } from "./arrow-left-5zp0sh62.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-__gdnBXM.js";
import { H as HardHat } from "./hard-hat-D56zq5FL.js";
import { C as Clock } from "./clock-DLw6QphF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProgressRing({
  progress,
  size = 80
}) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress / 100 * circumference;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
    width: size,
    height: size
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, className: "-rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "none", stroke: "hsl(var(--muted))", strokeWidth }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "none", stroke: "hsl(var(--accent))", strokeWidth, strokeLinecap: "round", strokeDasharray: circumference, strokeDashoffset: offset, className: "transition-all duration-1000" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground", children: [
      progress,
      "%"
    ] }) })
  ] });
}
function ProjetoPage() {
  const {
    project
  } = Route.useLoaderData();
  const [currentImg, setCurrentImg] = reactExports.useState(0);
  const nextImg = () => setCurrentImg((c) => (c + 1) % project.gallery.length);
  const prevImg = () => setCurrentImg((c) => (c - 1 + project.gallery.length) % project.gallery.length);
  const overallProgress = project.constructionPhases ? Math.round(project.constructionPhases.reduce((sum, p) => sum + p.progress, 0) / project.constructionPhases.length) : project.status === "Entregue" ? 100 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-24 bg-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projetos", className: "inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
          " Voltar às obras"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/7] max-h-[600px] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonImage, { src: project.gallery[currentImg], alt: `${project.name} - Foto ${currentImg + 1}`, className: "w-full h-full object-cover transition-opacity duration-500", width: 1920, height: 840 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" }),
          project.gallery.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevImg, className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm", "aria-label": "Foto anterior", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 24 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextImg, className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm", "aria-label": "Próxima foto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 24 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2", children: project.gallery.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCurrentImg(i), className: `h-1.5 rounded-full transition-all duration-300 ${i === currentImg ? "w-8 bg-accent" : "w-3 bg-primary-foreground/30"}`, "aria-label": `Foto ${i + 1}` }, i)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${project.statusColor}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" }),
                project.status
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-accent" }),
                project.location
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-heading mb-4", children: "Acompanhamento de Obra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-accent font-heading mb-6", children: project.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-6", children: project.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: project.details }),
            project.constructionPhases && project.constructionPhases.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HardHat, { size: 20, className: "text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground font-heading", children: "Status da Obra" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8", children: "Confira abaixo o status de obra do empreendimento:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: project.constructionPhases.map((phase, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 20
              }, whileInView: {
                opacity: 1,
                y: 0
              }, viewport: {
                once: true
              }, transition: {
                delay: i * 0.05
              }, className: "bg-card rounded-xl p-5 border border-border shadow-sm flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressRing, { progress: phase.progress, size: 64 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: phase.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: phase.progress === 100 ? "Concluído" : phase.progress === 0 ? "Não iniciado" : "Em andamento" })
                ] })
              ] }, phase.name)) }),
              project.lastUpdate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
                "Última atualização em ",
                project.lastUpdate
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/5583991083039?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${project.name}.`)}`, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity", children: "Tenho Interesse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.2
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-8 shadow-lg border border-border sticky top-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground font-heading mb-4", children: "Ficha Técnica" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressRing, { progress: overallProgress, size: 100 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mb-6", children: "Progresso Geral" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "space-y-4", children: project.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline border-b border-border pb-3 last:border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-sm text-muted-foreground", children: spec.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-sm font-semibold text-foreground", children: spec.value })
            ] }, spec.label)) })
          ] }) })
        ] }),
        project.gallery.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-4", children: project.gallery.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCurrentImg(i), className: `relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === currentImg ? "border-accent shadow-lg" : "border-transparent opacity-70 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonImage, { src: img, alt: `${project.name} - Miniatura ${i + 1}`, className: "w-full h-full object-cover", loading: "lazy", width: 400, height: 300 }) }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProjetoPage as component
};
