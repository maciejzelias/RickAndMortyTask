import React from "react";
import styles from "./Description.module.css";

export default function Description() {
  return (
    <h2 className={styles.text}>
      Episodes of the <span className={styles.bold}>4th</span>
      <br></br>
      season of the series<br></br>
      <span className={styles.titleText}>Rick and Morty</span>
    </h2>
  );
}
