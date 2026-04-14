import { BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function PbqpBadge() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex items-center gap-2 bg-card border border-border shadow-xl rounded-full px-4 py-3 hover:shadow-2xl transition-all duration-300"
        aria-label="Certificação PBQP-H"
      >
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
          <BadgeCheck size={20} className="text-accent" />
        </div>
        <span className="text-xs font-bold text-foreground tracking-wide hidden sm:inline">
          PBQP-H
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-3 w-72 bg-card border border-border rounded-xl shadow-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <BadgeCheck size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Certificada PBQP-H</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Nível A</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              O PBQP-H (Programa Brasileiro de Qualidade e Produtividade do Habitat) certifica 
              que a Trivan atende aos mais altos padrões de qualidade na construção civil.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
