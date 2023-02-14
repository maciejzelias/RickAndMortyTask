import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer data-testid="footer" className={styles["main-footer"]}>
      <h1>LOREM IPSUM ©2021</h1>
    </footer>
  );
}
