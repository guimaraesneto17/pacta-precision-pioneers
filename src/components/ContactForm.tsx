import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim() || form.name.trim().length > 100) e.name = "Nome é obrigatório (máx. 100 caracteres)";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) e.phone = "Telefone inválido";
    if (!form.message.trim() || form.message.trim().length > 1000) e.message = "Mensagem é obrigatória (máx. 1000 caracteres)";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Build WhatsApp message
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.name.trim()}.\nEmail: ${form.email.trim()}\nTelefone: ${form.phone.trim()}\n\n${form.message.trim()}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");

    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          maxLength={100}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
          placeholder="Seu nome"
        />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            maxLength={255}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefone</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            maxLength={20}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            placeholder="(11) 99999-9999"
          />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          maxLength={1000}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
          placeholder="Como podemos ajudar?"
        />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {submitted ? (
          <>
            <CheckCircle size={18} />
            Mensagem Enviada!
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar Mensagem
          </>
        )}
      </button>
    </motion.form>
  );
}
