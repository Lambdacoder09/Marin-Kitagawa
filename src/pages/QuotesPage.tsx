import type { CharacterData } from "../types";
import QuotesSection from "../components/QuotesSection";
import characterData from "../data/character.json";

export default function QuotesPage() {
  const character = characterData as CharacterData;

  return (
    <div className="min-h-screen pt-20">
      <QuotesSection quotes={character.quotes} />
    </div>
  );
}
