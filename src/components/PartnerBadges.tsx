import logoCaixa from "@/assets/logo-caixa.png";
import logoMcmv from "@/assets/logo-mcmv.png";
import { motion } from "framer-motion";

export function PartnerBadges() {
  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium mb-8">
          Parceiros e Programas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={logoCaixa}
            alt="Caixa Econômica Federal"
            className="h-10 sm:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            src={logoMcmv}
            alt="Minha Casa Minha Vida"
            className="h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
