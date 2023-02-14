import React, { useState } from "react";

import Episode from "./Episode";
import { Episode as episodeModel } from "../../models/episode";
import styles from "./EpisodesList.module.css";
import { useQuery } from "@apollo/client";
import { GET_EPISODES_SEASON_4 } from "../../graphql/getEpisodesCall";

interface EpisodeData {
  episodes: {
    results: episodeModel[];
  };
}

export default function EpisodesList() {
  const { loading, error, data } = useQuery<EpisodeData>(GET_EPISODES_SEASON_4);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return null;
  }

  return (
    <div className={styles.list}>
      <ul className={styles.leftList}>
        {data.episodes.results.map((res) => (
          <li key={res.episode}>
            <h2 className={styles.episodeId}>{res.episode}</h2>
          </li>
        ))}
      </ul>
      <hr className={styles.verticalDivider}></hr>
      <ul className={styles.rightList}>
        {data.episodes.results.map((res, idx) => (
          <Episode
            props={res}
            key={res.episode}
            index={idx}
            length={data.episodes.results.length}
          />
        ))}
      </ul>
    </div>
  );
}
