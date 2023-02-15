import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer data-testid="footer" className={styles["main-footer"]}>
      <p>LOREM IPSUM ©2021</p>
    </footer>
  );
}
