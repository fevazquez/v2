import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const useHandleScreenResize = (handler) => {
  useEffect(() => {
    const listener = () => {
      handler(window.innerWidth <= 768);
    }

    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    }
  // eslint-disable-next-line 
  }, []);
};

export const useIsLoading = (ref, handler, time) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handler(!ref);
    }, time);
    
    return () => {
      clearTimeout(timer);
    }
  // eslint-disable-next-line
  }, []);
};