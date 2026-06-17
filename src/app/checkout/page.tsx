"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart-context";
import { formatMXN } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import { processPayment } from "@/app/actions";

type Field = 
  | "nombre" | "apellidos" | "pais" | "calle" | "colonia" 
  | "ciudad" | "estado" | "cp" | "telefono" | "email" 
  | "notas" | "titular" | "cardNumber" | "expiry" | "cvc";

export default function CheckoutPage() {
  const { items, subtotal, iva, total, count, clear } = useCart();
  const { t, language } = useLanguage();
  
  const [form, setForm] = useState<Record<Field, string>>({
    nombre: "", apellidos: "", pais: "México", calle: "", colonia: "", 
    ciudad: "", estado: "", cp: "", telefono: "", email: "", 
    notas: "", titular: "", cardNumber: "", expiry: "", cvc: ""
  });
  
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});
  const [placed, setPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(key: Field, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }));
  }

  // --- Funciones para formatear la tarjeta ---
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, ""); // Remueve letras
    val = val.substring(0, 16); // Máximo 16 dígitos
    val = val.replace(/(\d{4})(?=\d)/g, "$1 "); // Agrega espacio cada 4
    update("cardNumber", val);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if ((e.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
      update("expiry", val);
      return;
    }
    let v = val.replace(/\D/g, "").substring(0, 4); // Max 4 dígitos
    if (v.length >= 3) {
      v = `${v.substring(0, 2)} / ${v.substring(2)}`;
    } else if (v.length === 2) {
      v = `${v} / `;
    }
    update("expiry", v);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").substring(0, 4); // CVC de 3 o 4 (Amex)
    update("cvc", val);
  };
  // -------------------------------------------

  async function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    
    const required: Field[] = [
      "nombre", "apellidos", "pais", "calle", "ciudad", 
      "estado", "cp", "email", "titular", "cardNumber", "expiry", "cvc"
    ];
    
    const next: Partial<Record<Field, boolean>> = {};
    for (const f of required) {
      if (!form[f].trim()) next[f] = true;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = true;
    }
    
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setLoading(true);

    const payload = {
      contact: { 
        nombre: form.nombre,
        apellidos: form.apellidos,
        email: form.email, 
        telefono: form.telefono
      },
      billing: { 
        pais: form.pais,
        calle: form.calle, 
        colonia: form.colonia,
        ciudad: form.ciudad, 
        estado: form.estado,
        cp: form.cp 
      },
      order: {
        notas: form.notas
      },
      card: { 
        titular: form.titular,
        number: form.cardNumber, 
        expiry: form.expiry, 
        cvc: form.cvc 
      },
      items,
      total,
    };

    const result = await processPayment(payload, language);

    setLoading(false);

    if (result.success && result.orderId) {
      setPlaced(true);
      clear();
    } else {
      alert(language === "es" ? "Error al procesar el pago. Verifica tus datos." : "Payment error. Please check your details.");
    }
  }

  // Pantalla de Éxito (Sin número de operación)
  if (placed) {
    return (
      <section className="bg-cream py-24 lg:py-32">
        <div className="container flex flex-col items-center text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-pine text-cream">
            <CheckCircle2 className="h-10 w-10" />
          </span>
          <h1 className="mt-8 font-display text-4xl font-medium text-pine sm:text-5xl">
            {t.checkoutPage.success.title}
          </h1>
          <p className="mt-4 max-w-md text-espresso/70">
            {t.checkoutPage.success.desc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/servicios">{t.checkoutPage.success.btnExplore}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">{t.checkoutPage.success.btnHome}</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="bg-cream py-24 lg:py-32">
        <div className="container flex flex-col items-center text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sage/60">
            <ShoppingBag className="h-9 w-9 text-pine" />
          </span>
          <h1 className="mt-8 font-display text-4xl font-medium text-pine">
            {t.checkoutPage.empty.title}
          </h1>
          <p className="mt-3 max-w-md text-espresso/70">
            {t.checkoutPage.empty.desc}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/servicios">{t.checkoutPage.empty.btn}</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="container max-w-6xl">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/carrito">
            <ArrowLeft className="h-4 w-4" /> {t.checkoutPage.back}
          </Link>
        </Button>
        
        <form onSubmit={handlePlaceOrder} noValidate className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          
          <div className="space-y-6">
            <div className="rounded-xl border border-pine/10 bg-card p-6 shadow-sm">
              <h2 className="mb-6 font-display text-xl font-bold text-pine">{t.checkoutPage.billing.title}</h2>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="nombre" label={t.checkoutPage.billing.firstName} value={form.nombre} onChange={(v) => update("nombre", v)} error={errors.nombre} />
                <Field id="apellidos" label={t.checkoutPage.billing.lastName} value={form.apellidos} onChange={(v) => update("apellidos", v)} error={errors.apellidos} />
                
                <div className="sm:col-span-2">
                  <Field id="pais" label={t.checkoutPage.billing.country} value={form.pais} onChange={(v) => update("pais", v)} error={errors.pais} />
                </div>
                
                <div className="sm:col-span-2 space-y-3">
                  <Label className={cn(errors.calle && "text-destructive")}>{t.checkoutPage.billing.street}</Label>
                  <Input id="calle" placeholder={t.checkoutPage.billing.streetPlaceholder} value={form.calle} onChange={(e) => update("calle", e.target.value)} aria-invalid={errors.calle} className={cn(errors.calle && "border-destructive")} />
                  <Input id="colonia" placeholder={t.checkoutPage.billing.suburbPlaceholder} value={form.colonia} onChange={(e) => update("colonia", e.target.value)} />
                </div>

                <div className="sm:col-span-2">
                  <Field id="ciudad" label={t.checkoutPage.billing.city} value={form.ciudad} onChange={(v) => update("ciudad", v)} error={errors.ciudad} />
                </div>

                <div className="sm:col-span-2">
                  <Field id="estado" label={t.checkoutPage.billing.state} value={form.estado} onChange={(v) => update("estado", v)} error={errors.estado} />
                </div>

                <div className="sm:col-span-2">
                  <Field id="cp" label={t.checkoutPage.billing.zip} value={form.cp} onChange={(v) => update("cp", v)} error={errors.cp} />
                </div>

                <div className="sm:col-span-2">
                  <Field id="telefono" label={t.checkoutPage.billing.phone} value={form.telefono} onChange={(v) => update("telefono", v)} />
                </div>

                <div className="sm:col-span-2">
                  <Field id="email" label={t.checkoutPage.billing.email} type="email" value={form.email} onChange={(v) => update("email", v)} error={errors.email} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-pine/10 bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-display text-xl font-bold text-pine">{t.checkoutPage.additional.title}</h2>
              <div className="space-y-2">
                <Label htmlFor="notas">{t.checkoutPage.additional.notes}</Label>
                <Textarea 
                  id="notas" 
                  value={form.notas} 
                  onChange={(e) => update("notas", e.target.value)} 
                  placeholder={t.checkoutPage.additional.notesPlaceholder} 
                  rows={4} 
                />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-pine/10 bg-card p-6 shadow-sm">
              <h2 className="mb-6 font-display text-xl font-bold text-pine">{t.checkoutPage.summary.title}</h2>
              
              <div className="flex justify-between border-b border-pine/10 pb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span>{t.checkoutPage.summary.product}</span>
                <span>{t.checkoutPage.summary.subtotal}</span>
              </div>
              
              <ul className="mt-4 space-y-4 border-b border-pine/10 pb-4">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between text-sm">
                    <span className="text-espresso/80">{item.title} <strong className="font-semibold text-pine">× {item.quantity}</strong></span>
                    <span className="text-pine font-medium">{formatMXN(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              
              <dl className="mt-4 space-y-3 text-sm border-b border-pine/10 pb-4">
                <div className="flex justify-between">
                  <dt className="font-semibold text-espresso">{t.checkoutPage.summary.subtotal}</dt>
                  <dd className="font-medium text-pine">{formatMXN(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-espresso">{t.checkoutPage.summary.tax}</dt>
                  <dd className="font-medium text-pine">{formatMXN(iva)}</dd>
                </div>
              </dl>
              
              <div className="flex items-center justify-between py-4">
                <span className="font-display text-lg font-bold text-pine">{t.checkoutPage.summary.total}</span>
                <span className="font-display text-xl font-bold text-pine">{formatMXN(total)}</span>
              </div>

              <div className="mt-2 rounded-xl bg-background p-4 border border-pine/10">
                <div className="rounded-lg border border-pine/10 bg-card p-5 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-display text-lg uppercase tracking-wider text-pine font-bold leading-tight">
                      {t.checkoutPage.summary.paymentInfo}
                    </span>
                    <img src="/logo-octano-2.png" alt="Octano" className="h-8 object-contain" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="titular" className={cn("text-xs font-semibold text-espresso/80", errors.titular && "text-destructive")}>{t.checkoutPage.summary.cardHolder}</Label>
                      <Input id="titular" value={form.titular} onChange={(e) => update("titular", e.target.value)} className={cn("mt-1", errors.titular && "border-destructive")} />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber" className={cn("text-xs font-semibold text-espresso/80", errors.cardNumber && "text-destructive")}>{t.checkoutPage.summary.cardNumber}</Label>
                      <Input id="cardNumber" inputMode="numeric" placeholder="**** **** **** ****" value={form.cardNumber} onChange={handleCardNumberChange} className={cn("mt-1", errors.cardNumber && "border-destructive")} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className={cn("text-xs font-semibold text-espresso/80", errors.expiry && "text-destructive")}>{t.checkoutPage.summary.expiry}</Label>
                        <Input id="expiry" placeholder="MM / YY" value={form.expiry} onChange={handleExpiryChange} className={cn("mt-1", errors.expiry && "border-destructive")} />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className={cn("text-xs font-semibold text-espresso/80", errors.cvc && "text-destructive")}>{t.checkoutPage.summary.cvc}</Label>
                        <Input id="cvc" type="password" placeholder="***" inputMode="numeric" value={form.cvc} onChange={handleCvcChange} className={cn("mt-1", errors.cvc && "border-destructive")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-xs text-muted-foreground leading-relaxed">
                {t.checkoutPage.summary.privacyNotice}
              </p>

              <Button type="submit" size="lg" disabled={loading} className="mt-5 w-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-bold text-base h-14">
                {loading ? t.checkoutPage.summary.processing : t.checkoutPage.summary.payBtn}
              </Button>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, value, onChange, type = "text", placeholder, error }: { id: string; label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; error?: boolean; }) {
  return (
    <div>
      <Label htmlFor={id} className={cn("mb-2 block", error && "text-destructive")}>{label}</Label>
      <Input id={id} type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} aria-invalid={error} className={cn(error && "border-destructive focus-visible:ring-destructive")} />
    </div>
  );
}