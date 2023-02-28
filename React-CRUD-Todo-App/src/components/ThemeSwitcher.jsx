import { useState } from "react";

import styles from "./cssmodules/ThemeSwitcher.module.css";

import { SunIcon, SwatchIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = theme === "light" ? "dark" : "light";

  const handleThemeBtn = () => setTheme(changeTheme);

  return (
    <aside className={styles.wrapper}>
      <div className={styles.btns}>
        <button
          role="switch"
          aria-label={`Change theme to ${changeTheme} mode`}
          onClick={handleThemeBtn}
          className="btn"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
        <button className="btn">
          <SwatchIcon />
        </button>
      </div>
    </aside>
  );
};
