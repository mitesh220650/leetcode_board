import React from "react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { MainNav } from "@/components/ui/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center" aria-label="Main Navigation">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
