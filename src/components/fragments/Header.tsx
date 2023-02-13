import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["main-header"]}>
      <h1>LOREM IPSUM</h1>
      <div className={styles.right}></div>
    </header>
  );
}
