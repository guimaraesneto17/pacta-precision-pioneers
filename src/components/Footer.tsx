import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-wider font-heading">TRIVAN</span>
              <p className="text-xs tracking-[0.3em] text-accent uppercase mt-1 font-medium">Engenharia e Construções</p>
            </div>
            <p className="text-sm text-primary-foreground/80 font-medium italic mb-3">
              "Qualidade e compromisso que você merece!"
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Construindo o futuro com precisão, qualidade e compromisso. 
              Empresa certificada PBQP-H. Construção civil, incorporação e reformas residenciais e comerciais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-accent mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" as const },
                { label: "Sobre", to: "/sobre" as const },
                { label: "Imóveis", to: "/imoveis" as const },
                { label: "Obras", to: "/projetos" as const },
                { label: "Blog", to: "/blog" as const },
                { label: "Contato", to: "/contato" as const },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-accent mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                Rua Edmundo Pereira de Farias, 173 - Sandra Cavalcante, Campina Grande - PB, 58.410-813
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone size={18} className="text-accent shrink-0" />
                <span>
                  <span className="block">(83) 99108-3039 (Campina Grande)</span>
                  <span className="block">(83) 98907-9218 (Sousa)</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail size={18} className="text-accent shrink-0" />
                contato@trivanengenharia.com.br
              </li>
            </ul>

            <div className="flex gap-4 mt-8">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/trivanengenharia/" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2025 Trivan Engenharia e Construções. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Certificada PBQP-H
          </p>
        </div>
      </div>
    </footer>
  );
}
