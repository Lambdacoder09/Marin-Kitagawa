import { useEffect } from "react";
import type { GalleryImage, GalleryCategory } from "../types";

interface ImageModalProps {
  image: GalleryImage;
  category: GalleryCategory;
  onClose: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageModal({
  image,
  category,
  onClose,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, hasPrev, hasNext, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-white border border-red-300/50 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image */}
        <div className="relative w-full aspect-video bg-red-100 overflow-hidden">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop";
            }}
          />
        </div>

        {/* Info Section */}
        <div className="p-6 border-t border-red-200">
          <h2 className="text-3xl font-bold text-red-600 mb-2">{image.title}</h2>
          <p className="text-red-700 mb-2">{image.description}</p>
          <span className="inline-block px-3 py-1 bg-red-200/50 border border-red-300/80 rounded-full text-sm text-red-700">
            {category.name}
          </span>
        </div>

        {/* Navigation */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div className="text-red-700 text-sm font-semibold bg-white/60 px-4 py-2 rounded-full">
            Photo Gallery
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-red-200/30 rounded-full transition-colors duration-300"
            title="Press ESC to close"
          >
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Arrow Navigation */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute top-1/2 -translate-y-1/2 left-4 p-2 hover:bg-red-200/30 rounded-full transition-colors duration-300"
            title="Press ← to go previous"
          >
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {hasNext && (
          <button
            onClick={onNext}
            className="absolute top-1/2 -translate-y-1/2 right-4 p-2 hover:bg-red-200/30 rounded-full transition-colors duration-300"
            title="Press → to go next"
          >
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
