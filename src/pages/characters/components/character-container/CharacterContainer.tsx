import { Character } from "@/types/characterTypes";
import useCharacterContainer from "./hooks/useCharacterContainer";

const CharacterContainer: React.FC = () => {
  const { characters } = useCharacterContainer();

  return (
    <div className="flex justify-center items-center">
      {characters.map(({ id, name }: Character) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default CharacterContainer;
