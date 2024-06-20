"use client"
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw"

// import "@excalidraw/excalidraw/index.css"

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div style={{ height: "h-screen", width: "w-screen" }}>
      <Excalidraw />
    </div>
  )
}
export default ExcalidrawWrapper
