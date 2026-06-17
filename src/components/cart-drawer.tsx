"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { formatMXN } from "@/lib/products";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setOpen,
    updateQuantity,
    removeItem,
    subtotal,
    count,
  } = useCart();
  const { t } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 border-l border-pine/15 bg-cream p-0 sm:max-w-md">
        <SheetHeader className="border-b border-pine/10 px-6 py-5 text-left">
          <SheetTitle className="flex items-center gap-2 font-display text-xl text-pine">
            <ShoppingBag className="h-5 w-5" />
            {t.cart.title}
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              ({count})
            </span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/60">
              <ShoppingBag className="h-7 w-7 text-pine" />
            </div>
            <p className="text-muted-foreground">
              {t.cart.empty}
            </p>
            <Button asChild variant="outline" onClick={() => setOpen(false)}>
              <Link href="/servicios">{t.cart.explore}</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-pine/10">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 py-4">
                    <Link
                      href={`/producto/${item.slug}`}
                      onClick={() => setOpen(false)}
                      className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <Link
                        href={`/producto/${item.slug}`}
                        onClick={() => setOpen(false)}
                        className="line-clamp-2 text-sm font-semibold leading-snug text-espresso hover:text-pine"
                      >
                        {item.title}
                      </Link>
                      <span className="mt-0.5 text-sm text-gold-deep font-semibold">
                        {formatMXN(item.price)}
                      </span>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-md border border-pine/20">
                          <button
                            type="button"
                            aria-label="Disminuir"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="grid h-8 w-8 place-items-center text-pine transition-colors hover:bg-pine/10"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Aumentar"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="grid h-8 w-8 place-items-center text-pine transition-colors hover:bg-pine/10"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label="Eliminar"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <SheetFooter className="flex-col gap-3 border-t border-pine/10 bg-cream-light px-6 py-5 sm:flex-col sm:space-x-0">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{t.cart.subtotal}</span>
                <span className="font-display text-lg font-semibold text-pine">
                  {formatMXN(subtotal)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {t.cart.taxes}
              </p>
              <Separator className="bg-pine/10" />
              <div className="grid grid-cols-1 gap-2">
                <Button asChild size="lg" onClick={() => setOpen(false)}>
                  <Link href="/checkout">{t.cart.checkout}</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/carrito">{t.cart.viewCart}</Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}