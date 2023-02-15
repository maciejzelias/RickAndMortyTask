import React from "react";
import { Episode as episodeModel } from "../../models/episode";
import styles from "./Episode.module.css";
import { useMediaQuery } from "react-responsive";

interface episodeProps {
  props: episodeModel;
  index: number;
  length: number;
}

export default function Episode({ props, index, length }: episodeProps) {
  const isMobileView = useMediaQuery({
    query: "(max-width: 700px)",
  });
  return (
    <li data-testid="episode-element">
      {isMobileView && <h2 className={styles.episode}>{props.episode}</h2>}
      <h2 className={styles.title}>{props.name}</h2>
      <h3 className={styles.date}>{props.air_date}</h3>
      {isMobileView && index + 1 !== length && (
        <hr data-testid className={styles.horizontalDivider}></hr>
      )}
    </li>
  );
}
