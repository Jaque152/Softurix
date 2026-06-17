"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { ChevronRight, Clock, Monitor, Users, BookOpen } from "lucide-react";
import { AddToCart } from "@/components/add-to-cart";
import { ProductCard } from "@/components/product-card";
import { products, getProduct, formatMXN } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

// Desempaquetamos la promesa `params` usando el hook `use` de React 19 / App Router
export default function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t, language } = useLanguage();
  const product = getProduct(slug, language);

  if (!product) notFound();

  const detail = [
    { icon: Users, label: t.productPage.detail.ideal, value: product.idealPara },
    { icon: BookOpen, label: t.productPage.detail.includes, value: product.incluye },
    { icon: Monitor, label: t.productPage.detail.modality, value: product.modalidad },
    { icon: Clock, label: t.productPage.detail.duration, value: product.duracion },
  ];

  const related = products[language]
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 3);
  const fallback = products[language]
    .filter((p) => p.id !== product?.id)
    .slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <>
      <section className="bg-cream pb-20 pt-8 lg:pb-28">
        <div className="container">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-pine">
              {t.nav.home}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/servicios" className="transition-colors hover:text-pine">
              {t.productPage.breadcrumb}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="line-clamp-1 text-pine">{product.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative overflow-hidden rounded-[2rem] border border-pine/10 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-square w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pine backdrop-blur">
                  {product.category}
                </span>
              </div>
            </div>

            <div>
              <h1 className="font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
                {product.title}
              </h1>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-pine">
                  {formatMXN(product.price)}
                </span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t.productPage.taxNote}
                </span>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                {product.resumen}
              </p>

              <dl className="mt-8 space-y-5 border-t border-pine/10 pt-8">
                {detail.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div key={d.label} className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sage/60 text-pine">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <dt className="eyebrow text-gold-deep">{d.label}</dt>
                        <dd className="mt-1 leading-relaxed text-espresso/80">
                          {d.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>

              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-pine/10 bg-cream-light py-20 lg:py-24">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl font-medium text-pine sm:text-4xl">
              {t.productPage.related.title}
            </h2>
            <Link
              href="/servicios"
              className="hidden text-sm font-semibold text-pine hover:underline sm:block"
            >
              {t.productPage.related.viewAll}
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}