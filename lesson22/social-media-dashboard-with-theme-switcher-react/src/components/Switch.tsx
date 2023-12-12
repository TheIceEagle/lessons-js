import styles from "./Switch.module.css";
import { ChangeEvent } from "react";

type Props = {
  checked?: boolean;
  id?: string;
  rotated?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Switch({
  checked = false,
  id = "",
  rotated = false,
  onChange,
}: Props) {
  return (
    <div className={styles.switch}>
      <input
        checked={checked}
        role="switch"
        type="checkbox"
        id={id}
        onChange={onChange}
      />
      <span className={`${styles.slider}${rotated ? " rotated" : ""}`}></span>
    </div>
  );
}

export default Switch;
