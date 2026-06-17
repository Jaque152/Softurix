"use client";

import Link from "next/link";
import { Target, Eye, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export default function NosotrosPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.aboutPage.hero.eyebrow}
        title={t.aboutPage.hero.title}
        crumb={t.aboutPage.hero.crumb}
        description={t.aboutPage.hero.desc}
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-pine/10 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1100&auto=format&fit=crop"
                alt="Campus Softurix"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -right-5 bottom-8 hidden rounded-2xl bg-cream-light p-5 shadow-lg ring-1 ring-pine/10 sm:block">
              <p className="eyebrow text-gold-deep">{t.aboutPage.welcome.badgeEyebrow}</p>
              <p className="mt-1 font-display text-lg text-pine">
                {t.aboutPage.welcome.badgeTitle}
              </p>
            </div>
          </div>
          <div>
            <span className="eyebrow text-gold-deep">{t.aboutPage.welcome.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
              {t.aboutPage.welcome.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/75">
              {t.aboutPage.welcome.desc1}
            </p>
            <p className="mt-4 leading-relaxed text-espresso/70">
              {t.aboutPage.welcome.desc2}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-pine/10 bg-cream-light py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-deep">{t.aboutPage.compass.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
              {t.aboutPage.compass.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-pine/10 bg-card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-pine text-cream">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-pine">{t.aboutPage.compass.mission}</h3>
              <p className="mt-3 leading-relaxed text-espresso/70">
                {t.aboutPage.compass.missionDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-pine/10 bg-card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-espresso">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-pine">{t.aboutPage.compass.vision}</h3>
              <p className="mt-3 leading-relaxed text-espresso/70">
                {t.aboutPage.compass.visionDesc}
              </p>
            </div>

            <div className="rounded-2xl bg-pine p-8 text-cream">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cream/10 text-gold-light">
                <Sparkles className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-cream">{t.aboutPage.compass.values}</h3>
              <ul className="mt-4 space-y-3">
                {t.aboutPage.compass.valuesList.map((v, i) => (
                  <li key={v} className="flex gap-3 text-cream/80">
                    <span className="font-display text-sm font-semibold text-gold-light">
                      0{i + 1}
                    </span>
                    <span className="text-sm leading-snug">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="container grid items-center gap-12 rounded-[2.5rem] border border-pine/10 bg-card p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div className="overflow-hidden rounded-[1.75rem] border border-pine/10">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1000&auto=format&fit=crop"
              alt="Nuevos programas"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow text-gold-deep">{t.aboutPage.cta.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
              {t.aboutPage.cta.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/75">
              {t.aboutPage.cta.desc}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/servicios">{t.aboutPage.cta.btn}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}