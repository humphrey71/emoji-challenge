import type { Metadata } from "next"
import localFont from "next/font/local"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Emoji Challenge - The Ultimate Social Media Game Trend | EmojiChallenge.org",
  description: "Discover the viral Emoji Challenge trend! Learn how to play this exciting social media game that combines creativity, acting, and fun across TikTok, Instagram, and more.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F7F9FC] text-[#2C3E50]`}
      >
        {/* Header */}
        <header className="fixed top-0 w-full bg-white shadow-sm z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-[#FF6B6B] font-bold text-xl">
              <Image src="/logo.png" alt="EmojiChallenge.org" width={40} height={40} />
              EmojiChallenge.org
            </a>
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
              <a
                href="/emoji-relation"
                className="text-[#FF6B6B] hover:text-[#ff8f8f] transition-colors"
              >
                Emoji Relation
              </a>
              <a
                href="/emoji-ketchen"
                className="text-[#FF6B6B] hover:text-[#ff8f8f] transition-colors"
              >
                Emoji Kitchen
              </a>
            </nav>
            <Button asChild variant="default">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 text-center">
          <div className="container mx-auto px-4">
            <p>&copy; 2024 EmojiChallenge.org - The Ultimate Destination for Emoji Challenge Enthusiasts</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
