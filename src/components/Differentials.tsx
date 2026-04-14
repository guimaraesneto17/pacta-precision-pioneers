import { motion } from "framer-motion";
import { Cpu, Clock, BadgeCheck, Ruler, HardHat, Leaf, Wrench, Building } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "Certificação PBQP-H", desc: "Empresa certificada pelo PBQP-H, garantindo padrão de qualidade em todas as etapas." },
  { icon: Clock, title: "Prazo Garantido", desc: "Cronograma rigoroso com entregas dentro do prazo estabelecido." },
  { icon: Ruler, title: "Engenharia de Precisão", desc: "Projetos estruturais com máximo rigor técnico e segurança." },
  { icon: Building, title: "Incorporação Imobiliária", desc: "Empreendimentos próprios com qualidade e valorização garantida." },
  { icon: Wrench, title: "Reformas Residenciais e Comerciais", desc: "Transformação de espaços com qualidade, planejamento e agilidade." },
  { icon: HardHat, title: "Equipe Especializada", desc: "Profissionais certificados com anos de experiência no mercado." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 font-heading">
            Nossos Diferenciais
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 sm:p-8 rounded-xl border border-primary-foreground/10 hover:border-accent/40 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon size={26} className="text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 font-heading">{title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
