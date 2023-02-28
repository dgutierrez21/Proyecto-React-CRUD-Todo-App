import { useEffect, useState } from "react";

import styles from "./cssmodules/ThemeSwitcher.module.css";

import {
  SunIcon,
  XMarkIcon,
  SwatchIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false);
  const [theme, setTheme] = useState("light");
  const [hue, setHue] = useState("240");

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  const changeTheme = theme === "light" ? "dark" : "light";

  const handleThemeBtn = () => setTheme(changeTheme);

  return (
    <aside className={styles.wrapper}>
      {isColorPicking ? (
        <>
          <button
            onClick={() => setIsColorPicking(false)}
            aria-label="Close color picking mode"
            className={`btn ${styles.close}`}
          >
            <XMarkIcon />
          </button>

          <input
            min="0"
            max="360"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
            className={styles.picker}
            type="range"
          />
        </>
      ) : (
        <div className={styles.btns}>
          <button
            role="switch"
            aria-label={`Change theme to ${changeTheme} mode`}
            onClick={handleThemeBtn}
            className="btn"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            aria-label="Enable color picking mode"
            onClick={() => setIsColorPicking(true)}
            className="btn"
          >
            <SwatchIcon />
          </button>
        </div>
      )}
    </aside>
  );
};
