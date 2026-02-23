"use client"

import { useState, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import type { AnimationType } from "@/lib/animations"
import {
  ANIMATION_PRESETS,
  COLOR_SWATCHES,
  getCodeForAnimation,
} from "@/lib/animations"
import { PromptPanel } from "./prompt-panel"
import { CanvasPanel } from "./canvas-panel"
import { CodePanel } from "./code-panel"
import { ExportModal } from "./export-modal"

export function StudioClient() {
  const searchParams = useSearchParams()
  const presetParam = searchParams.get("preset") as AnimationType | null

  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>(
    presetParam && ANIMATION_PRESETS.find((p) => p.id === presetParam)
      ? presetParam
      : "spinner"
  )
  const [color, setColor] = useState(COLOR_SWATCHES[0])
  const [speed, setSpeed] = useState(1)
  const [size, setSize] = useState(1)
  const [bgMode, setBgMode] = useState<"Dark" | "White" | "Gray" | "Custom">(
    "Dark"
  )
  const [codeTab, setCodeTab] = useState<"css" | "react" | "svg">("css")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [history, setHistory] = useState<
    { type: AnimationType; name: string; time: string }[]
  >([
    { type: "spinner", name: "Neon Spinner", time: "2 min ago" },
    { type: "dots", name: "Bounce Dots", time: "5 min ago" },
    { type: "pulse", name: "Pulse Blob", time: "12 min ago" },
  ])

  useEffect(() => {
    if (presetParam && ANIMATION_PRESETS.find((p) => p.id === presetParam)) {
      setCurrentAnimation(presetParam)
    }
  }, [presetParam])

  const handleGenerate = useCallback(() => {
    if (!prompt.trim()) {
      toast.error("Enter a description first")
      return
    }
    setIsGenerating(true)
    setTimeout(() => {
      const types: AnimationType[] = [
        "spinner",
        "dots",
        "pulse",
        "bars",
        "morph",
        "orbit",
        "ripple",
      ]
      const randomType = types[Math.floor(Math.random() * types.length)]
      const preset = ANIMATION_PRESETS.find((p) => p.type === randomType)!
      setCurrentAnimation(randomType)
      setHistory((prev) => [
        { type: randomType, name: preset.name, time: "Just now" },
        ...prev.slice(0, 2),
      ])
      setIsGenerating(false)
      toast.success(`Generated: ${preset.name}`)
    }, 2000)
  }, [prompt])

  const handlePresetClick = useCallback((type: AnimationType) => {
    setCurrentAnimation(type)
    const preset = ANIMATION_PRESETS.find((p) => p.type === type)!
    setHistory((prev) => [
      { type, name: preset.name, time: "Just now" },
      ...prev.slice(0, 2),
    ])
  }, [])

  const handleCopyCode = useCallback(() => {
    const code = getCodeForAnimation(currentAnimation, codeTab, color)
    navigator.clipboard.writeText(code)
    toast.success("Copied to clipboard!")
  }, [currentAnimation, codeTab, color])

  const handleSaveToGallery = useCallback(() => {
    toast.success("Saved to gallery!")
  }, [])

  const code = getCodeForAnimation(currentAnimation, codeTab, color)

  return (
    <>
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <PromptPanel
          prompt={prompt}
          onPromptChange={setPrompt}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          onPresetClick={handlePresetClick}
          currentAnimation={currentAnimation}
          speed={speed}
          onSpeedChange={setSpeed}
          size={size}
          onSizeChange={setSize}
          color={color}
          onColorChange={setColor}
        />

        {/* Center Panel */}
        <CanvasPanel
          currentAnimation={currentAnimation}
          color={color}
          size={size}
          speed={speed}
          bgMode={bgMode}
          onBgModeChange={setBgMode}
          isGenerating={isGenerating}
          isPaused={isPaused}
          onTogglePause={() => setIsPaused(!isPaused)}
          onRegenerate={handleGenerate}
          onSaveToGallery={handleSaveToGallery}
          onExport={() => setShowExport(true)}
        />

        {/* Right Panel */}
        <CodePanel
          code={code}
          codeTab={codeTab}
          onCodeTabChange={setCodeTab}
          onCopy={handleCopyCode}
          history={history}
          color={color}
        />
      </div>

      <ExportModal open={showExport} onClose={() => setShowExport(false)} />
    </>
  )
}
