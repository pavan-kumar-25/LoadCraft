import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "LoadCraft - AI-Powered Loading Animations",
  description:
    "Create stunning custom loading animations with AI. Describe your vision in plain English and get production-ready CSS, SVG, or React code instantly.",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              border: "1px solid #262626",
              color: "#e5e5e5",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
