import { useState } from "react";
import type { GalleryCategory } from "../types";
import ImageModal from "./ImageModal";

interface CosplayGalleryProps {
  categories: GalleryCategory[];
}

export default function CosplayGallery({ categories }: CosplayGalleryProps) {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const currentCategory = categories[selectedCategoryIdx];
  const selectedImage = selectedImageIdx !== null ? currentCategory.images[selectedImageIdx] : null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Cosplay Gallery
            </span>
          </h2>
          <p className="text-red-600 text-lg">stunning costumes & moments</p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-3 justify-center flex-wrap">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedCategoryIdx(idx);
                setSelectedImageIdx(null);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedCategoryIdx === idx
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-400/50"
                  : "border border-red-300/50 text-red-600 hover:border-red-300/80 hover:bg-red-100/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <p className="text-center text-red-600 mb-8">{currentCategory.description}</p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentCategory.images.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setSelectedImageIdx(idx)}
              className="group relative h-64 rounded-2xl overflow-hidden border border-red-300/30 hover:border-red-300/60 transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=500&fit=crop";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                <p className="text-red-200 text-sm">{image.description}</p>
              </div>

              {/* View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-4 border-2 border-red-400/50 text-red-600 font-bold rounded-lg hover:bg-red-200/20 transition-all duration-300">
            Load More Images
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          category={currentCategory}
          onClose={() => setSelectedImageIdx(null)}
          hasPrev={selectedImageIdx! > 0}
          hasNext={selectedImageIdx! < currentCategory.images.length - 1}
          onPrev={() => selectedImageIdx! > 0 && setSelectedImageIdx(selectedImageIdx! - 1)}
          onNext={() =>
            selectedImageIdx! < currentCategory.images.length - 1 &&
            setSelectedImageIdx(selectedImageIdx! + 1)
          }
        />
      )}
    </section>
  );
}
