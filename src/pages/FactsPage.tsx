import type { CharacterData } from "../types";
import TriviaSection from "../components/TriviaSection";
import characterData from "../data/character.json";

export default function FactsPage() {
  const character = characterData as CharacterData;

  return (
    <div className="min-h-screen pt-20">
      <TriviaSection facts={character.facts} />
    </div>
  );
}
