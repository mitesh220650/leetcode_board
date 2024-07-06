import dynamic from "next/dynamic"
import { ThemeProvider } from "next-themes"

const ExcalidrawWrapper = dynamic(
  async () =>
    (await import("../../../components/ui/custom/excalidraw-wrapper")).default,
  {
    ssr: false,
  }
)

export default function Problems() {
  const identifier = "hello"
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
