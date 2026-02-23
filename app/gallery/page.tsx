import { Navbar } from "@/components/navbar"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Animation Gallery
            </h1>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Browse community-created loading animations. Click any card to
              open it in the Studio.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </main>
    </div>
  )
}
