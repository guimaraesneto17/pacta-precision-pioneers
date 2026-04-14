import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Trivan Construtora e Incorporadora" },
      { name: "description", content: "Entre em contato com a Trivan Construtora e Incorporadora. Tire suas dúvidas e solicite um orçamento." },
      { property: "og:title", content: "Contato — Trivan Construtora e Incorporadora" },
      { property: "og:description", content: "Fale com a Trivan para saber mais sobre nossos empreendimentos e serviços de reforma." },
    ],
  }),
  component: ContatoPage,
});

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Rua Edmundo Pereira de Farias, 173 - Sandra Cavalcante, Campina Grande - PB, 58.410-813" },
  { icon: Phone, label: "Campina Grande", value: "(83) 99108-3039" },
  { icon: Phone, label: "Sousa", value: "(83) 98907-9218" },
  { icon: Mail, label: "Email", value: "contato@trivanengenharia.com.br" },
  { icon: Clock, label: "Horário", value: "Seg–Sex: 8h às 18h" },
];

const whatsappNumbers = [
  { city: "Campina Grande", number: "5583991083039", description: "Atendimento Campina Grande e região" },
  { city: "Sousa", number: "5583989079218", description: "Atendimento Sousa e alto sertão" },
];

function ContatoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Contato</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 font-heading">Fale Conosco</h1>
              <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">Estamos prontos para transformar seu projeto em realidade</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* WhatsApp buttons */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border"
                >
                  <h2 className="text-2xl font-bold text-foreground font-heading mb-3">Fale pelo WhatsApp</h2>
                  <p className="text-muted-foreground mb-8">
                    Escolha a unidade mais próxima de você e converse diretamente com nossa equipe.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {whatsappNumbers.map((wa) => (
                      <a
                        key={wa.city}
                        href={`https://wa.me/${wa.number}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os empreendimentos da Trivan Construtora e Incorporadora.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl border-2 border-border hover:border-accent bg-background hover:bg-accent/5 transition-all duration-300"
                      >
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                          <Phone size={28} className="text-accent group-hover:text-accent-foreground transition-colors" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-bold text-foreground font-heading group-hover:text-accent transition-colors">
                            {wa.city}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{wa.description}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg group-hover:opacity-90 transition-opacity">
                          <Phone size={16} />
                          WhatsApp
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground font-heading mb-6">Informações</h2>
                  <div className="space-y-6">
                    {contactInfo.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{label}</p>
                          <p className="text-sm text-muted-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1!2d-35.881!3d-7.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnNDQuNCJTIDM1wrA1Mic1Mi42Ilc!5e0!3m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Trivan Construtora e Incorporadora"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
