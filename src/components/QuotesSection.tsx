import { useState } from "react";
import type { Quote } from "../types";

interface QuotesSectionProps {
  quotes: Quote[];
}

export default function QuotesSection({ quotes }: QuotesSectionProps) {
  const [currentQuote, setCurrentQuote] = useState(0);

  const goToNext = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const goToPrev = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const quote = quotes[currentQuote];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Iconic Quotes
            </span>
          </h2>
          <p className="text-red-600 text-lg">Words that inspire</p>
        </div>

        {/* Main Quote Carousel */}
        <div className="relative mb-12">
          <div className="p-12 md:p-16 rounded-3xl border-2 border-red-300/30 bg-white/40 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300 relative overflow-hidden group min-h-80 flex flex-col justify-center">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Quote mark */}
            <div className="text-8xl text-red-300/30 leading-none mb-4 relative z-10">
              "
            </div>

            <div className="relative z-10">
              <p className="text-3xl md:text-4xl font-bold text-red-900 leading-relaxed mb-6">
                {quote.text}
              </p>

              <p className="text-lg text-red-600 font-semibold mb-2">— Marin Kitagawa</p>
              <p className="text-red-600 text-sm">{quote.context}</p>
              {quote.episode && <p className="text-red-500 text-xs mt-2 uppercase tracking-widest">{quote.episode}</p>}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-400/50 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:scale-125 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-400/50 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:scale-125 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentQuote(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentQuote === idx
                  ? "w-8 bg-gradient-to-r from-red-500 to-red-600"
                  : "w-2.5 bg-red-300 hover:bg-red-400"
              }`}
            />
          ))}
        </div>

        {/* All Quotes Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {quotes.map((q, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentQuote(idx)}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer group ${
                currentQuote === idx
                  ? "border-red-400 bg-red-200/30"
                  : "border-red-200 bg-white/30 hover:border-red-300/50 hover:bg-white/50"
              }`}
            >
              <p className="text-sm text-red-900 line-clamp-2 italic group-hover:text-red-800 transition-colors">
                "{q.text}"
              </p>
              <p className="text-xs text-red-600 mt-2">{q.episode || "Unknown Episode"}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
