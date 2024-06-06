"use client"
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw"

import "@excalidraw/excalidraw/index.css"

const ExcalidrawWrapper: React.FC = () => {
  console.info()
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Excalidraw />
    </div>
  )
}
export default ExcalidrawWrapper
