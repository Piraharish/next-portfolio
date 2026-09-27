"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeShortcut() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable;

      if (isTyping || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      if (event.key.toLowerCase() === "d") {
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theme, setTheme]);

  return null;
}
