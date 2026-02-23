"use client"

import type { AnimationType } from "@/lib/animations"
import { ANIMATION_PRESETS, COLOR_SWATCHES } from "@/lib/animations"
import { Slider } from "@/components/ui/slider"
import { Sparkles, Loader2 } from "lucide-react"

interface PromptPanelProps {
  prompt: string
  onPromptChange: (v: string) => void
  onGenerate: () => void
  isGenerating: boolean
  onPresetClick: (type: AnimationType) => void
  currentAnimation: AnimationType
  speed: number
  onSpeedChange: (v: number) => void
  size: number
  onSizeChange: (v: number) => void
  color: string
  onColorChange: (v: string) => void
}

export function PromptPanel({
  prompt,
  onPromptChange,
  onGenerate,
  isGenerating,
  onPresetClick,
  currentAnimation,
  speed,
  onSpeedChange,
  size,
  onSizeChange,
  color,
  onColorChange,
}: PromptPanelProps) {
  return (
    <aside className="flex w-80 flex-shrink-0 flex-col border-r border-border bg-card overflow-y-auto">
      <div className="flex flex-col gap-5 p-4">
        {/* Prompt */}
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Describe your animation
          </label>
          <textarea
            className="h-24 w-full resize-none rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder='e.g. "a glowing neon ring that pulses slowly"'
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
          />
          <button
            onClick={onGenerate}
            disabled={isGenerating}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate
              </>
            )}
          </button>
        </div>

        {/* Preset Chips */}
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Quick Presets
          </label>
          <div className="flex flex-wrap gap-1.5">
            {ANIMATION_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => onPresetClick(preset.type)}
                className={`rounded-md px-2.5 py-1 font-mono text-xs transition-colors ${
                  currentAnimation === preset.type
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-border"
                }`}
              >
                {preset.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Speed */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Speed
            </label>
            <span className="font-mono text-xs text-primary">
              {speed.toFixed(1)}x
            </span>
          </div>
          <Slider
            value={[speed]}
            onValueChange={(v) => onSpeedChange(v[0])}
            min={0.2}
            max={3}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Size */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Size
            </label>
            <span className="font-mono text-xs text-primary">
              {Math.round(size * 100)}%
            </span>
          </div>
          <Slider
            value={[size]}
            onValueChange={(v) => onSizeChange(v[0])}
            min={0.3}
            max={3}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Color */}
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Color
          </label>
          <div className="flex flex-wrap gap-2">
            {COLOR_SWATCHES.map((swatch) => (
              <button
                key={swatch}
                onClick={() => onColorChange(swatch)}
                className={`h-7 w-7 rounded-full border-2 transition-all ${
                  color === swatch
                    ? "scale-110 border-foreground"
                    : "border-transparent hover:scale-105"
                }`}
                style={{ backgroundColor: swatch }}
                aria-label={`Select color ${swatch}`}
              />
            ))}
          </div>
        </div>

        {/* Easing */}
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Easing
          </label>
          <div className="flex flex-wrap gap-1.5">
            {["ease", "linear", "spring", "bounce"].map((easing) => (
              <button
                key={easing}
                className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:bg-border"
              >
                {easing}
              </button>
            ))}
          </div>
        </div>

        {/* Loop */}
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Loop
          </label>
          <div className="flex flex-wrap gap-1.5">
            {["Loop", "Alternate", "Once"].map((loop) => (
              <button
                key={loop}
                className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:bg-border"
              >
                {loop}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
