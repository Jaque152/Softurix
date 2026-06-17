"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { formatMXN } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

export default function CarritoPage() {
  const { items, updateQuantity, removeItem, subtotal, iva, total, count } = useCart();
  const { t } = useLanguage();

  if (items.length === 0) {
    return (
      <section className="bg-cream py-24 lg:py-32">
        <div className="container flex flex-col items-center text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sage/60">
            <ShoppingBag className="h-9 w-9 text-pine" />
          </span>
          <h1 className="mt-8 font-display text-4xl font-medium text-pine">
            {t.cartPage.emptyState.title}
          </h1>
          <p className="mt-3 max-w-md text-espresso/70">
            {t.cartPage.emptyState.desc}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/servicios">
              {t.cartPage.emptyState.btn} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow text-gold-deep">{t.cartPage.eyebrow}</span>
            <h1 className="mt-3 font-display text-4xl font-medium text-pine sm:text-5xl">
              {t.cartPage.title}
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">{count} {t.cartPage.itemsLabel}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-pine/10 bg-card p-4 sm:flex-row sm:items-center sm:p-5"
              >
                <Link
                  href={`/producto/${item.slug}`}
                  className="relative h-28 w-full overflow-hidden rounded-xl bg-muted sm:h-24 sm:w-28 sm:shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <Link
                      href={`/producto/${item.slug}`}
                      className="font-display text-lg font-medium leading-snug text-espresso hover:text-pine"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-1 text-sm text-gold-deep font-semibold">
                      {formatMXN(item.price)}{" "}
                      <span className="text-xs font-normal text-muted-foreground">
                        {t.cartPage.perPerson}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="flex items-center rounded-lg border border-pine/20">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="grid h-10 w-10 place-items-center text-pine transition-colors hover:bg-pine/10"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="grid h-10 w-10 place-items-center text-pine transition-colors hover:bg-pine/10"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-semibold text-pine">
                        {formatMXN(item.price * item.quantity)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Button asChild variant="ghost" className="mt-2">
              <Link href="/servicios">
                <ArrowLeft className="h-4 w-4" /> {t.cartPage.continueBtn}
              </Link>
            </Button>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-pine/10 bg-card p-6 sm:p-7">
              <h2 className="font-display text-2xl text-pine">{t.cartPage.summary}</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t.cartPage.subtotal}</dt>
                  <dd className="font-medium text-espresso">{formatMXN(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t.cartPage.tax}</dt>
                  <dd className="font-medium text-espresso">{formatMXN(iva)}</dd>
                </div>
              </dl>
              <Separator className="my-5 bg-pine/10" />
              <div className="flex items-baseline justify-between">
                <span className="font-display text-lg text-pine">{t.cartPage.total}</span>
                <span className="font-display text-2xl font-semibold text-pine">
                  {formatMXN(total)}
                </span>
              </div>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/checkout">
                  {t.cartPage.checkoutBtn} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                {t.cartPage.secure}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}