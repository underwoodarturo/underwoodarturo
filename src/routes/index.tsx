import { createFileRoute } from "@tanstack/react-router";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const Route = createFileRoute("/")({
  component: BrandPage,
});

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group fixed top-12 right-12 z-20 flex h-9 w-9 items-center justify-center border border-foreground/15 text-muted-foreground transition-all duration-500 ease-out hover:border-foreground/40 hover:text-foreground hover:tracking-widest"
    >
      <span className="transition-transform duration-700 ease-out group-hover:rotate-180 group-active:scale-90">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
    </button>
  );
}
function BrandPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground selection:bg-accent/30">
      {/* Concrete noise grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cast concrete lintel border */}
      <div className="pointer-events-none absolute inset-6 ring-1 ring-foreground/[0.08]" />

      {/* Top-left LinkedIn link */}
      <a
        href="https://linkedin.com/in/arturo-underwood"
        target="_blank"
        rel="noopener noreferrer"
        className="eyebrow group fixed top-12 left-12 z-20 text-muted-foreground transition-all duration-500 ease-out hover:tracking-[0.3em] hover:text-foreground"
      >
        <span className="relative z-10 inline-block transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          LinkedIn
        </span>
        <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-foreground transition-all duration-500 ease-out group-hover:w-full" />
      </a>

      {/* Top-right theme toggle */}
      <ThemeToggle />

      {/* Centered wordmark */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="group text-center">
          <h1 className="wordmark animate-reveal text-[clamp(4rem,17vw,14rem)] select-none group-hover:-translate-y-1.5 group-hover:tracking-[0.03em] group-hover:[text-shadow:0_0_40px_color-mix(in_oklch,var(--color-foreground)_35%,transparent)]">
            Underwood
          </h1>
        </div>
      </main>

      {/* Subtle bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-foreground/[0.03] to-transparent" />
    </div>
  );
}
