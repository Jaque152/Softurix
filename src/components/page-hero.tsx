import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumb?: string;
}) {
  return (
    <section className="bg-cream pt-10 lg:pt-14">
      <div className="container">
        <div className="relative grain overflow-hidden rounded-[2rem] bg-pine px-8 py-16 text-cream sm:px-14 lg:px-20 lg:py-24">
          <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative z-10">
            <nav className="flex items-center gap-1.5 text-sm text-cream/60">
              <Link href="/" className="transition-colors hover:text-cream">
                Principal
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-cream/90">{crumb ?? title}</span>
            </nav>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <div>
                {eyebrow && (
                  <span className="eyebrow text-gold-light">{eyebrow}</span>
                )}
                <h1 className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  {title}
                </h1>
              </div>
              {description && (
                <p className="text-lg leading-relaxed text-cream/75">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
