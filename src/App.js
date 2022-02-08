import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "./hooks";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { SplashScreen, NavBar, HomePage, NotFound } from "./components";

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
        <BrowserRouter>
          <NavBar open={open} setOpen={setOpen} node={node} menuId={menuId} />
          <Routes>
            <Route path="/" element={<HomePage open={open} />} />
            <Route path="/projects" element={<div>Work in progress</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
