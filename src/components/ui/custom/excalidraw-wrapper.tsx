"use client"

import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { useTheme } from "next-themes";
import "../../../components/ui/custom/excalidraw.css";

const ExcalidrawWrapper: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`excalidraw-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Excalidraw theme={theme === 'dark' ? 'dark' : 'light'} />
    </div>
  );
};

export default ExcalidrawWrapper;
