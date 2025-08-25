import { useGetEpisodeQuery } from "@/app/features/episodeDetailApi";
import {
  EpisodeDetailProps,
  UseEpisodeDetailResponse,
} from "@/types/episodeTypes";

const useEpisodeDetail = ({
  episodes,
}: EpisodeDetailProps): UseEpisodeDetailResponse => {
  const episodeParamIds = episodes.map((url) => url.split("/").pop()).join(",");
  const { data: episodesData, isLoading } = useGetEpisodeQuery(episodeParamIds);

  return {
    isLoading,
    episodesData: episodesData || [],
  };
};

export default useEpisodeDetail;
