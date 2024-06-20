import dynamic from "next/dynamic"

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
      <ExcalidrawWrapper />
    </main>
  )
}
