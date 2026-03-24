import type { CharacterData } from "../types";
import HeroSection from "../components/HeroSection";
import characterData from "../data/character.json";

export default function HomePage() {
  const character = characterData as CharacterData;

  return (
    <div className="min-h-screen">
      <HeroSection character={character} />
    </div>
  );
}
