import { T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { H as Header, P as Phone, M as MapPin, a as Mail, F as Footer } from "./Footer-CDnXfWk8.js";
import { m as motion } from "./router-BnEM0R4D.js";
import { C as Clock } from "./clock-DLw6QphF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const contactInfo = [{
  icon: MapPin,
  label: "Endereço",
  value: "Rua Edmundo Pereira de Farias, 173 - Sandra Cavalcante, Campina Grande - PB, 58.410-813"
}, {
  icon: Phone,
  label: "Campina Grande",
  value: "(83) 99108-3039"
}, {
  icon: Phone,
  label: "Sousa",
  value: "(83) 98907-9218"
}, {
  icon: Mail,
  label: "Email",
  value: "contato@trivanengenharia.com.br"
}, {
  icon: Clock,
  label: "Horário",
  value: "Seg–Sex: 8h às 18h"
}];
const whatsappNumbers = [{
  city: "Campina Grande",
  number: "5583991083039",
  description: "Atendimento Campina Grande e região"
}, {
  city: "Sousa",
  number: "5583989079218",
  description: "Atendimento Sousa e alto sertão"
}];
function ContatoPage() {
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-accent font-medium", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 font-heading", children: "Fale Conosco" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 mt-4 max-w-xl mx-auto", children: "Estamos prontos para transformar seu projeto em realidade" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground font-heading mb-3", children: "Fale pelo WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Escolha a unidade mais próxima de você e converse diretamente com nossa equipe." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4 sm:gap-6", children: whatsappNumbers.map((wa) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${wa.number}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os empreendimentos da Trivan Engenharia e Construções.")}`, target: "_blank", rel: "noopener noreferrer", className: "group flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl border-2 border-border hover:border-accent bg-background hover:bg-accent/5 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 28, className: "text-accent group-hover:text-accent-foreground transition-colors" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground font-heading group-hover:text-accent transition-colors", children: wa.city }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: wa.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg group-hover:opacity-90 transition-opacity", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
              "WhatsApp"
            ] })
          ] }, wa.city)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 30
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6
        }, className: "lg:col-span-2 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground font-heading mb-6", children: "Informações" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: contactInfo.map(({
              icon: Icon,
              label,
              value
            }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: value })
              ] })
            ] }, label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden border border-border shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1!2d-35.881!3d-7.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnNDQuNCJTIDM1wrA1Mic1Mi42Ilc!5e0!3m2!1spt-BR!2sbr", width: "100%", height: "300", style: {
            border: 0
          }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Localização Trivan Engenharia e Construções" }) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContatoPage as component
};
