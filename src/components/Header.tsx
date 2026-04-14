import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const whatsappNumbers = [
  { city: "Campina Grande", number: "5583991083039" },
  { city: "Sousa", number: "5583989079218" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-primary-foreground font-heading">
                TRIVAN
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-accent uppercase -mt-1 font-medium">
                Engenharia e Construções
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeProps={{ className: "!text-accent" }}
                activeOptions={{ exact: true }}
                className="text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>


          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-primary-foreground p-1"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-border/10 overflow-hidden max-h-[calc(100dvh-4rem)]  overflow-y-auto"
          >
            <nav className="flex flex-col py-4 px-6 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors uppercase py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                {whatsappNumbers.map((wa) => (
                  <a
                    key={wa.city}
                    href={`https://wa.me/${wa.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm bg-accent text-accent-foreground font-semibold py-3 rounded-lg"
                  >
                    <Phone size={16} />
                    WhatsApp {wa.city}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
