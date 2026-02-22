import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
            <Zap className="h-3 w-3 text-primary-foreground" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            LoadCraft
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-muted-foreground">
            Built with CSS Keyframes
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            github
          </span>
        </div>
      </div>
    </footer>
  )
}
