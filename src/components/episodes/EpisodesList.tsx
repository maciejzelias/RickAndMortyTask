import React, { useState } from "react";

import Episode from "./Episode";
import styles from "./EpisodesList.module.css";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState<any[]>([
    {
      id: "S04E01",
      title: "Edge of Tomorty: Rick, Die, Rickpeat",
      date: "10.11.2019",
    },
    {
      id: "S04E02",
      title: "The Old Man and the Seat",
      date: "17.11.2019",
    },
    {
      id: "S04E03",
      title: "One Crew Over the Crewcoo’s Morty",
      date: "24.11.2019",
    },
    {
      id: "S04E04",
      title: "Claw and Hoarder: Special Ricktim’s Morty",
      date: "08.12.2019",
    },
    {
      id: "S04E05",
      title: "Rattlestar Ricklactica",
      date: "15.12.2019",
    },
    {
      id: "S04E06",
      title: "Never Ricking Morty",
      date: "03.05.2020",
    },
    {
      id: "S04E07",
      title: "Promortyus",
      date: "10.03.2020",
    },
    {
      id: "S04E08",
      title: "The Vat of Acid Episode",
      date: "17.03.2020",
    },
    {
      id: "S04E09",
      title: "Childrick of Mort",
      date: "24.03.2020",
    },
    {
      id: "S04E10",
      title: "Star Mort: Rickturn of the Jerri",
      date: "31.03.2020",
    },
  ]);
  return (
    <div className={styles.list}>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <h2 className={styles.episodeId}>{episode.id}</h2>
          </li>
        ))}
      </ul>
      <hr></hr>
      <ul className={styles.rightList}>
        {episodes.map((episode) => (
          <Episode props={episode} key={episode.id} />
        ))}
      </ul>
    </div>
  );
}
