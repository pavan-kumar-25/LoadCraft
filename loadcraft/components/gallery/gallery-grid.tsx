"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatedLoader } from "@/components/animated-loader"
import type { AnimationType } from "@/lib/animations"

const FILTER_CHIPS = [
  "All",
  "Spinner",
  "Dots",
  "Pulse",
  "Morph",
  "SVG",
  "Minimal",
  "Bold",
] as const

interface GalleryItem {
  id: string
  name: string
  description: string
  type: AnimationType
  tags: string[]
  color: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "spinner",
    name: "Neon Spinner",
    description: "A smooth rotating ring with a bright neon glow",
    type: "spinner",
    tags: ["CSS", "Minimal"],
    color: "#b4ff39",
  },
  {
    id: "dots",
    name: "Bounce Dots",
    description: "Three dots bounce in a rhythmic sequence",
    type: "dots",
    tags: ["CSS", "Minimal"],
    color: "#22d3ee",
  },
  {
    id: "pulse",
    name: "Pulse Blob",
    description: "A soft pulsing circle with subtle fade",
    type: "pulse",
    tags: ["CSS", "Bold"],
    color: "#a78bfa",
  },
  {
    id: "bars",
    name: "Wave Bars",
    description: "Equalizer-style bars that animate in a wave pattern",
    type: "bars",
    tags: ["CSS", "Minimal"],
    color: "#f97316",
  },
  {
    id: "morph",
    name: "Morph Blob",
    description: "An organic shape that continuously morphs",
    type: "morph",
    tags: ["SVG", "Bold"],
    color: "#ec4899",
  },
  {
    id: "orbit",
    name: "Orbit Ring",
    description: "A dot orbiting around a translucent circle",
    type: "orbit",
    tags: ["CSS", "Minimal"],
    color: "#facc15",
  },
  {
    id: "ripple",
    name: "Ripple Wave",
    description: "Expanding concentric rings that fade outward",
    type: "ripple",
    tags: ["CSS", "Bold"],
    color: "#b4ff39",
  },
  {
    id: "spinner-cyan",
    name: "Cyber Spinner",
    description: "A fast-spinning ring with cyan highlights",
    type: "spinner",
    tags: ["CSS", "Bold"],
    color: "#22d3ee",
  },
]

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("All")

  const filtered =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) =>
            item.tags.some((t) => t.toLowerCase() === filter.toLowerCase()) ||
            item.type.toLowerCase() === filter.toLowerCase()
        )

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTER_CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => setFilter(chip)}
            className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
              filter === chip
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <Link
            key={item.id}
            href={`/studio?preset=${item.type}`}
            className="group flex flex-col rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:bg-secondary"
          >
            <div className="flex h-40 items-center justify-center rounded-t-xl bg-secondary/50">
              <AnimatedLoader type={item.type} color={item.color} size={48} />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-sm font-medium text-foreground">
                {item.name}
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
