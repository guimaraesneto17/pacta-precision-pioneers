import { T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
import { t as Route, b as blogPosts, m as motion, L as Link } from "./router-BnEM0R4D.js";
import { H as Header, F as Footer } from "./Footer-CDnXfWk8.js";
import { C as Calendar, U as User } from "./user-CC35S0Sc.js";
import { A as ArrowLeft } from "./arrow-left-5zp0sh62.js";
import { A as ArrowRight } from "./arrow-right-3lm5ZyAy.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogPostPage() {
  const {
    post
  } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/7] max-h-[500px] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover", width: 1920, height: 700 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground font-heading max-w-4xl", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6 mt-6 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
              " ",
              new Date(post.date).toLocaleDateString("pt-BR")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }),
              " ",
              post.author
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
          " Voltar ao blog"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.article, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "prose prose-lg max-w-none", children: post.content.split("\n\n").map((paragraph, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: paragraph }, i)) })
      ] }) }),
      related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-foreground font-heading mb-8", children: "Outros artigos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
          slug: p.slug
        }, className: "group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy", width: 600, height: 375 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground font-heading mb-2 group-hover:text-accent transition-colors", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-sm text-accent font-medium", children: [
              "Ler mais ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] }, p.slug)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogPostPage as component
};
