import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "./hooks";

import { Routes, Route, useLocation } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { NavBar, HomePage, Archive, NotFound } from "./components";

import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

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

      {!isLoading || location.pathname !== "/" ? (
        <NavBar open={open} setOpen={setOpen} node={node} menuId={menuId} />
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/"
          element={<HomePage isLoading={isLoading} open={open} />}
        />
        {/* <Route path="/projects" element={<Archive />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
