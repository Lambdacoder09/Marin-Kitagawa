import { useState } from "react";
import type { CharacterData } from "../types";
import CharacterInfo from "../components/CharacterInfo";
import PersonalityTraits from "../components/PersonalityTraits";
import characterData from "../data/character.json";
import detailsData from "../data/details.json";

export default function AboutPage() {
  const character = characterData as CharacterData;
  const [details] = useState(detailsData);

  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <CharacterInfo character={character} details={details} />
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <PersonalityTraits traits={character.traits} />
      </div>
    </div>
  );
}
