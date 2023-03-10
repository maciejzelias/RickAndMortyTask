import React from "react";
import { Episode as episodeModel } from "../../models/episode";
import styles from "./Episode.module.css";
import { useMediaQuery } from "react-responsive";

interface episodeProps {
  props: episodeModel;
  isLast: boolean;
}
function Episode({ props, isLast }: episodeProps) {
  const isMobileView = useMediaQuery({
    query: "(max-width: 700px)",
  });
  return (
    <li data-testid="episode-element">
      {isMobileView && <p className={styles.episode}>{props.episode}</p>}
      <p className={styles.title}>{props.name}</p>
      <p className={styles.date}>{props.air_date}</p>
      {isMobileView && !isLast && (
        <hr data-testid className={styles.horizontalDivider}></hr>
      )}
    </li>
  );
}

export default React.memo(Episode);
