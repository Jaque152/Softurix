"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { type Product, formatMXN } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { addItem, setOpen } = useCart();
  const { t } = useLanguage();

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem(product, 1);
    toast.success(t.product.added, {
      description: product.title,
      action: {
        label: t.product.view,
        onClick: () => setOpen(true),
      },
    });
  }

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group hover-lift flex flex-col overflow-hidden rounded-xl border border-pine/10 bg-card shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors hover:border-pine/25"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-pine backdrop-blur">
          {product.category}
        </span>
        <button
          type="button"
          aria-label={`Añadir ${product.title} al carrito`}
          onClick={handleAdd}
          className="absolute bottom-3 right-3 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-pine text-cream opacity-0 shadow-lg transition-all duration-300 hover:bg-gold hover:text-espresso group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-medium leading-snug text-espresso transition-colors group-hover:text-pine">
          {product.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.resumen}
        </p>
        <div className="mt-5 flex items-end justify-between border-t border-pine/10 pt-4">
          <div>
            <span className="font-display text-xl font-semibold text-pine">
              {formatMXN(product.price)}
            </span>
            <span className="ml-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
              {t.product.currency}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-deep transition-all group-hover:gap-2">
            {t.product.viewMore}
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}