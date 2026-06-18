"use client";

import { useLanguage } from "@/lib/language-context";

export default function PrivacidadPage() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container max-w-4xl rounded-2xl border border-pine/10 bg-card p-8 sm:p-12 shadow-sm">
        <div className="mb-10">
          <h1 className="font-display text-4xl font-bold text-pine sm:text-5xl">
            {t.legal.privacidad.title}
          </h1>
          <p className="mt-3 text-lg font-semibold text-gold-deep uppercase tracking-wider">
            {t.legal.privacidad.subtitle}
          </p>
        </div>

        <div className="space-y-10">
          {t.legal.privacidad.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="mb-4 font-display text-xl font-bold text-pine">
                {section.title}
              </h2>
              <p className="whitespace-pre-line text-base leading-relaxed text-espresso/80">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}