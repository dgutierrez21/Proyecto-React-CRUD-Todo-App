import styles from "./cssmodules/ThemeSwitcher.module.css";

import { SwatchIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.btns}>
        <button className="btn">
          <MoonIcon />
        </button>
        <button className="btn">
          <SwatchIcon />
        </button>
      </div>
    </aside>
  );
};
