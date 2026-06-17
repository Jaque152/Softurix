"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

export default function HomePage() {
  const { t, language } = useLanguage();
const featured = products[language].slice(3, 7);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="animate-rise">
            <span className="eyebrow inline-flex items-center gap-2 text-gold-deep">
              <span className="h-px w-8 bg-gold-deep" />
              {t.home.hero.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-pine sm:text-6xl lg:text-7xl">
              {t.home.hero.titleLine1}
              <br />
              {t.home.hero.titleLine2}
              <span className="italic text-gold-deep">{t.home.hero.titleHighlight}</span>
              <br />
              {t.home.hero.titleLine3}
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-espresso/75">
              {t.home.hero.desc}
            </p>
          </div>

          {/* Image collage */}
          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-10">
                <div className="overflow-hidden rounded-[1.5rem] border border-pine/10 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
                    alt="Equipo colaborando"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div className="rounded-[1.5rem] bg-pine p-6 text-cream">
                  <p className="font-display text-2xl leading-tight">
                    {t.home.hero.collage.box1Title}
                  </p>
                  <p className="mt-2 text-sm text-cream/70">
                    {t.home.hero.collage.box1Desc}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-pine/15 bg-sage/50 p-6">
                  <p className="eyebrow text-pine/60">{t.home.hero.collage.box2Eyebrow}</p>
                  <p className="mt-2 font-display text-2xl text-pine">
                    {t.home.hero.collage.box2Title}
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-pine/10 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop"
                    alt="Profesional"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="overflow-hidden border-y border-pine/15 bg-pine py-5">
        <div className="flex w-max animate-marquee items-center gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8" aria-hidden={i === 1}>
              {t.home.marquee.map((text) => (
                <span key={text} className="flex items-center gap-8">
                  <span className="font-display text-2xl italic text-cream/90 sm:text-3xl">
                    {text}
                  </span>
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== DESARROLLO EMPRESARIAL ===== */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-pine/10 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1100&auto=format&fit=crop"
                alt="Desarrollo empresarial"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-gold-deep">{t.home.business.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
              {t.home.business.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/75">
              {t.home.business.desc1}
            </p>
            <p className="mt-4 leading-relaxed text-espresso/70">
              {t.home.business.desc2}
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/nosotros">{t.nav.about}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMAS EJECUTIVOS ===== */}
      <section className="border-t border-pine/10 bg-cream-light py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold-deep">{t.home.programs.eyebrow}</span>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
                {t.home.programs.title}
              </h2>
            </div>
            <Button asChild>
              <Link href="/servicios">
                {t.home.buttons.viewPrograms} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.programs.items.map((p) => (
              <div key={p.n} className="group">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-semibold text-gold/70 transition-colors group-hover:text-gold">
                    {p.n}
                  </span>
                  <span className="h-px flex-1 bg-pine/15" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-pine">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-espresso/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMACIÓN INTEGRAL ===== */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-gold-deep">{t.home.integral.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
              {t.home.integral.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/75">
              {t.home.integral.desc}
            </p>
            <ul className="mt-8 space-y-4">
              {t.home.integral.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pine text-cream">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-espresso/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contacto">{t.home.buttons.planForYou}</Link>
              </Button>
              <Button asChild variant="outline" className="border-pine text-pine hover:bg-pine hover:text-cream">
                <Link href="/pagar-ruta">{t.home.buttons.payRoute}</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-pine/10 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1100&auto=format&fit=crop"
                alt="Formación integral"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED COURSES ===== */}
      <section className="border-t border-pine/10 bg-cream-light py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow text-gold-deep">{t.home.featured.eyebrow}</span>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
                {t.home.featured.title}
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pine transition-all hover:gap-3"
            >
              {t.home.featured.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-pine px-8 py-16 text-cream sm:px-14 lg:px-20 lg:py-20">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="eyebrow text-gold-light">{t.home.cta.eyebrow}</span>
                <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
                  {t.home.cta.title}
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">
                  {t.home.cta.desc}
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="gold">
                    <Link href="/servicios">{t.home.buttons.viewPrograms}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-cream/30 text-cream hover:bg-cream hover:text-pine"
                  >
                    <Link href="/contacto">{t.home.buttons.contactUs}</Link>
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-cream/15">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
                  alt="Liderazgo"
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}