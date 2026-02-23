import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-36">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#b4ff39 1px, transparent 1px), linear-gradient(90deg, #b4ff39 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-xs text-muted-foreground">
            AI-Powered Animation Generator
          </span>
        </div>

        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground lg:text-7xl">
          Craft loading animations{" "}
          <span className="text-primary">with words</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
          Describe your ideal loading animation in plain English. Get
          production-ready CSS, SVG, or React code instantly. No design
          skills required.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/studio"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Open Studio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-mono text-sm font-medium text-secondary-foreground transition-colors hover:bg-border"
          >
            Browse Gallery
          </Link>
        </div>

        {/* Floating code snippet */}
        <div className="mx-auto mt-16 max-w-lg rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive/40" />
            <div className="h-3 w-3 rounded-full bg-[#facc15]/40" />
            <div className="h-3 w-3 rounded-full bg-primary/40" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              prompt.txt
            </span>
          </div>
          <p className="text-left font-mono text-sm leading-relaxed text-muted-foreground">
            <span className="text-primary">{'>'}</span>{" "}
            <span className="text-foreground">
              {"\"a glowing neon ring that pulses slowly with a cyan glow\""}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
