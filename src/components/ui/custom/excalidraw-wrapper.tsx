"use client"
import React, { useEffect, useState } from "react";

import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw"
import { useTheme } from "next-themes";
import "../../../components/ui/custom/excalidraw.css";

const ExcalidrawWrapper: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`excalidraw-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Excalidraw theme={theme === 'dark' ? 'dark' : 'light'} >
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
