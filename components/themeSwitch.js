"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {

  const { theme, setTheme } = useTheme();

  const current = theme || "light";

  return (
    <div className="inline-flex items-center space-x-2">
      {
        current === 'light' && <button
          type="button"
          aria-label="Set dark theme"
          onClick={() => setTheme("dark")}
          className={
            "p-1 rounded focus:outline-none border-gray-500 border"
          }>
          <MoonIcon className="w-5 h-5" />
        </button>
      }
      {
        current === 'dark' && <button
          type="button"
          aria-label="Set light theme"
          onClick={() => setTheme("light")}
          className={
            "p-1 rounded focus:outline-none border-gray-200 border"
          }>
          <SunIcon className="w-5 h-5" />
        </button>
      }
    </div>
  );
};

export default ThemeSwitch;
