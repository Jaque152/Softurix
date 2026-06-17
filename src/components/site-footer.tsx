"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  const legalLinks = [
    { href: "/contacto", label: t.footer.legal.privacy },
    { href: "/contacto", label: t.footer.legal.terms },
    { href: "/contacto", label: t.footer.legal.refund },
  ];

  return (
    <footer className="bg-pine text-cream">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Brand + CTA */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="font-display text-2xl font-semibold text-cream">
                Softurix
              </span>
            </div>
            <h2 className="mt-8 font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
              {t.footer.tagline}
            </h2>
            <p className="mt-5 max-w-md text-cream/70 leading-relaxed">
              {t.footer.desc}
            </p>
            <Button asChild variant="gold" size="lg" className="mt-8">
              <Link href="/contacto">{t.footer.contactBtn}</Link>
            </Button>
          </div>

          {/* Contact details */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1 lg:justify-items-end lg:text-right">
            <div className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/10">
                <Phone className="h-4 w-4 text-gold-light" />
              </span>
              <div>
                <p className="eyebrow text-cream/50">{t.footer.phone}</p>
                <a
                  href="tel:+5215526485219"
                  className="mt-1 block text-cream/90 transition-colors hover:text-gold-light"
                >
                  +52 1 55 2648 5219
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/10">
                <Mail className="h-4 w-4 text-gold-light" />
              </span>
              <div>
                <p className="eyebrow text-cream/50">{t.footer.email}</p>
                <a
                  href="mailto:info@softurix.com"
                  className="mt-1 block text-cream/90 transition-colors hover:text-gold-light"
                >
                  info@softurix.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1 lg:flex-row-reverse lg:text-right">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/10">
                <MapPin className="h-4 w-4 text-gold-light" />
              </span>
              <div>
                <p className="eyebrow text-cream/50">{t.footer.address}</p>
                <p className="mt-1 max-w-xs text-cream/90 lg:ml-auto">
                  {t.footer.addressText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-cream/15 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-cream/60">
            {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1 text-sm text-cream/70 transition-colors hover:text-gold-light"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-cream px-2.5 py-1 text-xs font-bold tracking-wider text-pine">
              VISA
            </span>
            <span className="rounded bg-cream px-2.5 py-1 text-xs font-bold tracking-wider text-pine">
              MC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}