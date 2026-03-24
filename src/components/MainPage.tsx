import { useState, useEffect } from "react";
import type { CharacterData, GalleryCategory } from "../types";
import characterData from "../data/character.json";
import galleryData from "../data/gallery.json";
import detailsData from "../data/details.json";

import HeroSection from "./HeroSection";
import CharacterInfo from "./CharacterInfo";
import CosplayGallery from "./CosplayGallery";
import PersonalityTraits from "./PersonalityTraits";
import QuotesSection from "./QuotesSection";
import TriviaSection from "./TriviaSection";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function MainPage() {
  const [character] = useState<CharacterData>(characterData as CharacterData);
  const [gallery] = useState<{ categories: GalleryCategory[] }>(galleryData);
  const [details] = useState(detailsData);
  const [currentSection, setCurrentSection] = useState<string>("hero");

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-100 to-red-50 text-red-900 overflow-hidden relative">
      {/* Snowflakes background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl opacity-40 animate-float">❄️</div>
        <div className="absolute top-20 right-20 text-3xl opacity-30 animate-float animation-delay-2000">❄️</div>
        <div className="absolute top-1/3 left-1/4 text-2xl opacity-25 animate-float animation-delay-4000">✨</div>
        <div className="absolute top-1/2 right-1/3 text-3xl opacity-35 animate-float">❄️</div>
        <div className="absolute bottom-20 left-1/3 text-4xl opacity-30 animate-float animation-delay-2000">❄️</div>
        <div className="absolute bottom-1/3 right-10 text-2xl opacity-40 animate-float animation-delay-4000">✨</div>
      </div>
      
      {/* Festive gradient overlays */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-60"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

        <div id="hero" className="scroll-mt-20">
          <HeroSection character={character} />
        </div>

        <div id="about" className="scroll-mt-20">
          <CharacterInfo character={character} details={details} />
        </div>

        <div id="traits">
          <PersonalityTraits traits={character.traits} />
        </div>

        <div id="gallery" className="scroll-mt-20">
          <CosplayGallery categories={gallery.categories} />
        </div>

        <div id="quotes" className="scroll-mt-20">
          <QuotesSection quotes={character.quotes} />
        </div>

        <div id="facts" className="scroll-mt-20">
          <TriviaSection facts={character.facts} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
