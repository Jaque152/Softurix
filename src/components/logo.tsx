import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill="#13402F" />
      {/* ascending growth marks */}
      <path
        d="M11 27V21"
        stroke="#C8922A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 27V15"
        stroke="#F6F1E7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M29 27V19"
        stroke="#C8922A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="11" r="2.4" fill="#F6F1E7" />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Softurix — Inicio"
    >
      <LogoMark />
      <span
        className={cn(
          "font-display text-2xl font-semibold tracking-tight",
          tone === "light" ? "text-cream" : "text-pine",
        )}
      >
        Softurix
      </span>
    </Link>
  );
}
