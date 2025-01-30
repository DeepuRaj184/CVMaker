import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CVProvider } from "./context/cv-context"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CV Builder",
  description: "Create your professional CV in minutes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CVProvider>{children}</CVProvider>
      </body>
    </html>
  )
}

