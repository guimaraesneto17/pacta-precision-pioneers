import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Blog"} — Trivan Engenharia e Construções` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:title", content: `${loaderData?.post.title ?? "Blog"} — Trivan Engenharia e Construções` },
      { property: "og:description", content: loaderData?.post.excerpt ?? "" },
      ...(loaderData?.post.image ? [{ property: "og:image", content: loaderData.post.image }] : []),
    ],
  }),
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Post não encontrado</h1>
        <Link to="/blog" className="mt-4 inline-block text-accent hover:underline">Voltar ao blog</Link>
      </div>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero image */}
        <section className="relative pt-20">
          <div className="relative aspect-[16/7] max-h-[500px] overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" width={1920} height={700} />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground font-heading max-w-4xl">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-primary-foreground/70">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString("pt-BR")}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft size={16} /> Voltar ao blog
            </Link>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>
              ))}
            </motion.article>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-foreground font-heading mb-8">Outros artigos</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={600} height={375} />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground font-heading mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                      <span className="flex items-center gap-1 text-sm text-accent font-medium">Ler mais <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
