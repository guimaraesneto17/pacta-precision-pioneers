import { T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { H as Header, F as Footer } from "./Footer-CDnXfWk8.js";
import { m as motion, L as Link, b as blogPosts } from "./router-BnEM0R4D.js";
import { C as Calendar, U as User } from "./user-CC35S0Sc.js";
import { A as ArrowRight } from "./arrow-right-3lm5ZyAy.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-28 pb-16 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm tracking-[0.3em] text-accent uppercase mb-4 font-medium", children: "Novidades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4", children: "Blog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-lg max-w-2xl mx-auto", children: "Acompanhe o andamento das nossas obras, novidades do mercado e artigos sobre construção civil." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: featured.slug
      }, className: "group grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] lg:aspect-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.image, alt: featured.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", width: 800, height: 500 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 lg:p-12 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 w-fit", children: featured.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-foreground font-heading mb-4 group-hover:text-accent transition-colors", children: featured.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: featured.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
              " ",
              new Date(featured.date).toLocaleDateString("pt-BR")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }),
              " ",
              featured.author
            ] })
          ] })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: rest.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: post.slug
      }, className: "group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy", width: 600, height: 375 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3 w-fit", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground font-heading mb-2 group-hover:text-accent transition-colors", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4 flex-1", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
              " ",
              new Date(post.date).toLocaleDateString("pt-BR")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all", children: [
              "Ler mais ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }) }, post.slug)) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogPage as component
};
