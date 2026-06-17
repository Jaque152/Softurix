"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/lib/language-context";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions";

type Errors = Partial<Record<"nombre" | "email" | "mensaje", string>>;

export function ContactForm() {
  const { t, language } = useLanguage();
  
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (!form.nombre.trim()) {
      next.nombre = language === "es" ? "Campo requerido." : "Required field.";
    }
    if (!form.email.trim()) {
      next.email = language === "es" ? "Campo requerido." : "Required field.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = language === "es" ? "Formato inválido." : "Invalid format.";
    }
    if (!form.mensaje.trim()) {
      next.mensaje = language === "es" ? "Campo requerido." : "Required field.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);

    // Enviar datos al Server Action
    const result = await sendContactEmail(form, language);

    setLoading(false);

    if (result.success) {
      setSent(true);
      toast.success(t.contact.successTitle, {
        description: t.contact.successDesc,
      });
    } else {
      toast.error("Error", {
        description: language === "es" ? "No se pudo enviar el mensaje." : "Failed to send message.",
      });
    }
  }

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof Errors]) {
      setErrors((er) => ({ ...er, [key]: undefined }));
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-pine/10 bg-card px-8 py-16 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-pine text-cream">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl text-pine">
          {t.contact.successTitle}
        </h3>
        <p className="mt-2 max-w-sm text-espresso/70">
          {t.contact.successDesc}
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
            setSent(false);
          }}
        >
          {t.contact.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-pine/10 bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">{t.contact.name}</Label>
          <Input
            id="nombre"
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            placeholder={t.contact.placeholderName}
            aria-invalid={!!errors.nombre}
          />
          {errors.nombre && (
            <p className="text-xs text-destructive">{errors.nombre}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t.contact.email}</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={t.contact.placeholderEmail}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="asunto">{t.contact.subject}</Label>
        <Input
          id="asunto"
          value={form.asunto}
          onChange={(e) => update("asunto", e.target.value)}
          placeholder={t.contact.placeholderSubject}
        />
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="mensaje">{t.contact.message}</Label>
        <Textarea
          id="mensaje"
          value={form.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
          placeholder={t.contact.placeholderMessage}
          rows={6}
          aria-invalid={!!errors.mensaje}
        />
        {errors.mensaje && (
          <p className="text-xs text-destructive">{errors.mensaje}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="mt-6 w-full sm:w-auto"
      >
        {loading ? t.contact.sending : t.contact.send}
        {!loading && <Send className="h-4 w-4" />}
      </Button>
    </form>
  );
}