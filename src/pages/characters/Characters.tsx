import CharacterContainer from "./components/character-container/CharacterContainer";
import CharacterForm from "./components/character-form/CharacterForm";

const Characters: React.FC = () => {
  return (
    <div className="flex  flex-col justify-center gap-4 h-100">
      <CharacterForm />
      <CharacterContainer />
    </div>
  );
};

export default Characters;
