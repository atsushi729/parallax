"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const HeaderContext = createContext(false);

export function useHeaderHidden() {
  return useContext(HeaderContext);
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      setHidden(curr > lastScroll.current && curr > 100);
      lastScroll.current = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderContext.Provider value={hidden}>{children}</HeaderContext.Provider>
  );
}
