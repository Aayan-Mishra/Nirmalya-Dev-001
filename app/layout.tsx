import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BackgroundPattern, DecorativeCorners, FloatingElements } from "@/components/decorative-elements"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Nirmalya Incorporated - Lord Jagannath Temple Australia",
  description:
    "Nirmalya Incorporated is dedicated to establishing a temple for Lord Jagannath in Australia, fostering community and spiritual growth.",
    generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-shell-white min-h-screen flex flex-col`}>
        <BackgroundPattern />
        <DecorativeCorners />
        <FloatingElements count={15} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'