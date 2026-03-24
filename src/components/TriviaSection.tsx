import type { Fact } from "../types";

interface TriviaSectionProps {
  facts: Fact[];
}

export default function TriviaSection({ facts }: TriviaSectionProps) {
  const categories = Array.from(new Set(facts.map((f) => f.category)));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Fun Facts & Trivia
            </span>
          </h2>
          <p className="text-red-600 text-lg">Interesting things about Marin</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl border border-red-200 bg-white/40 backdrop-blur-sm hover:border-red-300/80 hover:bg-white/60 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">
                    {fact.category === "Hobby" && "🎨"}
                    {fact.category === "Skills" && "⭐"}
                    {fact.category === "Personality" && "💖"}
                    {fact.category === "Social" && "👥"}
                    {fact.category === "Character" && "✨"}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-red-600 group-hover:text-red-500 transition-colors mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-red-700 text-sm group-hover:text-red-600 transition-colors leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>

                <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold text-red-600 bg-red-200/40 border border-red-300/50 rounded-full uppercase tracking-widest">
                  {fact.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline View Alternative */}
        <div className="mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-red-700 text-center mb-10">Discover More</h3>

          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h4 className="text-xl font-bold text-red-600 uppercase tracking-widest">
                {category}
              </h4>

              <div className="space-y-3">
                {facts
                  .filter((f) => f.category === category)
                  .map((fact, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-lg border border-red-200 bg-white/30 hover:border-red-300 hover:bg-white/50 transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-300/30 to-red-200/20 flex items-center justify-center border border-red-300/50 group-hover:border-red-400 transition-colors">
                        <span className="text-xl">
                          {category === "Hobby" && "🎨"}
                          {category === "Skills" && "⭐"}
                          {category === "Personality" && "💖"}
                          {category === "Social" && "👥"}
                          {category === "Character" && "✨"}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h5 className="font-bold text-red-600 group-hover:text-red-500 transition-colors">
                          {fact.title}
                        </h5>
                        <p className="text-sm text-red-700 mt-1">{fact.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
