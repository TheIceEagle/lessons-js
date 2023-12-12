import { Overview, Supporter } from "../types";
import SupportersList from "./SupportersList.tsx";
import styles from "./Main.module.css";
import OverviewsList from "./OverviewsList.tsx";
import { useEffect, useState } from "react";

const overviews: Overview[] = [
  {
    id: crypto.randomUUID(),
    name: "Page Views",
    platform: "facebook",
    amount: 87,
    diff: 3,
  },
  {
    id: crypto.randomUUID(),
    name: "Likes",
    platform: "facebook",
    amount: 52,
    diff: -2,
  },
  {
    id: crypto.randomUUID(),
    name: "Likes",
    platform: "instagram",
    amount: 5462,
    diff: 2257,
  },
  {
    id: crypto.randomUUID(),
    name: "Profile Views",
    platform: "instagram",
    amount: 52341,
    diff: 1375,
  },
  {
    id: crypto.randomUUID(),
    name: "Retweets",
    platform: "twitter",
    amount: 117,
    diff: 303,
  },
  {
    id: crypto.randomUUID(),
    name: "Likes",
    platform: "twitter",
    amount: 507,
    diff: 553,
  },
  {
    id: crypto.randomUUID(),
    name: "Likes",
    platform: "youtube",
    amount: 107,
    diff: -19,
  },
  {
    id: crypto.randomUUID(),
    name: "Total Views",
    platform: "youtube",
    amount: 1407,
    diff: -12,
  },
];

function Main() {
  const [supporters, setSupporters] = useState<Supporter[]>([
    {
      id: crypto.randomUUID(),
      user: "@nathanf",
      platform: "facebook",
      amount: 1987,
      label: "Followers",
      diff: 12,
    },
    {
      id: crypto.randomUUID(),
      user: "@nathanf",
      platform: "twitter",
      amount: 1044,
      label: "Followers",
      diff: 99,
    },
    {
      id: crypto.randomUUID(),
      user: "@realnathanf",
      platform: "instagram",
      amount: 11123,
      label: "Followers",
      diff: 1099,
    },
    {
      id: crypto.randomUUID(),
      user: "Nathan F.",
      platform: "youtube",
      amount: 8239,
      label: "SUBSCRIBERS",
      diff: -144,
    },
  ]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSupporters((prevSupporters) => [
        { ...prevSupporters[0], amount: 2000 },
        ...prevSupporters.slice(1),
      ]);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles["outer-container"]}>
        <div className={styles["inner-container"]}>
          <section className={styles["supporters"]}>
            <SupportersList list={supporters} />
          </section>
          <section className={styles["overview"]}>
            <h3>Overview - Today</h3>
            <OverviewsList overviews={overviews} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Main;
