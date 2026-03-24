import type { CharacterData } from "../types";

interface CharacterInfoProps {
  character: CharacterData;
  details: any;
}

export default function CharacterInfo({ character, details }: CharacterInfoProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Character Profile
            </span>
          </h2>
          <p className="text-red-600 text-lg">Get to know Marin better</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Bio Card */}
          <div className="group relative p-8 rounded-2xl border border-red-300/30 bg-white/40 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-200/30">
            <div className="absolute inset-0 bg-gradient-to-br from-red-200/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-red-600 mb-4">About Marin</h3>
              <p className="text-red-900 leading-relaxed">
                {character.description}
              </p>
              <p className="text-red-700 text-sm mt-4 italic">
                "Being confident about yourself is the best outfit you can wear."
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="space-y-4">
            <div className="group p-6 rounded-xl border border-red-300/30 bg-white/40 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300">
              <p className="text-sm text-red-600 uppercase tracking-widest mb-2">Age</p>
              <p className="text-3xl font-bold text-red-600">{details.age}</p>
            </div>

            <div className="group p-6 rounded-xl border border-red-300/30 bg-white/40 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300">
              <p className="text-sm text-red-600 uppercase tracking-widest mb-2">School</p>
              <p className="text-xl font-bold text-red-600">{details.school}</p>
              <p className="text-sm text-red-700">{details.grade}</p>
            </div>

            <div className="group p-6 rounded-xl border border-red-300/30 bg-white/40 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300">
              <p className="text-sm text-red-600 uppercase tracking-widest mb-2">Birthday</p>
              <p className="text-2xl font-bold text-red-600">{details.birthday}</p>
            </div>
          </div>
        </div>

        {/* Hobbies and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hobbies */}
          <div className="p-8 rounded-2xl border border-red-300/30 bg-white/40 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Hobbies & Interests</h3>
            <div className="space-y-3">
              {details.hobbies.map((hobby: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-red-200/20 border border-red-300/30 hover:border-red-300/60 transition-all duration-300"
                >
                  <span className="text-2xl">🎨</span>
                  <span className="font-semibold text-red-900">{hobby}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="p-8 rounded-2xl border border-red-300/30 bg-white/40 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Skills & Talents</h3>
            <div className="space-y-3">
              {details.skills.map((skill: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-red-200/20 border border-red-300/30 hover:border-red-300/60 transition-all duration-300"
                >
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold text-red-900">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
