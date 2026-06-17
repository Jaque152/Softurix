"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/lib/language-context";

export default function ContactoPage() {
  const { t } = useLanguage();

  const info = [
    {
      icon: Mail,
      label: t.contactPage.info.email,
      value: "info@softurix.com",
      href: "mailto:info@softurix.com",
    },
    {
      icon: Phone,
      label: t.contactPage.info.phone,
      value: "+52 1 55 2648 5219",
      href: "tel:+5215526485219",
    },
    {
      icon: MapPin,
      label: t.contactPage.info.address,
      value: "Torcuato Tasso No. 245 Piso 4, Despacho 401, Col. Polanco V Sección, Miguel Hidalgo, C.P. 11560, CDMX",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.contactPage.hero.eyebrow}
        title={t.contactPage.hero.title}
        crumb={t.contactPage.hero.crumb}
        description={t.contactPage.hero.desc}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow text-gold-deep">{t.contactPage.formEyebrow}</span>
            <h2 className="mb-8 mt-3 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">
              {t.contactPage.formTitle}
            </h2>
            <ContactForm />
          </div>

          <div className="lg:pt-20">
            <div className="space-y-4">
              {info.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-pine/10 bg-card p-6 transition-colors hover:border-pine/25">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-pine text-cream">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="eyebrow text-gold-deep">{item.label}</p>
                      <p className="mt-1.5 leading-relaxed text-espresso/80">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-pine/10">
              <iframe
                title="Mapa Softurix"
                src="https://www.google.com/maps?q=Torcuato+Tasso+245,+Polanco,+CDMX&output=embed"
                className="h-56 w-full grayscale-[0.2]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}