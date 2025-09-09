"use client";

import { Theme, ThemeContext } from "@/hooks/marketing/use-theme";
import { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Sempre iniciar em light mode por padrão
  const [theme, setTheme] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Efeito para carregar preferência salva (se existir) após primeira renderização
  useEffect(() => {
    const root = document.documentElement;

    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      root.classList.add(savedTheme);
      setTheme(savedTheme);
    }

    setIsInitialized(true);
  }, []);

  // Efeito para aplicar tema ao DOM
  useEffect(() => {
    if (!isInitialized) return;

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Salvar preferência no localStorage
    localStorage.setItem("theme", theme);
  }, [theme, isInitialized]);

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
