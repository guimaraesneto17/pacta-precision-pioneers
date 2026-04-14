import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { c as createLucideIcon, i as imoveis, m as motion, X, L as Link } from "./router-BnEM0R4D.js";
import { H as Header, l as logoTrivan, M as MapPin, F as Footer } from "./Footer-CDnXfWk8.js";
import { S as SkeletonImage } from "./SkeletonImage-BOpaPqTl.js";
import { B as BedDouble, C as Car } from "./car-Dx6BC_r0.js";
import { A as ArrowRight } from "./arrow-right-3lm5ZyAy.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
const statusOptions = ["Todos", "Lançamento", "Entregue", "Breve Lançamento"];
const locationOptions = ["Todas", ...Array.from(new Set(imoveis.map((i) => i.location)))];
const bedroomOptions = [{
  label: "Todos",
  value: -1
}, {
  label: "0 (Comercial)",
  value: 0
}, {
  label: "2 quartos",
  value: 2
}, {
  label: "3 quartos",
  value: 3
}, {
  label: "4+ quartos",
  value: 4
}];
function ImoveisPage() {
  const [activeStatus, setActiveStatus] = reactExports.useState("Todos");
  const [activeLocation, setActiveLocation] = reactExports.useState("Todas");
  const [activeBedrooms, setActiveBedrooms] = reactExports.useState(-1);
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-28 sm:pt-32 pb-12 sm:pb-16 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-accent font-medium", children: "Nossos Empreendimentos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-4 font-heading text-primary-foreground", children: "Imóveis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 mt-4 max-w-xl mx-auto text-sm sm:text-base", children: "Encontre o imóvel ideal construído com a qualidade Trivan" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 sm:py-12 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto", children: [
        "Conheça os empreendimentos construídos pela",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent", children: "Trivan Engenharia e Construções" }),
        ":"
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowFilters(!showFilters), className: "lg:hidden flex items-center gap-2 text-sm font-semibold text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 16 }),
          "Filtros",
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center", children: "!" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-10 space-y-4 sm:space-y-6 ${showFilters ? "block" : "hidden lg:block"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground mr-2", children: "Status:" }),
            statusOptions.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveStatus(status), className: `px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${activeStatus === status ? "bg-accent text-accent-foreground border-accent" : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"}`, children: status }, status))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground mr-2", children: "Localização:" }),
            locationOptions.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveLocation(loc), className: `px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${activeLocation === loc ? "bg-accent text-accent-foreground border-accent" : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"}`, children: loc }, loc))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground mr-2", children: "Quartos:" }),
            bedroomOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveBedrooms(opt.value), className: `px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${activeBedrooms === opt.value ? "bg-accent text-accent-foreground border-accent" : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"}`, children: opt.label }, opt.value))
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: clearFilters, className: "flex items-center gap-1 text-sm text-accent hover:underline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }),
            " Limpar filtros"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
          filtered.length,
          " ",
          filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: filtered.map((imovel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.5,
          delay: i * 0.1
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/imoveis/$slug", params: {
          slug: imovel.slug
        }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-card shadow-md border border-border hover:shadow-xl transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonImage, { src: imovel.image, alt: imovel.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700", loading: "lazy", width: 800, height: 600 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-foreground ${imovel.statusColor}`, children: imovel.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute bottom-0 left-0 right-0 ${imovel.statusColor} py-2 sm:py-2.5 text-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-bold uppercase tracking-widest text-primary-foreground", children: imovel.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoTrivan, alt: "", className: "absolute bottom-12 right-3 w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-40 pointer-events-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-bold text-foreground font-heading group-hover:text-accent transition-colors", children: imovel.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-accent" }),
              imovel.bairro,
              ", ",
              imovel.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-muted-foreground", children: [
              imovel.bedrooms > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { size: 16, className: "text-accent" }),
                imovel.bedrooms,
                " ",
                imovel.bedrooms === 1 ? "quarto" : "quartos"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 16, className: "text-accent" }),
                imovel.parking,
                " ",
                imovel.parking === 1 ? "vaga" : "vagas"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent text-accent-foreground py-3 sm:py-3.5 text-center font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 group-hover:opacity-90 transition-opacity", children: [
            "Saiba Mais",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] }) }) }, imovel.slug)) }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Nenhum imóvel encontrado com esses filtros." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearFilters, className: "text-accent hover:underline text-sm font-medium", children: "Limpar filtros" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ImoveisPage as component
};
