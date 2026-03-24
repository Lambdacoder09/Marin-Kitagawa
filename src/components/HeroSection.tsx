import type { CharacterData } from "../types";

interface HeroSectionProps {
  character: CharacterData;
}

export default function HeroSection({ character }: HeroSectionProps) {
  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-red-50 via-pink-100 to-red-50">
      {/* Glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        {/* Left side - Text */}
        <div className="space-y-8 animate-fade-in-left text-center md:text-left px-2 sm:px-0">
          <div>
            <h2 className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-4">Welcome to</h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent leading-tight mb-4">
              {character.name}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white/60 backdrop-blur-xl border border-red-200/70 rounded-2xl p-4 shadow-sm mb-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-red-500">Profile Summary</p>
                <p className="text-lg sm:text-xl text-red-500 font-semibold tracking-wide">{character.fullName}</p>
                <p className="text-xs text-red-500">{character.kanji} • {character.romaji}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-red-600">{character.personalDetails.age}</p>
                <p className="text-xs text-red-600">{character.personalDetails.dateOfBirth} • {character.personalDetails.zodiac}</p>
                <p className="text-xs text-red-600">{character.personalDetails.occupation}</p>
              </div>
            </div>

          <p className="text-lg sm:text-xl text-red-500 font-semibold tracking-wide">{character.nickname}</p>
          </div>

          <p className="text-xl text-red-700 leading-relaxed max-w-xl">
            {character.tagline}
          </p>

          <p className="text-lg text-red-600 leading-relaxed max-w-xl">
            {character.description}
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={scrollToGallery}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-400/50"
            >
              <span className="relative z-10">Explore Gallery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => {
                const about = document.getElementById("about");
                if (about) about.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border-2 border-red-400/50 text-red-600 font-bold rounded-lg hover:bg-red-100 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-red-300/20">
            <div className="group">
              <p className="text-3xl font-bold text-red-600 group-hover:text-red-500 transition-colors">17</p>
              <p className="text-red-600 text-sm">Age</p>
            </div>
            <div className="group">
              <p className="text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">2nd Year</p>
              <p className="text-red-600 text-sm">School</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-red-200 shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Marin Kitagawa (profile snapshot)</h3>
            <ul className="space-y-1 text-sm text-red-700">
              <li><span className="font-semibold">Nickname:</span> Marine</li>
              <li><span className="font-semibold">Birthdate:</span> March 5</li>
              <li><span className="font-semibold">Age:</span> 17 (2nd year high school)</li>
              <li><span className="font-semibold">Height:</span> 164 cm</li>
              <li><span className="font-semibold">Hobbies:</span> Cosplay, sewing, fashion</li>
              <li><span className="font-semibold">Favorite:</span> Sono Bisque Doll (cosplay vibe)</li>
            </ul>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative order-first md:order-none h-72 sm:h-80 md:h-[520px] lg:h-[600px] animate-fade-in-right group w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-pink-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-red-300/40 group-hover:border-red-300/80 transition-all duration-500 shadow-2xl bg-white/20 backdrop-blur-sm">
            <img
              src="https://images8.alphacoders.com/140/thumb-1920-1400182.jpg"
              alt="Marin Kitagawa"
              className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/35 via-transparent to-transparent"></div>

            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-sm font-semibold text-white uppercase tracking-widest">Confident • Creative • Passionate</p>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-300/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-200/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
