import { Episode } from "../models/episode";

export interface EpisodeData {
  episodes: {
    results: Episode[];
  };
}
