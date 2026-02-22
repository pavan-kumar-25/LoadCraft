import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { PreviewStrip } from "@/components/landing/preview-strip"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PreviewStrip />
      </main>
      <Footer />
    </div>
  )
}
