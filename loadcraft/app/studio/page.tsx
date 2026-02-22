import { Suspense } from "react"
import { StudioClient } from "@/components/studio/studio-client"
import { Navbar } from "@/components/navbar"
import { Loader2 } from "lucide-react"

export default function StudioPage() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Navbar />
      <Suspense
        fallback={
          <div className="flex flex-1 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
      >
        <StudioClient />
      </Suspense>
    </div>
  )
}
