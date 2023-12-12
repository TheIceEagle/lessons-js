import SupportersItem from "./SupportersItem.tsx";
import { Supporter } from "../types";
import styles from "./SupportersList.module.css";

type Props = {
  list: Supporter[];
};

function SupportersList({ list = [] }: Props) {
  return (
    <ul className={styles.list}>
      {list.map((supporter) => (
        <li>
          <SupportersItem key={supporter.id} supporter={supporter} />
        </li>
      ))}
    </ul>
  );
}

export default SupportersList;
