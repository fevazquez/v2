import React, { useState, useRef } from "react";
import { useOnClickOutside, useHandleScreenResize, useIsLoading } from "./hooks";

import { Routes, Route, useLocation } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

import { NavBar, HomePage, NotFound, MainQC } from "./components";

import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const node = useRef();

  useIsLoading(isLoading, setIsLoading, 4000);
  useHandleScreenResize(setIsMobile);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {!isLoading || location.pathname !== "/" ? (
        <NavBar
          open={open}
          setOpen={setOpen}
          isMobile={isMobile}
          node={node}
          menuId={"main-menu"}
        />
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage isLoading={isLoading} isMobile={isMobile} open={open} />
          }
        />
        <Route path="/qc" element={<MainQC />} isMobile={isMobile} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;