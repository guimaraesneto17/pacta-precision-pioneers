import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { c as createLucideIcon, a as Route, m as motion, L as Link } from "./router-BnEM0R4D.js";
import { H as Header, M as MapPin, P as Phone, F as Footer } from "./Footer-CDnXfWk8.js";
import { u as useScroll, a as useTransform } from "./use-transform-Cq05uZd6.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-__gdnBXM.js";
import { A as ArrowLeft } from "./arrow-left-5zp0sh62.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
const __iconNode = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode);
function ImovelPage() {
  const {
    imovel
  } = Route.useLoaderData();
  const [currentImg, setCurrentImg] = reactExports.useState(0);
  const heroRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const nextImg = () => setCurrentImg((c) => (c + 1) % imovel.gallery.length);
  const prevImg = () => setCurrentImg((c) => (c - 1 + imovel.gallery.length) % imovel.gallery.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: heroRef, className: "relative pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/7] max-h-[700px] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
          y: heroImageY,
          scale: heroScale
        }, className: "absolute inset-0 will-change-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imovel.gallery[currentImg], alt: `${imovel.name} - Foto ${currentImg + 1}`, className: "w-full h-[120%] object-cover transition-all duration-700", width: 1920, height: 840 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
          y: heroTextY,
          opacity: heroTextOpacity
        }, className: "absolute inset-0 flex flex-col items-center justify-center text-center px-4 will-change-transform", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.2
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-5 py-2 rounded-full border border-primary-foreground/30 text-sm font-medium text-primary-foreground/90 mb-6 backdrop-blur-sm bg-primary/20", children: imovel.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.3
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-2", children: "Conheça o" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground font-heading mb-4", children: imovel.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl text-primary-foreground/80 italic max-w-2xl", children: imovel.tagline })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.8
          }, className: "mt-10 flex flex-col items-center gap-1 text-primary-foreground/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Conheça" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 24, className: "animate-bounce" })
          ] })
        ] }),
        imovel.gallery.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevImg, className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm", "aria-label": "Foto anterior", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextImg, className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-all bg-primary/30 backdrop-blur-sm", "aria-label": "Próxima foto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2", children: imovel.gallery.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCurrentImg(i), className: `h-2 rounded-full transition-all duration-300 ${i === currentImg ? "w-10 bg-accent" : "w-3 bg-primary-foreground/30"}`, "aria-label": `Foto ${i + 1}` }, i)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-accent-foreground/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 sm:py-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-accent-foreground/70 mb-1", children: "Bairro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-accent-foreground", children: imovel.bairro })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 sm:py-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-accent-foreground/70 mb-1", children: "Dormitórios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-accent-foreground", children: imovel.bedrooms > 0 ? imovel.bedrooms : "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 sm:py-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-accent-foreground/70 mb-1", children: "Vagas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-accent-foreground", children: imovel.parking })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/imoveis", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
        " Voltar aos imóveis"
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Bem-vindo ao" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-accent font-heading mb-6", children: imovel.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-lg mb-4", children: imovel.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: imovel.details }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-6 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-accent" }),
            imovel.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, className: "relative rounded-2xl overflow-hidden shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imovel.gallery[1] || imovel.image, alt: `${imovel.name} - Vista`, className: "w-full aspect-[4/3] object-cover", loading: "lazy", width: 800, height: 600 }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "bg-primary-foreground/5 rounded-2xl p-8 sm:p-10 border border-primary-foreground/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-extrabold font-heading mb-8", children: "Características dos apartamentos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-5", children: imovel.apartmentFeatures.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 20, className: "text-accent shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/80", children: feature })
          ] }, feature)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.15
        }, className: "bg-primary-foreground/5 rounded-2xl p-8 sm:p-10 border border-primary-foreground/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-extrabold font-heading mb-8", children: "Características do empreendimento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-5", children: imovel.buildingAmenities.map((amenity) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 20, className: "text-accent shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/80", children: amenity })
          ] }, amenity)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-foreground font-heading mb-8 text-center", children: "Ficha Técnica" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl p-8 shadow-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "space-y-4", children: imovel.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline border-b border-border pb-3 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-sm text-muted-foreground", children: spec.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-sm font-semibold text-foreground", children: spec.value })
        ] }, spec.label)) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-foreground font-heading mb-8 text-center", children: "Localização" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: `Mapa - ${imovel.name}`, src: `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d${imovel.coordinates.lng}!3d${imovel.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr`, width: "100%", height: "450", style: {
          border: 0
        }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "w-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-center mt-4 flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-accent" }),
          imovel.bairro,
          ", ",
          imovel.location
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-extrabold text-accent-foreground font-heading mb-4", children: [
          "Interessado no ",
          imovel.name,
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent-foreground/80 mb-8", children: "Entre em contato e saiba mais sobre condições e disponibilidade." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/5583991083039?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${imovel.name}.`)}`, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18 }),
          "Fale Conosco"
        ] })
      ] }) }),
      imovel.gallery.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: imovel.gallery.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setCurrentImg(i);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, className: `relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === currentImg ? "border-accent shadow-lg" : "border-transparent opacity-70 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `${imovel.name} - Miniatura ${i + 1}`, className: "w-full h-full object-cover", loading: "lazy", width: 400, height: 300 }) }, i)) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ImovelPage as component
};
