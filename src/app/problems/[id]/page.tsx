import dynamic from "next/dynamic"
const Excalidraw = dynamic(
  async () =>
    (await import("../../../components/ui/custom/excalidraw-wrapper")).default,
  {
    ssr: false,
  }
)
export default function App() {
  return (
    <main>
      <Excalidraw />
    </main>
  )
}
