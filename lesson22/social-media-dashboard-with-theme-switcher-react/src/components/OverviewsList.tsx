import { Overview } from "../types";
import OverviewsItem from "./OverviewsItem.tsx";
import styles from "./OverviewsList.module.css";

type Props = {
  overviews: Overview[];
};

function OverviewsList({ overviews = [] }: Props) {
  return (
    <ul className={styles.list}>
      {overviews.map((overview) => (
        <li>
          <OverviewsItem key={overview.id} overview={overview} />
        </li>
      ))}
    </ul>
  );
}

export default OverviewsList;
