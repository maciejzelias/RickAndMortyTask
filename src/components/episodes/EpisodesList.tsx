import React, { useState } from "react";

import Episode from "./Episode";
import { Episode as episodeModel } from "../../models/episode";
import styles from "./EpisodesList.module.css";
import { useQuery } from "@apollo/client";
import { GET_EPISODES_SEASON_4 } from "../../graphQL/getEpisodesCall";

interface EpisodeData {
  episodes: {
    results: episodeModel[];
  };
}

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState<any[]>([
    {
      episode: "S04E01",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
      air_date: "10.11.2019",
    },
    {
      episode: "S04E02",
      name: "The Old Man and the Seat",
      air_date: "17.11.2019",
    },
    {
      episode: "S04E03",
      name: "One Crew Over the Crewcoo’s Morty",
      air_date: "24.11.2019",
    },
    {
      episode: "S04E04",
      name: "Claw and Hoarder: Special Ricktim’s Morty",
      air_date: "08.12.2019",
    },
    {
      episode: "S04E05",
      name: "Rattlestar Ricklactica",
      air_date: "15.12.2019",
    },
    {
      episode: "S04E06",
      name: "Never Ricking Morty",
      air_date: "03.05.2020",
    },
    {
      episode: "S04E07",
      name: "Promortyus",
      air_date: "10.03.2020",
    },
    {
      episode: "S04E08",
      name: "The Vat of Acepisode Episode",
      air_date: "17.03.2020",
    },
    {
      episode: "S04E09",
      name: "Childrick of Mort",
      air_date: "24.03.2020",
    },
    {
      episode: "S04E10",
      name: "Star Mort: Rickturn of the Jerri",
      air_date: "31.03.2020",
    },
  ]);
  // const { loading, error, data } = useQuery<EpisodeData>(GET_EPISODES_SEASON_4);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }
  // if (!data) {
  //   return null;
  // }

  // console.log(data);

  return (
    <div className={styles.list}>
      <ul>
        {episodes.map((res) => (
          <li key={res.episode}>
            <h2 className={styles.episodeepisode}>{res.episode}</h2>
          </li>
        ))}
      </ul>
      <hr></hr>
      <ul className={styles.rightList}>
        {episodes.map((res) => (
          <Episode props={res} key={res.episode} />
        ))}
      </ul>
    </div>
  );
}
