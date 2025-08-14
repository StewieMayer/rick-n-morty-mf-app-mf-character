import { useGetCharactersQuery } from "@/app/features/charactersApi";
import { selectCharacter } from "@/app/features/characterSlice";
import { useAppSelector } from "@/app/features/hooks";
import { RootState } from "@/app/store";

const useCharacterContainer = () => {
  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );

  const { data, isLoading, isError } = useGetCharactersQuery(characterState);

  return {
    characters: data?.results || [],
    isLoading,
    isError,
  };
};

export default useCharacterContainer;
