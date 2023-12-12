import Icon from "./icons";
import { formatNumber } from "../utils";
import styles from "./OverviewsItem.module.css";
import { Overview } from "../types";

type Props = {
  overview: Overview;
};

function OverviewsItem({ overview }: Props) {
  const isGrowing = overview.diff >= 0;

  return (
    <article className={styles.article}>
      <section className={styles.info}>
        <span>{overview.name}</span>
        <figure>
          <Icon icon={overview.platform} />
        </figure>
      </section>
      <section className={styles.data}>
        <data className={styles.amount} value={overview.amount}>
          {formatNumber(overview.amount)}
        </data>
        <div
          className={`${styles.diff} ${isGrowing ? styles.up : styles.down}`}
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
          <data value={overview.diff}>{overview.diff}</data>
        </div>
      </section>
    </article>
  );
}

export default OverviewsItem;
