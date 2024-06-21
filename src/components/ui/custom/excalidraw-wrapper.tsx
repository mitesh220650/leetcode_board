"use client"
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw"
import "../../../components/ui/custom/excalidraw.css"
// import "@excalidraw/excalidraw/index.css"

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div className="excalidraw-container">
      <Excalidraw />
    </div>
  )
}
export default ExcalidrawWrapper
