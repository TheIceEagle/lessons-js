import DarkModeSwitch from "./DarkModeSwitch.tsx";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["outer-container"]}>
        <div className={styles["inner-container"]}>
          <hgroup className={styles["title"]}>
            <h1>Social Media Dashboard</h1>
            <h2>Total Followers: 23,004</h2>
          </hgroup>
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
