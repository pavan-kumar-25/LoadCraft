"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Zap } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            LoadCraft
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/gallery"
            className={cn(
              "rounded-md px-3 py-1.5 font-mono text-sm transition-colors",
              pathname === "/gallery"
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Gallery
          </Link>
          <Link
            href="/studio"
            className={cn(
              "rounded-md px-3 py-1.5 font-mono text-sm transition-colors",
              pathname === "/studio"
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Studio
          </Link>
          <Link
            href="/studio"
            className="ml-2 rounded-lg bg-primary px-4 py-1.5 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Building
          </Link>
        </div>
      </nav>
    </header>
  )
}
