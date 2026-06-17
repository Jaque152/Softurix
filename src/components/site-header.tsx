// src/components/site-header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, Globe } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { CartDrawer } from "@/components/cart-drawer";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Mapeamos los enlaces dinámicamente con el diccionario
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/nosotros", label: t.nav.about },
    { href: "/servicios", label: t.nav.services },
    { href: "/contacto", label: t.nav.contact },
  ];

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-pine text-cream">
        <div className="container flex h-9 items-center justify-center overflow-hidden">
          <p className="eyebrow text-[0.6rem] text-cream/80 sm:text-[0.65rem]">
            {t.nav.announcement}
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-pine/10 bg-cream/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between gap-4">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-md text-pine transition-colors hover:bg-pine/10 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Logo />
          </div>

          {/* Center: nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium tracking-wide text-espresso/80 transition-colors hover:text-pine",
                  isActive(link.href) && "text-pine",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300",
                    isActive(link.href) ? "scale-x-100" : "group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right: cart, language toggle + cta */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-md px-2 py-2 text-sm font-semibold text-pine transition-colors hover:bg-pine/10 hover:text-gold-deep"
              aria-label="Cambiar idioma"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "es" ? "EN" : "ES"}</span>
            </button>

            <button
              type="button"
              aria-label="Abrir carrito"
              onClick={() => setOpen(true)}
              className="relative grid h-10 w-10 place-items-center rounded-md text-pine transition-colors hover:bg-pine/10"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[0.7rem] font-bold text-espresso">
                  {count}
                </span>
              )}
            </button>
            <Button asChild size="sm" className="hidden h-10 px-5 sm:inline-flex">
              <Link href="/contacto">{t.nav.plan}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          className="w-72 border-r border-pine/15 bg-cream p-0"
        >
          <SheetTitle className="sr-only">Menú</SheetTitle>
          <div className="border-b border-pine/10 px-6 py-5">
            <Logo />
          </div>
          <nav className="flex flex-col px-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 font-display text-lg text-espresso transition-colors hover:bg-pine/5 hover:text-pine",
                  isActive(link.href) && "text-pine",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-2">
            <Button asChild className="w-full" onClick={() => setMobileOpen(false)}>
              <Link href="/contacto">{t.nav.plan}</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <CartDrawer />
    </>
  );
}