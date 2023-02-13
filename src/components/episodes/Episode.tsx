import React from "react";
import { Episode as episodeModel } from "../../models/episode";
import styles from "./Episode.module.css";

interface episodeProps {
  props: episodeModel;
}

export default function Episode({ props }: episodeProps) {
  return (
    <li>
      <h2 className={styles.title}>{props.title}</h2>
      <h3 className={styles.date}>{props.date}</h3>
    </li>
  );
}