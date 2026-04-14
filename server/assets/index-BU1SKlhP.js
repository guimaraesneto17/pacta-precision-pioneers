import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { l as logoTrivan, M as MapPin, H as Header, F as Footer } from "./Footer-CDnXfWk8.js";
import { u as useScroll, a as useTransform } from "./use-transform-Cq05uZd6.js";
import { A as AnimatePresence, m as motion, p as projects, L as Link, i as imoveis } from "./router-BnEM0R4D.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-__gdnBXM.js";
import { C as CounterStat, S as Shield, A as Award, U as Users, B as BadgeCheck, D as Differentials, a as SocialProof } from "./CounterStat-XcBCoueA.js";
import { A as ArrowRight } from "./arrow-right-3lm5ZyAy.js";
import { B as BedDouble, C as Car } from "./car-Dx6BC_r0.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./clock-DLw6QphF.js";
import "./hard-hat-D56zq5FL.js";
const hero1 = "/pacta-precision-pioneers/assets/hero-1-BO52vQKD.jpg";
const hero2 = "/pacta-precision-pioneers/assets/hero-2-B1URQCKq.jpg";
const hero3 = "/pacta-precision-pioneers/assets/hero-3-CZ6p5VuK.jpg";
const slides = [
  {
    image: hero1,
    title: "Qualidade e compromisso que você merece!",
    subtitle: "Engenharia e Construções com certificação PBQP-H. Construção civil e reformas."
  },
  {
    image: hero2,
    title: "Solidez e confiança em cada projeto",
    subtitle: "Empreendimentos que definem o padrão de qualidade no mercado."
  },
  {
    image: hero3,
    title: "Construindo o futuro, hoje",
    subtitle: "Do planejamento à entrega, sua obra em mãos experientes."
  }
];
function HeroCarousel() {
  const [current, setCurrent] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.8]);
  const next = reactExports.useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = reactExports.useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);
  reactExports.useEffect(() => {
    const timer = setInterval(next, 6e3);
    return () => clearInterval(timer);
  }, [next]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative h-[100dvh] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.1 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              style: { y: imageY, scale: imageScale },
              className: "absolute inset-0 will-change-transform",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: slides[current].image,
                  alt: slides[current].title,
                  className: "w-full h-[120%] object-cover",
                  width: 1920,
                  height: 1080
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              style: { opacity: overlayOpacity },
              className: "absolute inset-0 bg-primary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" })
        ]
      },
      current
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { y: textY, opacity: textOpacity },
        className: "relative z-10 flex items-center justify-center h-full will-change-transform px-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40, filter: "blur(10px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: -40, filter: "blur(10px)" },
            transition: { duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { opacity: 0, letterSpacing: "0.2em" },
                  animate: { opacity: 1, letterSpacing: "0.4em" },
                  transition: { duration: 1.2, delay: 0.4 },
                  className: "inline-block text-[10px] sm:text-xs uppercase text-accent font-medium mb-4 sm:mb-6",
                  children: "Trivan Engenharia e Construções"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-4 sm:mb-6 font-heading", children: slides[current].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg md:text-xl text-primary-foreground/75 mb-8 sm:mb-10 font-light max-w-2xl mx-auto", children: slides[current].subtitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#empreendimentos",
                    className: "inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity duration-300",
                    children: "Ver Empreendimentos"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://wa.me/5583991083039",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:border-accent hover:text-accent transition-colors duration-300",
                    children: "Falar no WhatsApp"
                  }
                )
              ] })
            ]
          },
          current
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        onClick: prev,
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        className: "absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm",
        "aria-label": "Slide anterior",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "sm:hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 24, className: "hidden sm:block" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        onClick: next,
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        className: "absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm",
        "aria-label": "Próximo slide",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "sm:hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 24, className: "hidden sm:block" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCurrent(i),
        className: `h-1 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-accent" : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"}`,
        "aria-label": `Ir para slide ${i + 1}`
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 2 },
        className: "absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary-foreground/40 uppercase tracking-widest", children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { y: [0, 8, 0] },
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              className: "w-5 h-8 rounded-full border border-primary-foreground/30 flex items-start justify-center pt-1.5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-2 rounded-full bg-accent" })
            }
          )
        ]
      }
    )
  ] });
}
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-accent font-medium", children: "Sobre nós" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 font-heading leading-tight", children: [
            "Qualidade e compromisso ",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "que você merece" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-accent font-semibold italic mb-6", children: "Engenharia e Construções — Certificada PBQP-H" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "A Trivan Engenharia e Construções nasceu com a missão de transformar projetos em realidade com excelência técnica e compromisso inabalável. Atuamos na construção civil, incorporação imobiliária e reformas residenciais e comerciais." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-10", children: "Com uma equipe altamente qualificada e processos rigorosos de controle de qualidade, garantimos que cada obra reflete nossos valores: precisão, transparência e respeito aos prazos." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CounterStat, { icon: Shield, value: 20, suffix: "+", label: "Anos de experiência" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CounterStat, { icon: Award, value: 150, suffix: "+", label: "Obras entregues" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CounterStat, { icon: Users, value: 500, suffix: "+", label: "Famílias atendidas" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.2 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
                alt: "Engenheiros trabalhando em obra",
                className: "w-full h-full object-cover",
                loading: "lazy",
                width: 800,
                height: 1e3
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-card rounded-xl p-4 sm:p-6 shadow-xl border border-border max-w-[200px] sm:max-w-[240px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 20, className: "text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-accent font-heading", children: "PBQP-H" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground", children: "Certificação de qualidade na construção civil" })
          ] })
        ]
      }
    )
  ] }) }) });
}
function ProjectsGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "empreendimentos", className: "py-24 lg:py-32 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-accent font-medium", children: "Obras" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 font-heading", children: "Nossas Obras" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl mx-auto", children: "Conheça os projetos que marcam nossa trajetória de excelência" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos/$slug", params: { slug: project.slug }, className: "group block cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden bg-card shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: project.image,
                alt: project.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                loading: "lazy",
                width: 800,
                height: 600
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoTrivan,
                alt: "",
                className: "absolute bottom-3 right-3 w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-40 pointer-events-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${project.statusColor}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" }),
              project.status
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "text-accent-foreground" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground font-heading group-hover:text-accent transition-colors", children: project.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-sm text-muted-foreground mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-accent" }),
              project.location
            ] })
          ] })
        ] }) })
      },
      project.slug
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/projetos",
        className: "inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity",
        children: [
          "Ver Todos os Projetos",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
        ]
      }
    ) })
  ] }) });
}
const featured = imoveis.filter((i) => i.status === "Lançamento" || i.status === "Breve Lançamento").slice(0, 3);
function FeaturedProperties() {
  if (featured.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm tracking-[0.3em] text-accent uppercase mb-3 font-medium", children: "Lançamentos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-foreground font-heading mb-4", children: "Imóveis em Destaque" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Conheça nossos empreendimentos mais recentes e encontre o imóvel ideal para você." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: featured.map((imovel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/imoveis/$slug",
            params: { slug: imovel.slug },
            className: "group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all h-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: imovel.image,
                    alt: imovel.name,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                    loading: "lazy",
                    width: 600,
                    height: 375
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-foreground ${imovel.statusColor}`, children: imovel.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-bold text-foreground font-heading mb-1 group-hover:text-accent transition-colors", children: imovel.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic mb-3", children: imovel.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-accent" }),
                  imovel.bairro,
                  ", ",
                  imovel.location
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mt-auto pt-4 border-t border-border flex-wrap", children: [
                  imovel.bedrooms > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { size: 14, className: "text-accent" }),
                    " ",
                    imovel.bedrooms,
                    " quartos"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 14, className: "text-accent" }),
                    " ",
                    imovel.parking,
                    " vagas"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all", children: [
                    "Ver ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                  ] })
                ] })
              ] })
            ]
          }
        )
      },
      imovel.slug
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/imoveis",
        className: "inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity",
        children: [
          "Ver Todos os Imóveis",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ]
      }
    ) })
  ] }) });
}
const logoCaixa = "/pacta-precision-pioneers/assets/logo-caixa-BZS4OLm9.png";
const logoMcmv = "/pacta-precision-pioneers/assets/logo-mcmv-CANCaKV9.png";
function PartnerBadges() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium mb-8", children: "Parceiros e Programas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-10 sm:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          src: logoCaixa,
          alt: "Caixa Econômica Federal",
          className: "h-10 sm:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          src: logoMcmv,
          alt: "Minha Casa Minha Vida",
          className: "h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500",
          loading: "lazy"
        }
      )
    ] })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProperties, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsGrid, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Differentials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProof, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PartnerBadges, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  HomePage as component
};
