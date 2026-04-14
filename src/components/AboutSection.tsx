import { motion } from "framer-motion";
import { Shield, Award, Users, BadgeCheck } from "lucide-react";
import { CounterStat } from "@/components/CounterStat";

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Sobre nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 font-heading leading-tight">
              Qualidade e compromisso {" "}
              <span className="text-gradient-accent">que você merece</span>
            </h2>
            <p className="text-lg text-accent font-semibold italic mb-6">
              Construtora e Incorporadora — Certificada PBQP-H
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Trivan Construtora e Incorporadora nasceu com a missão de transformar projetos em 
              realidade com excelência técnica e compromisso inabalável. Atuamos na construção civil, 
              incorporação imobiliária e reformas residenciais e comerciais.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Com uma equipe altamente qualificada e processos rigorosos de 
              controle de qualidade, garantimos que cada obra reflete nossos 
              valores: precisão, transparência e respeito aos prazos.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <CounterStat icon={Shield} value={20} suffix="+" label="Anos de experiência" />
              <CounterStat icon={Award} value={150} suffix="+" label="Obras entregues" />
              <CounterStat icon={Users} value={500} suffix="+" label="Famílias atendidas" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
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
              <div className="flex items-center gap-2 mb-1">
                <BadgeCheck size={20} className="text-accent" />
                <p className="text-sm font-bold text-accent font-heading">PBQP-H</p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Certificação de qualidade na construção civil
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
