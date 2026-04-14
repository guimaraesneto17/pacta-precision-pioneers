import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Trivan Engenharia e Construções" },
      { name: "description", content: "Acompanhe as novidades, andamento das obras e notícias da Trivan Engenharia e Construções." },
      { property: "og:title", content: "Blog — Trivan Engenharia e Construções" },
      { property: "og:description", content: "Notícias, atualizações de obras e artigos sobre construção civil." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4 font-medium">Novidades</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4">Blog</h1>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
                Acompanhe o andamento das nossas obras, novidades do mercado e artigos sobre construção civil.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured post */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="group grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading mb-4 group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(featured.date).toLocaleDateString("pt-BR")}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {featured.author}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={600}
                        height={375}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground font-heading mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString("pt-BR")}</span>
                        <span className="flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">
                          Ler mais <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
