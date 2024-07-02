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
  return (
    <main>
      <div>
        <ThemeProvider>
      <ExcalidrawWrapper>
      </ExcalidrawWrapper>
        </ThemeProvider>
      </div>
    </main>
  )
}
