"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

type Field = "nombre" | "apellidos" | "email" | "folio" | "monto";

export default function PagarRutaPage() {
  const { t, language } = useLanguage();
  const { addItem } = useCart();
  const router = useRouter();

  const [form, setForm] = useState<Record<Field, string>>({
    nombre: "",
    apellidos: "",
    email: "",
    folio: "",
    monto: "",
  });
  
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  function update(key: Field, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<Field, string>> = {};

    // Validaciones
    if (!form.nombre.trim()) next.nombre = t.customRoutePage.required;
    if (!form.apellidos.trim()) next.apellidos = t.customRoutePage.required;
    
    if (!form.email.trim()) {
      next.email = t.customRoutePage.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = t.customRoutePage.invalidEmail;
    }

    if (!form.monto.trim() || isNaN(Number(form.monto)) || Number(form.monto) <= 0) {
      next.monto = t.customRoutePage.invalidAmount;
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Crear un producto personalizado dinámico
    const customProduct: Product = {
      id: Date.now(), // ID único
      slug: `ruta-personalizada-${Date.now()}`,
      title: language === "es" ? "Ruta Personalizada" : "Custom Route",
      price: Number(form.monto),
      category: language === "es" ? "Personalizado" : "Custom",
      // Imagen genérica para el checkout
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop", 
      idealPara: `${form.nombre} ${form.apellidos}`,
      incluye: `Folio: ${form.folio || "N/A"}`,
      modalidad: "Online",
      duracion: "Variable",
      resumen: `Pago de ruta personalizada para ${form.email}`,
    };

    // Añadimos el producto a la cesta
    addItem(customProduct, 1);
    
    // Redirigimos directamente al checkout para proceder con el pago
    router.push("/checkout");
  }

  return (
    <section className="bg-cream py-16 lg:py-24 min-h-[80vh]">
      <div className="container max-w-3xl">
        <h1 className="mb-12 font-display text-4xl font-extrabold text-[#1a1f36] sm:text-5xl tracking-tight">
          {t.customRoutePage.title}
        </h1>

        <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-xl border border-pine/10 bg-card p-6 sm:p-10 shadow-sm">
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="nombre" className={cn("mb-2 block font-bold text-sm", errors.nombre && "text-destructive")}>
                {t.customRoutePage.firstName}
              </Label>
              <Input
                id="nombre"
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                className={cn("h-12 border-pine/20", errors.nombre && "border-destructive focus-visible:ring-destructive")}
              />
              {errors.nombre && <p className="mt-1.5 text-xs font-semibold text-destructive">⚠️ {errors.nombre}</p>}
            </div>
            
            <div>
              <Label htmlFor="apellidos" className={cn("mb-2 block font-bold text-sm", errors.apellidos && "text-destructive")}>
                {t.customRoutePage.lastName}
              </Label>
              <Input
                id="apellidos"
                value={form.apellidos}
                onChange={(e) => update("apellidos", e.target.value)}
                className={cn("h-12 border-pine/20", errors.apellidos && "border-destructive focus-visible:ring-destructive")}
              />
              {errors.apellidos && <p className="mt-1.5 text-xs font-semibold text-destructive">⚠️ {errors.apellidos}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className={cn("mb-2 block font-bold text-sm", errors.email && "text-destructive")}>
              {t.customRoutePage.email}
            </Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={cn("h-12 border-pine/20", errors.email && "border-destructive focus-visible:ring-destructive")}
            />
            {errors.email && <p className="mt-1.5 text-xs font-semibold text-destructive">⚠️ {errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="folio" className="mb-2 block font-bold text-sm">
              {t.customRoutePage.folio}
            </Label>
            <Input
              id="folio"
              value={form.folio}
              onChange={(e) => update("folio", e.target.value)}
              className="h-12 border-pine/20"
            />
          </div>

          <div>
            <Label htmlFor="monto" className={cn("mb-2 block font-bold text-sm", errors.monto && "text-destructive")}>
              {t.customRoutePage.amount}
            </Label>
            <Input
              id="monto"
              type="number"
              min="1"
              step="0.01"
              value={form.monto}
              onChange={(e) => update("monto", e.target.value)}
              className={cn("h-12 border-pine/20", errors.monto && "border-destructive focus-visible:ring-destructive")}
            />
            {errors.monto && <p className="mt-1.5 text-xs font-semibold text-destructive">⚠️ {errors.monto}</p>}
          </div>

          <div className="pt-4">
            <Button type="submit" size="lg" className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-bold h-12 px-10 rounded-md">
              {t.customRoutePage.payBtn}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}