import React from "react"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex-grow relative flex flex-col justify-center overflow-hidden py-6 sm:py-18">
        <Button>Hello World </Button>
      </main>
    </div>
  )
}

export default HomePage
