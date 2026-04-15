import { Star, Instagram, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Proprietário - Residencial Seletto",
    text: "A Trivan entregou nosso apartamento com uma qualidade que superou todas as expectativas. O acabamento é impecável.",
    rating: 5,
  },
  {
    name: "Ana Paula Mendes",
    role: "Investidora",
    text: "Investir com a Trivan foi a melhor decisão. Transparência total durante toda a obra e entrega no prazo combinado.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Proprietário - Villagio Trivan",
    text: "Profissionalismo do início ao fim. A equipe técnica é excepcional e o atendimento personalizado faz toda a diferença.",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 font-heading">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 shadow-md border border-border relative"
            >
              <Quote size={32} className="text-accent/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Instagram size={24} className="text-accent" />
            <span className="text-lg font-semibold text-foreground">@trivanengenharia</span>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Acompanhe nossas obras e lançamentos no Instagram</p>
          <a
            href="https://www.instagram.com/trivanengenharia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity"
          >
            <Instagram size={18} />
            Siga-nos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
