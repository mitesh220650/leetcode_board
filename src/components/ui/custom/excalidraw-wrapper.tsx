"use client"
import React, { useEffect, useState } from "react";

import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw"
import {serializeAsJSON} from "@excalidraw/excalidraw"
import { useTheme } from "next-themes";
import "../../../components/ui/custom/excalidraw.css";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"

const ExcalidrawWrapper: React.FC = () => {
  const { theme } = useTheme();
  const onchange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  )  => {
    console.log("function invoked");
    const content = serializeAsJSON(elements, appState, files, "local")
    localStorage.setItem("excalidraw", content);
  }

  const retrieveInitialData = () => {
    const content = localStorage.getItem("excalidraw")
    if(content != null) {
      return JSON.parse(content)
    }
  }
  return (
    <div className={`excalidraw-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Excalidraw theme={theme === 'dark' ? 'dark' : 'light'} onChange = {onchange} initialData={retrieveInitialData()} >
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint/>
          <WelcomeScreen.Hints.HelpHint/>
          <WelcomeScreen.Hints.MenuHint/>
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.LoadScene/>
          <MainMenu.DefaultItems.Export/>
          <MainMenu.DefaultItems.SaveAsImage/>
          <MainMenu.DefaultItems.Help/>
          <MainMenu.DefaultItems.ClearCanvas/>
          <MainMenu.DefaultItems.ToggleTheme/>
          <MainMenu.DefaultItems.ChangeCanvasBackground/>
        </MainMenu>
      </Excalidraw>
    </div>
  );
};

export default ExcalidrawWrapper;
