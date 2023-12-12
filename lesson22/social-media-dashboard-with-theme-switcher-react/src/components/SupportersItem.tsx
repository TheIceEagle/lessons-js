import { Supporter } from "../types";
import Icon from "./icons";
import { formatNumber } from "../utils";
import styles from "./SupportersItem.module.css";

type Props = {
  supporter: Supporter;
};

function SupportersItem({ supporter }: Props) {
  const isGrowing = supporter.diff >= 0;

  return (
    <article className={`${styles.article} ${supporter.platform}`}>
      <header className={styles.header}>
        <figure>
          <Icon icon={supporter.platform} />
        </figure>
        <span>{supporter.user}</span>
      </header>
      <main className={styles.main}>
        <data value={supporter.amount}>{formatNumber(supporter.amount)}</data>
        <span>{supporter.label}</span>
      </main>
      <footer
        className={`${isGrowing ? styles.up : styles.down} ${styles.footer}`}
      >
        {isGrowing ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
          </svg>
        )}
        <data value={supporter.diff}>{supporter.diff}</data>
        <span>Today</span>
      </footer>
    </article>
  );
}

export default SupportersItem;
