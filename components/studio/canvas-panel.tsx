"use client"

import type { AnimationType } from "@/lib/animations"
import type { BG_OPTIONS } from "@/lib/animations"
import { AnimatedLoader } from "@/components/animated-loader"
import {
  RefreshCw,
  Pause,
  Play,
  Bookmark,
  Download,
  Loader2,
} from "lucide-react"

interface CanvasPanelProps {
  currentAnimation: AnimationType
  color: string
  size: number
  speed: number
  bgMode: "Dark" | "White" | "Gray" | "Custom"
  onBgModeChange: (v: "Dark" | "White" | "Gray" | "Custom") => void
  isGenerating: boolean
  isPaused: boolean
  onTogglePause: () => void
  onRegenerate: () => void
  onSaveToGallery: () => void
  onExport: () => void
}

const BG_COLORS: Record<string, string> = {
  Dark: "#0a0a0a",
  White: "#ffffff",
  Gray: "#374151",
  Custom: "#1e1b4b",
}

export function CanvasPanel({
  currentAnimation,
  color,
  size,
  speed,
  bgMode,
  onBgModeChange,
  isGenerating,
  isPaused,
  onTogglePause,
  onRegenerate,
  onSaveToGallery,
  onExport,
}: CanvasPanelProps) {
  return (
    <div className="flex flex-1 flex-col">
      {/* Background switcher */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="font-mono text-xs text-muted-foreground">BG:</span>
        {(["Dark", "White", "Gray", "Custom"] as const).map((bg) => (
          <button
            key={bg}
            onClick={() => onBgModeChange(bg)}
            className={`rounded-md px-2 py-0.5 font-mono text-xs transition-colors ${
              bgMode === bg
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            {bg}
          </button>
        ))}
      </div>

      {/* Canvas */}
      <div
        className="relative flex flex-1 items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: BG_COLORS[bgMode] }}
      >
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #737373 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {isGenerating ? (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              Generating...
            </span>
          </div>
        ) : (
          <AnimatedLoader
            type={currentAnimation}
            color={color}
            size={48 * size}
            speed={speed}
            paused={isPaused}
          />
        )}
      </div>

      {/* Bottom toolbar */}
      <div className="flex items-center justify-center gap-2 border-t border-border px-4 py-3">
        <button
          onClick={onRegenerate}
          className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 font-mono text-xs text-secondary-foreground transition-colors hover:bg-border"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Regenerate
        </button>
        <button
          onClick={onTogglePause}
          className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 font-mono text-xs text-secondary-foreground transition-colors hover:bg-border"
        >
          {isPaused ? (
            <>
              <Play className="h-3.5 w-3.5" />
              Play
            </>
          ) : (
            <>
              <Pause className="h-3.5 w-3.5" />
              Pause
            </>
          )}
        </button>
        <button
          onClick={onSaveToGallery}
          className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 font-mono text-xs text-secondary-foreground transition-colors hover:bg-border"
        >
          <Bookmark className="h-3.5 w-3.5" />
          Save
        </button>
        <button
          onClick={onExport}
          className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 font-mono text-xs text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download className="h-3.5 w-3.5" />
          Export
        </button>
      </div>
    </div>
  )
}
