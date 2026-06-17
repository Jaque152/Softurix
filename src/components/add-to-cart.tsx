"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { type Product, formatMXN, IVA_RATE } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";
import { toast } from "sonner";

export function AddToCart({ product }: { product: Product }) {
  const { addItem, setOpen } = useCart();
  const [qty, setQty] = useState(1);
  const { t } = useLanguage();

  function handleAdd() {
    addItem(product, qty);
    toast.success(t.product.added, {
      description: `${qty} × ${product.title}`,
      action: { label: t.cart.viewCart, onClick: () => setOpen(true) },
    });
  }

  const totalWithIva = product.price * qty * (1 + IVA_RATE);

  return (
    <div className="mt-8 rounded-2xl border border-pine/10 bg-cream-light p-6">
      <p className="eyebrow text-gold-deep">{t.cart.selectQty}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center rounded-lg border border-pine/20 bg-card">
          <button
            type="button"
            aria-label="Disminuir"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="grid h-12 w-12 place-items-center text-pine transition-colors hover:bg-pine/10"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center font-display text-lg font-semibold text-pine">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Aumentar"
            onClick={() => setQty((q) => q + 1)}
            className="grid h-12 w-12 place-items-center text-pine transition-colors hover:bg-pine/10"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <Button size="lg" onClick={handleAdd} className="flex-1 sm:flex-none">
          <ShoppingBag className="h-4 w-4" />
          {t.cart.addToCart}
        </Button>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {t.cart.estimatedTotal}{" "}
        <span className="font-semibold text-pine">
          {formatMXN(totalWithIva)}
        </span>
      </p>
    </div>
  );
}