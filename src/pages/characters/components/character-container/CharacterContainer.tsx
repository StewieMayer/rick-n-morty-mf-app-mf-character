import { Character } from "@/types/characterTypes";
import useCharacterContainer from "./hooks/useCharacterContainer";
import CharacterCard from "./components/CharacterCard";

const CharacterContainer: React.FC = () => {
  const { characters } = useCharacterContainer();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {characters.map((character: Character) => (
        <CharacterCard {...character} />
      ))}
    </div>
  );
};

export default CharacterContainer;
