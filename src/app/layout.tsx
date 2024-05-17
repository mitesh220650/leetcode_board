import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provide"
import { SiteHeader } from "@/components/ui/header/site-header"
import { SiteFooter } from "@/components/ui/footer/site-footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LeetCode Board",
  description: "Online Whiteboarding for LeetCode Problems",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader /> {children} <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
