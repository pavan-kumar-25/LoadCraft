"use client"

import type { AnimationType } from "@/lib/animations"
import { AnimatedLoader } from "@/components/animated-loader"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CodePanelProps {
  code: string
  codeTab: "css" | "react" | "svg"
  onCodeTabChange: (v: "css" | "react" | "svg") => void
  onCopy: () => void
  history: { type: AnimationType; name: string; time: string }[]
  color: string
}

export function CodePanel({
  code,
  codeTab,
  onCodeTabChange,
  onCopy,
  history,
  color,
}: CodePanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <aside className="flex w-80 flex-shrink-0 flex-col border-l border-border bg-card overflow-hidden">
      {/* Tab switcher */}
      <div className="flex items-center gap-1 border-b border-border px-4 py-2">
        {(["css", "react", "svg"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => onCodeTabChange(tab)}
            className={`rounded-md px-2.5 py-1 font-mono text-xs uppercase transition-colors ${
              codeTab === tab
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Code block */}
      <div className="relative flex-1 overflow-auto p-4">
        <div className="rounded-lg border border-border bg-secondary p-3">
          <pre className="overflow-x-auto text-xs leading-relaxed">
            <code className="font-mono text-foreground">{code}</code>
          </pre>
        </div>

        <button
          onClick={handleCopy}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-xs text-secondary-foreground transition-colors hover:bg-border"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-primary" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy Code
            </>
          )}
        </button>
      </div>

      {/* History */}
      <div className="border-t border-border px-4 py-3">
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Recent
        </h3>
        <div className="flex flex-col gap-2">
          {history.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg bg-secondary p-2"
            >
              <div className="flex h-8 w-8 items-center justify-center">
                <AnimatedLoader type={item.type} color={color} size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-medium text-foreground">
                  {item.name}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
