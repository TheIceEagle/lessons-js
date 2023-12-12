import Switch from "./Switch.tsx";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./DarkModeSwitch.module.css";

function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(
    window?.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false,
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    window?.matchMedia("(prefers-color-scheme: dark)")?.addEventListener(
      "change",
      ({ matches }) => {
        setIsDark(matches);
      },
      { signal },
    );

    return () => {
      controller?.abort();
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;

    setIsDark(currentTarget.checked);
  }, []);

  return (
    <label className={styles.switch} htmlFor="switch">
      <span className={styles.text}>Dark Mode</span>
      <span className={styles["switch-container"]}>
        <Switch
          checked={isDark}
          rotated={true}
          id="switch"
          onChange={changeHandler}
        />
      </span>
    </label>
  );
}

export default DarkModeSwitch;
