"use client";

import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

export default function ServiciosPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.servicesPage.hero.eyebrow}
        title={t.servicesPage.hero.title}
        crumb={t.servicesPage.hero.crumb}
        description={t.servicesPage.hero.desc}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-pine">{products[language].length}</span>{" "}
              {t.servicesPage.countLabel}
            </p>
            <p className="hidden text-sm text-muted-foreground sm:block">
              {t.servicesPage.taxNote}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products[language].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}