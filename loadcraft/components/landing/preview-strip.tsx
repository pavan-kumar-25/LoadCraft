"use client"

import Link from "next/link"
import { AnimatedLoader } from "@/components/animated-loader"
import { ANIMATION_PRESETS } from "@/lib/animations"

export function PreviewStrip() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
            Preview Animations
          </h2>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            Every animation runs live in your browser — pure CSS
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ANIMATION_PRESETS.slice(0, 6).map((preset) => (
            <Link
              key={preset.id}
              href={`/studio?preset=${preset.id}`}
              className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-secondary"
            >
              <div className="flex h-20 w-20 items-center justify-center">
                <AnimatedLoader type={preset.type} color="#b4ff39" size={40} />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-foreground">
                  {preset.name}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {preset.tags[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
