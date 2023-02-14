import React from "react";
import Description from "../description";
import EpisodesList from "../episodes/EpisodesList";
import styles from "./MainContent.module.css";

export default function MainContent() {
  return (
    <main data-testid="main-content">
      <section className={styles["main-container"]}>
        <div className={styles.leftContent}>
          <Description />
          <img src="/assets/image.png" alt="Error with loading image" />
        </div>
        <EpisodesList />
      </section>
    </main>
  );
}
