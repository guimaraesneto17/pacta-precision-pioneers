import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Differentials } from "@/components/Differentials";
import { SocialProof } from "@/components/SocialProof";
import { PartnerBadges } from "@/components/PartnerBadges";
import { CounterStat } from "@/components/CounterStat";
import { motion } from "framer-motion";
import { Shield, Award, Users, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Trivan Engenharia e Construções" },
      { name: "description", content: "Conheça a Trivan Engenharia e Construções: certificada PBQP-H, atuando em construção civil, incorporação e reformas residenciais e comerciais." },
      { property: "og:title", content: "Sobre — Trivan Engenharia e Construções" },
      { property: "og:description", content: "Qualidade e compromisso que você merece. Certificada PBQP-H." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Sobre nós</span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-4 font-heading">
                Qualidade e compromisso <span className="text-accent">que você merece</span>
              </h1>
              <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto text-sm sm:text-base">
                Engenharia e Construções — Certificada PBQP-H
              </p>
            </motion.div>
          </div>
        </section>

        {/* About content */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">
                  A Trivan Engenharia e Construções nasceu com a missão de transformar projetos em
                  realidade com excelência técnica e compromisso inabalável. Atuamos na construção civil,
                  incorporação imobiliária e reformas residenciais e comerciais.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">
                  Com uma equipe altamente qualificada e processos rigorosos de
                  controle de qualidade, garantimos que cada obra reflete nossos
                  valores: precisão, transparência e respeito aos prazos.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 mb-10">
                  <BadgeCheck size={24} className="text-accent shrink-0" />
                  <p className="text-sm sm:text-base text-foreground font-medium">
                    Empresa certificada pelo <strong className="text-accent">PBQP-H</strong> — Programa Brasileiro de Qualidade e Produtividade do Habitat.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  <CounterStat icon={Shield} value={20} suffix="+" label="Anos de experiência" />
                  <CounterStat icon={Award} value={150} suffix="+" label="Obras entregues" />
                  <CounterStat icon={Users} value={500} suffix="+" label="Famílias atendidas" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                    alt="Engenheiros trabalhando em obra"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 sm:p-6 shadow-xl border border-border max-w-[200px] sm:max-w-[240px]">
                  <p className="text-3xl sm:text-4xl font-bold text-accent font-heading">98%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">de satisfação dos nossos clientes</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Nossos Serviços</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 font-heading">O que fazemos</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Construção Civil", desc: "Obras residenciais e comerciais com qualidade certificada PBQP-H e entrega garantida no prazo." },
                { title: "Incorporação Imobiliária", desc: "Desenvolvimento de empreendimentos próprios com alto padrão de qualidade e valorização." },
                { title: "Reformas Residenciais e Comerciais", desc: "Transformação de espaços com planejamento, qualidade e agilidade na execução." },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Differentials />
        <SocialProof />
        <PartnerBadges />
      </main>
      <Footer />
    </div>
  );
}
