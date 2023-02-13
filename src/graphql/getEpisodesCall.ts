import { gql } from "@apollo/client";

export const GET_EPISODES_SEASON_4 = gql`
  query getEpisodesFromSeason4 {
    episodes(filter: { episode: "S04" }) {
      results {
        episode
        name
        air_date
      }
    }
  }
`;
