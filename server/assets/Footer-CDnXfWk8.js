import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { c as createLucideIcon, L as Link, X, A as AnimatePresence, m as motion } from "./router-BnEM0R4D.js";
const __iconNode$6 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const logoTrivan = "/pacta-precision-pioneers/assets/logo-trivan-5U-HbQle.png";
const whatsappNumbers = [
  { city: "Campina Grande", number: "5583991083039" },
  { city: "Sousa", number: "5583989079218" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const navItems = [
    { label: "Sobre", to: "/sobre" },
    { label: "Imóveis", to: "/imoveis" },
    { label: "Obras", to: "/projetos" },
    { label: "Blog", to: "/blog" },
    { label: "Contato", to: "/contato" }
  ];
  reactExports.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16 sm:h-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logoTrivan,
          alt: "Trivan Engenharia e Construções",
          className: "h-10 sm:h-14 w-auto object-contain"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          activeProps: { className: "!text-accent" },
          activeOptions: { exact: true },
          className: "text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 uppercase",
          children: item.label
        },
        item.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block w-[56px] shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(!open),
          className: "lg:hidden text-primary-foreground p-1",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "lg:hidden bg-primary border-t border-border/10 overflow-hidden max-h-[calc(100dvh-4rem)]  overflow-y-auto",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col py-4 px-6 gap-3", children: [
          navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              onClick: () => setOpen(false),
              className: "text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors uppercase py-2",
              children: item.label
            },
            item.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 mt-2", children: whatsappNumbers.map((wa) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/${wa.number}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center gap-2 text-sm bg-accent text-accent-foreground font-semibold py-3 rounded-lg",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
                "WhatsApp ",
                wa.city
              ]
            },
            wa.city
          )) })
        ] })
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold tracking-wider font-heading", children: "TRIVAN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-accent uppercase mt-1 font-medium", children: "Engenharia e Construções" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/80 font-medium italic mb-3", children: '"Qualidade e compromisso que você merece!"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/60 leading-relaxed", children: "Construindo o futuro com precisão, qualidade e compromisso. Empresa certificada PBQP-H. Construção civil, incorporação e reformas residenciais e comerciais." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold tracking-wider uppercase text-accent mb-6", children: "Links Rápidos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [
          { label: "Home", to: "/" },
          { label: "Sobre", to: "/sobre" },
          { label: "Imóveis", to: "/imoveis" },
          { label: "Obras", to: "/projetos" },
          { label: "Blog", to: "/blog" },
          { label: "Contato", to: "/contato" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors", children: l.label }) }, l.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold tracking-wider uppercase text-accent mb-6", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-primary-foreground/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "text-accent shrink-0 mt-0.5" }),
            "Rua Edmundo Pereira de Farias, 173 - Sandra Cavalcante, Campina Grande - PB, 58.410-813"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-primary-foreground/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, className: "text-accent shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "(83) 99108-3039 (Campina Grande)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "(83) 98907-9218 (Sousa)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-primary-foreground/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, className: "text-accent shrink-0" }),
            "contato@trivanengenharia.com.br"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 mt-8", children: [
          { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/trivanengenharia/" },
          { icon: Facebook, label: "Facebook", href: "#" },
          { icon: Linkedin, label: "LinkedIn", href: "#" }
        ].map(({ icon: Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: "w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 })
          },
          label
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/40", children: "© 2025 Trivan Engenharia e Construções. Todos os direitos reservados." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/40", children: "Certificada PBQP-H" })
    ] }) })
  ] });
}
export {
  Footer as F,
  Header as H,
  Instagram as I,
  MapPin as M,
  Phone as P,
  Mail as a,
  logoTrivan as l
};
