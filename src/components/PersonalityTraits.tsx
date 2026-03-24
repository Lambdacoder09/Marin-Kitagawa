import { useState } from "react";
import type { Trait } from "../types";

interface PersonalityTraitsProps {
  traits: Trait[];
}

export default function PersonalityTraits({ traits }: PersonalityTraitsProps) {
  const [selectedTrait, setSelectedTrait] = useState<number>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Personality Traits
            </span>
          </h2>
          <p className="text-red-600 text-lg">What makes Marin shine</p>
        </div>

        {/* Featured Trait */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Card */}
          <div className="md:col-span-2 group p-8 md:p-12 rounded-3xl border-2 border-red-300/50 bg-white/50 backdrop-blur-sm hover:border-red-300/80 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-red-200/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="text-7xl mb-6">{traits[selectedTrait].icon}</div>
              <h3 className="text-4xl font-bold text-red-600 mb-4">{traits[selectedTrait].name}</h3>
              <p className="text-lg text-red-900 leading-relaxed">
                {traits[selectedTrait].description}
              </p>
            </div>
          </div>

          {/* Trait Selector */}
          <div className="flex flex-col gap-3">
            {traits.map((trait, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTrait(idx)}
                className={`group p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedTrait === idx
                    ? "border-red-400 bg-red-200/30 text-red-700"
                    : "border-red-200 bg-white/30 text-red-600 hover:border-red-300/50 hover:bg-white/50"
                }`}
              >
                <div className="text-3xl mb-2">{trait.icon}</div>
                <p className="font-bold">{trait.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* All Traits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {traits.map((trait, idx) => (
            <div
              key={idx}
              className="group relative p-4 rounded-xl border border-red-200 bg-white/40 backdrop-blur-sm hover:border-red-300/50 hover:bg-white/60 transition-all duration-300 cursor-pointer text-center"
              onClick={() => setSelectedTrait(idx)}
            >
              <div
                className={`text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 ${
                  selectedTrait === idx ? "scale-125" : ""
                }`}
              >
                {trait.icon}
              </div>
              <p className={`font-bold transition-colors duration-300 ${selectedTrait === idx ? "text-red-600" : "text-red-700"}`}>
                {trait.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
