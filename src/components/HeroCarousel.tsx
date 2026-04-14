import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Qualidade e compromisso que você merece!",
    subtitle: "Construtora e Incorporadora com certificação PBQP-H. Construção, incorporação e reformas.",
  },
  {
    image: hero2,
    title: "Solidez e confiança em cada projeto",
    subtitle: "Empreendimentos que definem o padrão de qualidade no mercado.",
  },
  {
    image: hero3,
    title: "Construindo o futuro, hoje",
    subtitle: "Do planejamento à entrega, sua obra em mãos experientes.",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.8]);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden">
      {/* Parallax image layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 will-change-transform"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-[120%] object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-primary"
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content with parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex items-center justify-center h-full will-change-transform px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="inline-block text-[10px] sm:text-xs uppercase text-accent font-medium mb-4 sm:mb-6"
              >
                Trivan Construtora e Incorporadora
              </motion.span>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-4 sm:mb-6 font-heading">
                {slides[current].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/75 mb-8 sm:mb-10 font-light max-w-2xl mx-auto">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#empreendimentos"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Ver Empreendimentos
                </a>
                <a
                  href="https://wa.me/5583991083039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Nav buttons */}
      <motion.button
        onClick={prev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} className="sm:hidden" />
        <ChevronLeft size={24} className="hidden sm:block" />
      </motion.button>
      <motion.button
        onClick={next}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
        aria-label="Próximo slide"
      >
        <ChevronRight size={20} className="sm:hidden" />
        <ChevronRight size={24} className="hidden sm:block" />
      </motion.button>

      {/* Progress dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-primary-foreground/40 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-primary-foreground/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
