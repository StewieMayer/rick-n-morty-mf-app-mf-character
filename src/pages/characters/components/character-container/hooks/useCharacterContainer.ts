import { useGetCharactersMutation } from "@/app/features/charactersApi";
import { selectCharacter, setCharacters, setCount,setPages,setNext,setPrev } from "@/app/features/characterSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/hooks";
import { setIsModalOpen } from "@/app/features/characterSlice";
import { RootState } from "@/app/store";
import { useEffect } from "react";

const useCharacterContainer = () => {
  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );

  const dispatch = useAppDispatch();

  const { characters, currentCharacter, isModalOpen } =
    characterState;
  const onClose = () => dispatch(setIsModalOpen(!isModalOpen));

  const [getCharacters, { isLoading, isError }] =
    useGetCharactersMutation();

  useEffect(() => {
    getCharacters({})
      .unwrap()
      .then(({info:{count,pages,next,prev},results}) => {
        dispatch(setCount(count))
        dispatch(setPages(pages))
        dispatch(setNext(next))
        dispatch(setPrev(prev))
        dispatch(setCharacters(results));
      });
  }, []);

  return {
    onClose,
    currentCharacter,
    isModalOpen,
    characters,
    isLoading,
    isError,
  };
};

export default useCharacterContainer;
