"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FileCode2, FileJson, FileType, FileImage } from "lucide-react"

interface ExportModalProps {
  open: boolean
  onClose: () => void
}

const EXPORT_OPTIONS = [
  {
    id: "css",
    label: "CSS File",
    desc: ".css keyframe animation",
    icon: FileCode2,
  },
  {
    id: "react",
    label: "React Component",
    desc: ".tsx component file",
    icon: FileType,
  },
  {
    id: "svg",
    label: "SVG File",
    desc: ".svg animated graphic",
    icon: FileImage,
  },
  {
    id: "lottie",
    label: "Lottie JSON",
    desc: ".json Lottie animation",
    icon: FileJson,
  },
]

export function ExportModal({ open, onClose }: ExportModalProps) {
  const [selected, setSelected] = useState("css")

  const handleDownload = () => {
    toast.success(`Downloaded as ${selected.toUpperCase()} file`)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="border-border bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-foreground">
            Export Animation
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 py-4">
          {EXPORT_OPTIONS.map((opt) => {
            const Icon = opt.icon
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${
                  selected === opt.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary hover:border-muted-foreground"
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${
                    selected === opt.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                <span className="text-sm font-medium text-foreground">
                  {opt.label}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {opt.desc}
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg border border-border bg-secondary px-4 py-2 font-mono text-sm text-secondary-foreground transition-colors hover:bg-border"
          >
            Cancel
          </button>
          <button
            onClick={handleDownload}
            className="rounded-lg bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Download
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
