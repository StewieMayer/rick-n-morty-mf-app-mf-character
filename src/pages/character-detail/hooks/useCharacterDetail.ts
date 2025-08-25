import { useGetCharacterDetailQuery } from "@/app/features/characterDetailApi";
import { useParams } from "react-router-dom";

const useCharacterDetail = () => {
  const { id } = useParams();
  const { data: character, isLoading, isError, error } = useGetCharacterDetailQuery(id!);

  return {
    isLoading,
    isError,
    error,
    character,
  };
};

export default useCharacterDetail;
