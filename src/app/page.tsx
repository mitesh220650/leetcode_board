import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex-grow flex flex-col justify-center overflow-hidden py-6 sm:py-12 relative">
        <div className="flex items-center justify-center">
          <div className="flex flex-row items space-x-4 ">
            <Button className="px-4 py-2 bg-amber-800 text-white font-semibold rounded-md hover:bg-green-500 transition duration-300 ease-in-out">Hello World</Button>
            <ModeToggle />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
