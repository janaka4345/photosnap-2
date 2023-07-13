"use client";
import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="realtive flex justify-center  order-last items-center w-10 h-10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="rotate-0 absolute   scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute   rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
