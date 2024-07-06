"use client"
import dynamic from "next/dynamic"
import { ThemeProvider } from "next-themes"
import { useParams } from "next/navigation"

const ExcalidrawWrapper = dynamic(
  async () =>
    (await import("../../../components/ui/custom/excalidraw-wrapper")).default,
  {
    ssr: false,
  }
)

export default function Problems() {
  const params = useParams<{id:string}>()
  console.log(params.id)
  const identifier = params.id
  return (
    <main>
      <div>
        <ThemeProvider>
      <ExcalidrawWrapper identifier = {identifier}/>
        </ThemeProvider>
      </div>
    </main>
  )
}
