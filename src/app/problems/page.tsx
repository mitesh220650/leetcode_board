import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex-grow flex flex-col justify-center overflow-hidden py-6 sm:py-12 relative">
        <div className="flex items-center justify-center">
          <div className="flex flex-row items space-x-4">
            <Button>This is a new page.</Button>
            <ModeToggle />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
