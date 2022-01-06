import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "./hooks";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { SplashScreen, NavBar, HomePage } from "./components";

import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const menuId = "main-menu";
  const node = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <NavBar open={open} setOpen={setOpen} node={node} menuId={menuId} />
          <HomePage open={open} />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
