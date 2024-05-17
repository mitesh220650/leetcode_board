import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Footer from "@/components/ui/footer/footer"
const HomePage = () => {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-18">
        <Button>Hello World</Button>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  )
}

export default HomePage
